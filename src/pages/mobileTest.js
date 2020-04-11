import React from "react"
import DevTool from "../components/devTool"

const MobileTest = props => {
  const { children } = props
  const [width, setWidth] = React.useState("max-w-full")
  return (
    <div className="bg-gray-500 w-full mx-auto h-full overflow-auto">
      <div className="bg-gray-500 mx-auto absolute z-50">
        <button
          className="border bordergray-900 px-4 m-4"
          onClick={() => setWidth("max-w-full")}
        >
          Full
        </button>
        <button
          className="border bordergray-900 px-4 m-4"
          onClick={() => setWidth("max-w-screen-xl")}
        >
          Large
        </button>
        <button
          className="border bordergray-900 px-4 m-4"
          onClick={() => setWidth("max-w-screen-md")}
        >
          medium
        </button>
        <button
          className="border bordergray-900 px-4 m-4"
          onClick={() => setWidth("max-w-screen-sm")}
        >
          small
        </button>
      </div>
      <div
        className={`relative ${width} shadow-lg mx-auto transition transition-maxWidth duration-1000 ease-in-out h-full overflow-visible`}
      >
        <iframe
          className="flex-inital"
          src="./"
          sandbox="allow-same-origin allow-forms allow-scripts"
          seamless
          width="100%"
          height="100%"
        />
      </div>
    </div>
  )
}

export default MobileTest
