
// import { UnorderedListOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import PropTypes from 'prop-types'
const ButtonIcon = ({ textButton, style, icon }) => {
  return (
    <Button icon={icon} style={style}>
     {textButton}
    </Button>
  )
}

export default ButtonIcon

ButtonIcon.propTypes = {
  textButton: PropTypes.string.isRequired,
  style: PropTypes.string,
  icon: PropTypes.string
}

ButtonIcon.defaultProps = {
  textButton: 'Submit'
}
