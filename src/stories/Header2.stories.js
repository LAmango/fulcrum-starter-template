import React from "react"

import Header2 from "../components/header2"

export default {
  title: "Headers/Header2",
  component: Header2,
}

const Template = args => <Header2 {...args} />

export const WithTitle = Template.bind({})
WithTitle.args = {
  title: "Fulcrum Starter Template",
  navItems: [
    { heading: "Home" },
    { heading: "About Us" },
    { heading: "Contact" },
  ],
}