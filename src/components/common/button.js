import React from "react"
import PropTypes from "prop-types"

const Button = ({
                  label,
                  onClick,
                  primary,
                  size,
                  color,
                  backgroundColor,
                  stretch,
                  className,
                  ...props
                }) => {
  return (
    <button
      className={`
      button
      border
      rounded-md
      border-${backgroundColor}
      ${stretch ? "w-full" : ""}
      ${
        primary
          ? `text-${color} bg-${backgroundColor} hover:bg-transparent`
          : `text-${color} bg-transparent hover:bg-${backgroundColor}`
      }
      font-bold
      button-${size}
      `}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  primary: PropTypes.bool,
  stretch: PropTypes.bool,
  /**
   * must have the color and intensity, ex: `blue-300`
   */
  color: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  primary: true,
  color: "black",
  size: "small",
}

export default Button