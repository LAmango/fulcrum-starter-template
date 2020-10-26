import React from "react"

import Button from "../components/common/button"

export default {
  title: "Button",
  component: Button,
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: "Button",
  size: "small",
  color: "gray-700",
  backgroundColor: "gray-300"
};