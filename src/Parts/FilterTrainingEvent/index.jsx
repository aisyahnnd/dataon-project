import {
  ButtonIcon,
  SelectBox,
  TextInput,
  Toggle,
} from '../../Components';
import './filterTrainingEvent.css';
import { UnorderedListOutlined } from '@ant-design/icons';
const FilterTrainingEvent = () => {
  return (
    <div className="container">
      <TextInput
        label="Search Training"
        placeholder="Search Training"
        style={{ width: 200, borderRadius: 5 }}
      />
      <SelectBox type="event" style={{ width: 250 }} />
      <SelectBox type="status" style={{ width: 250 }} />
      <div className="switch">
        <Toggle label="Related Job Only"></Toggle>
      </div>
      <div className="wrapperButton">
        <ButtonIcon
          textButton="View All List"
          style={{ borderRadius: 5, width: 200 }}
          icon={<UnorderedListOutlined />}
        />
      </div>
    </div>
  );
};

export default FilterTrainingEvent;
