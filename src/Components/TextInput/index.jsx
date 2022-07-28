
import { Input } from 'antd'
import './filter.css'
import PropTypes from 'prop-types'
const TextInput = ({ id, label, placeholder, style }) => {
  console.log(label)
  return (
    <div>
      { label && <p className='label'>{label}</p>}
      <Input id={id} style={style} placeholder={placeholder}></Input>
      </div>
  )
}

export default TextInput

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  style: PropTypes.string
}
TextInput.defaultProps = {
  id: 'input-text',
  placeholder: 'input',
  style: ''
}