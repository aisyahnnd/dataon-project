
import PropTypes from 'prop-types'
function Link ({ title }) {
  return (
    <div>{title}</div>
  )
}

export default Link
Link.propTypes = {
  title: PropTypes.string
}
Link.defaultProps = {
  title: 'url'
}
