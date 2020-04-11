import React from "react"
import { Link } from "gatsby"

const DevTool = props => {
  const { children } = props
  const [width, setWidth] = React.useState("max-w-full")
  return (
    <div className="bg-gray-500 w-full  mx-auto h-full">
      <div className={`relative ${width} mx-auto h-full overflow-auto`}>
        {children}
      </div>
    </div>
  )
}

export default DevTool
