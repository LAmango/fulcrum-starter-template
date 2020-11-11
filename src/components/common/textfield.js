import React from "react"
import PropTypes from "prop-types"

const Textfield = React.forwardRef((props, ref) => {
  return (
    <div className="relative">
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      <input
        {...props}
        ref={ref({required: true, ...props.options})}
        className="border border-gray-900 p-1 focus:outline-none"
      />
      {props.errors[props.name] && (
        <div>
          {props.errors[props.name].message || "Please fill out this field"}
        </div>
      )}
    </div>
  )
})

Textfield.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  errors: PropTypes.object,
  placeholder: PropTypes.string,
  options: PropTypes.object
}

export default Textfield
