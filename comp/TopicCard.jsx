import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";

function TopicCard() {
  const [follow, setFollow] = useState(false);
  let [tag, setTag] = useState({});
  const router = useRouter()
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
  useEffect(() => {
    loadTags();
  }, [])

  if (!tag) {
    tag = {
      "id": 154,
      "name": topic,
      "bg_color_hex": "#9725ea",
      "text_color_hex": null
    }
  }
  const src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png'

  return (
    <div className="topicCard" >
      <img className="logo" src={src} alt={tag.name} />
      <div className="content">
        <div className="title">
          <h2>{tag.name}</h2>
          <button className="main-btn" onClick={() => setFollow(!follow)}>{follow ? 'following' : 'follow'}</button>
        </div>
        <p>Once relegated to the browser as one of the 3 core technologies of the web, JavaScript can now be found almost anywhere you find code. JavaScript developers move fast and push software development forward; they can be as opinionated as the frameworks they use, so let's keep it clean here and make it a place to learn from each other!</p>
      </div>
    </div>
  )
}

export default TopicCard