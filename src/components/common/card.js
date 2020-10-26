import React from "react"
import Img from "gatsby-image"

const Card = ({ image, imgAlt, title, description }) => {
  return (
    <div className="flex flex-col">
      {image &&
      (image.childImageSharp ? (
        <Img fluid={image.childImageSharp.fluid} alt={imgAlt} />
      ) : (
        <img src={image} alt={imgAlt} />
      ))}
      {title && <div className="text-center text-2xl">{title}</div>}
      {description && <div>{description}</div>}
    </div>
  )
}

export default Card