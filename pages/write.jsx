import 'react-quill/dist/quill.snow.css';
import WriteSidebar from '../comp/WriteSidebar';
import { useState } from 'react';

// setting up react-quill with dynamic
import dynamic from 'next/dynamic'
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Write = () => {
  const [value, setValue] = useState('');

  // console.log(value)
  return (
    <div className='write'>
      <div className="content">
        <h3>Write new post</h3>
        <form>
          <input type="text" placeholder='Post Title' />
        </form>
        <div className="quill">
          <ReactQuill theme="snow" value={value} onChange={setValue} placeholder="Start Typing... " />
        </div>
      </div>
      <div className="menu">
        <WriteSidebar />
      </div>
    </div>
  )
}

export default Write