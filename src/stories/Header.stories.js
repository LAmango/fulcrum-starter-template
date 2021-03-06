import React from "react"

import Header from "../components/header"

export default {
  title: "Headers/Header1",
  component: Header,
}

const Template = args => <Header {...args} />

export const WithTitle = Template.bind({})
WithTitle.args = {
  title: "Fulcrum Starter Template",
  navItems: [
    { heading: "Home" },
    { heading: "About Us" },
    { heading: "Contact" },
  ],
}