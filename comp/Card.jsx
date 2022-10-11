import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({post}) => {
    const { title, description, id, tag_list, url, cover_image, social_image } = post;
  return (
    <div key={id} className="card">
      <Link href={`/article/${id}`} >
        <Image src={cover_image || social_image} alt={title} height="400" width="800" />
      </Link>
      <Link href={url} target="_blank" rel="noopener noreferrer" ><h3 className="post-title"> {title}</h3></Link>
      <p>{description}</p>
      <div className="tags">
        {tag_list.map((tag, i) => <Link key={i} href={`/topic/${tag}`}>{`#${tag}`}</Link>)}
      </div>
    </div>
  )
}

export default Card