import { Select } from "antd";
import PropTypes from "prop-types";
import "./Select.css";
const SelectBox = ({ type, style, onChange, value, defaultValue }) => {
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
          onChange={onChange}
          showSearch
          optionFilterProp="children"
          style={style}
          value={value}
          defaultValue={defaultValue}
          placeholder={
            type === "status"
              ? `Select ${label.status}`
              : `Select ${label.event}`
          }
          data-testid="selectBox"
        >
          {type === "status" ? (
            <>
              <Select.Option value="true">Finish</Select.Option>
              <Select.Option value="false">On Going</Select.Option>
            </>
          ) : (
            <>
              <Select.Option value="true">Online</Select.Option>
              <Select.Option value="false">Offline</Select.Option>
            </>
          )}
        </Select>
      </div>
    </div>
  );
};

export default SelectBox;
SelectBox.propTypes = {
  type: PropTypes.string.isRequired,
  style: PropTypes.object,
};
