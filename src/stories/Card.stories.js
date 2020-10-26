import React from "react"

import Card from "../components/common/card"
import image from "../../static/assets/gatsby-icon.png"

export default {
  title: "Cards/Card",
  component: Card,
}

const Template = args => <div className="w-1/3"><Card {...args} /></div>

export const Primary = Template.bind({})
Primary.args = {
  image: image,
  imgAlt: "Student",
  title: "Student Reading",
  description: "The student is reading in the library and really enjoying his book"
}