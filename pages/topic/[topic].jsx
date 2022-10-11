import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Card from '../../comp/Card';
import TopicCard from '../../comp/TopicCard';
import cover from '../../resources/cover.jpeg';


const Topic = () => {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [tag, setTag] = useState({});
  const TIMEOUT_INTERVAL = 60 * 1000;
  const { topic } = router.query;

  // loads all dev.to tags 
  const loadTags = async () => {
    const devTags = `https://dev.to/api/tags/?per_page=500`;
    try {
      const tags = await axios.get(devTags)
      const selectedTag = tags.data?.find(tag => tag.name == topic)
      setTag(selectedTag)
    } catch (err) {
      console.log(err)
    }
  }

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
    loadTags();
  }, [topic]);
  // handle 0 posts in topic component 
  if (posts.length < 1) {
    return 'loading...'
  }
  return (
    <>
      <div className='topic container'>
        <TopicCard tag={tag} />
        {
          posts?.map(post => {
            return (<Card key={post.id} post={post} />)
          })
        }
      </div>
    </>
  )
}

export default Topic