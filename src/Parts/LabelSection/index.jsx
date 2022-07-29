import { Badge } from "antd";
import "./label.css";
import PropTypes from "prop-types";
const LabelSection = ({ title, style, dataBadge }) => {
  return (
    <div className="title-event">
      <p>
        {title}
        <Badge style={style} count={dataBadge} />
      </p>
    </div>
  );
};

export default LabelSection;

LabelSection.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.object,
  dataBadge: PropTypes.number.isRequired,
};

LabelSection.defaultProps = {
  textButton: "Title Event",
  dataBadge: 10,
};
