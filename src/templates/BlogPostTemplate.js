import React from 'react';
import Img from "gatsby-image";

const BlogPostTemplate = ({title, date, image, content}) => {
  return (
  <>
    <h1>{title}</h1>
    <p
      style={{
        display: `block`,
      }}>
    {date}
    </p>
    {image.childImageSharp ?
      <Img fluid={image.childImageSharp.fluid} /> :
      <img src={image} alt={title}/>
    }
    <div dangerouslySetInnerHTML={{ __html: content}} />
    <hr/>
</>
)
}

export default BlogPostTemplate;
