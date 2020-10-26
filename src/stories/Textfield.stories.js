import React from "react"

import Textfield from "../components/common/textfield"

export default {
  title: "TextField",
  component: Textfield,
}

const Template = args => <Textfield {...args} />

export const Primary = Template.bind({})
Primary.args = {
  name: "username",
  type: "text",
  placeholder: "username",
  errors: {},
}
