import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Card from '../../comp/Card';
import TopicCard from '../../comp/TopicCard';


const Topic = () => {
  const router = useRouter();
  const [posts, setPosts] = useState([]);

  const TIMEOUT_INTERVAL = 60 * 1000;
  const { topic } = router.query;

  // load post according to tags 
  const loadPosts = async () => {
    // const dummyjson = 'https://dummyjson.com/posts'
    const devjs = `https://dev.to/api/articles?tag=${topic || 'python'}&per_page=50`
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

  // handle 0 posts in topic component 
  if (posts.length < 1) {
    return 'loading...'
  }

  return (
    <div className='topic container'>
      <TopicCard />
      {
        posts?.map(post => {
          return (<Card key={post.id} post={post} />)
        })
      }
    </div>
  )
}

export default Topic