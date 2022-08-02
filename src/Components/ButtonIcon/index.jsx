import { Button } from "antd";
import PropTypes from "prop-types";
const ButtonIcon = ({ textButton, style, icon, onClick }) => {
  return (
    <Button icon={icon} style={style} onClick={onClick}>
      {textButton}
    </Button>
  );
};

export default ButtonIcon;

ButtonIcon.propTypes = {
  textButton: PropTypes.string.isRequired,
  style: PropTypes.object,
  icon: PropTypes.object,
};

ButtonIcon.defaultProps = {
  textButton: "Submit",
};
