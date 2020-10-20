import React from "react"
import PropTypes from "prop-types"

const Button = ({
                  label,
                  onClick,
                  primary,
                  size,
                  color,
                  stretch,
                  className,
                  ...props
                }) => {
  return (
    <button
      className={`
      button
      border
      border-${color}
      ${stretch ? "w-full" : ""}
      ${
        primary
          ? `button-primary bg-${color} hover:bg-white`
          : `button-default bg-white hover:bg-${color}`
      }
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