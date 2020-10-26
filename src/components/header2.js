import React from "react"
import DropMenuItem from "./dropMenuItem"
import { Link } from "gatsby"

const Header = ({title, navItems}) => {
  return (
    <div className="bg-black p-6 flex justify-between">
      <h2 className="text-white text-2xl">{title}</h2>
      <div className="flex-initial md:hidden">
        <button
          onClick={() => setMenu(!menu)}
          className="items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
        <div className="hidden md:flex items-center">
          <div className="text-sm mx-auto">
            {navItems.map(item =>
              item.subHeading ? (
                <DropMenuItem key={item.heading} item={item} />
              ) : (
                <Link
                  key={item.heading}
                  to={item.link}
                  className="block mt-4 md:inline-block md:mt-0 md:mx-4 text-white hover:text-white mr-4"
                >
                  {item.heading}
                </Link>
              )
            )}
          </div>
        </div>
    </div>
  )
}

export default Header;