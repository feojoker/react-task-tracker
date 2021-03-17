import PropTypes from 'prop-types'


const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='btn'
      tyle={{ backgroundColor: color }}
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: 'steelblue'
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default Button
