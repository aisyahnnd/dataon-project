import { Select } from "antd";
import PropTypes from "prop-types";
import "./Select.css";
const SelectBox = ({ type, style }) => {
  const { Option } = Select;
  const label = {
    event: "Event Type",
    status: "Status",
  };

  return (
    <div>
      <p className="label">{type === "status" ? label.status : label.event}</p>
      <div>
        <Select
          showSearch
          optionFilterProp="children"
          style={style}
          placeholder={
            type === "status"
              ? `Select ${label.status}`
              : `Select ${label.event}`
          }
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>
      </div>
    </div>
  );
};

export default SelectBox;
SelectBox.propTypes = {
  type: PropTypes.string.isRequired,
  style: PropTypes.string,
};
