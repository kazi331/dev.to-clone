import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../comp/Card';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const TIMEOUT_INTERVAL = 60 * 1000

    const loadPosts = async () => {
    // const dummyjson = 'https://dummyjson.com/posts'
    const devjs = 'https://dev.to/api/articles?tag'
    try {
      const res = await axios.get(devjs, { timeout: TIMEOUT_INTERVAL })
      setPosts(res.data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    loadPosts();
  }, []);
  if (posts.length < 1) {
    return (
      <h3>Loading....</h3>
    )
  }
  return (
    <div className='topic'>
      {
        posts?.map((post) => {
          return (
            <Card key={post.id} post={post} />
          )
        })
      }
    </div>
  )
}

export default Home