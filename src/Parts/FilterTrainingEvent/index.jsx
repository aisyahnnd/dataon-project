import { ButtonIcon, SelectBox, TextInput, Toggle } from "../../Components";
import "./filterTrainingEvent.css";
import { UnorderedListOutlined, AppstoreOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { AppContext } from "../../Context";
const FilterTrainingEvent = () => {
  const { view, setView } = useContext(AppContext);
  const onClickAsCard = () => {
    setView(true);
  };
  const onClickAsList = () => {
    setView(false);
  };
  return (
    <div className="container-grid">
      <TextInput
        label="Search Training"
        placeholder="Search Training"
        style={{ width: 230, borderRadius: 5 }}
      />
      <SelectBox type="event" style={{ width: 230 }} />
      <SelectBox type="status" style={{ width: 230 }} />
      <div className="switch">
        <Toggle label="Related Job Only"></Toggle>
      </div>
      <div className="wrapperButton">
        <ButtonIcon
          textButton={view ? "View All List" : "View as Card"}
          style={{ borderRadius: 5, width: 200 }}
          icon={view ? <UnorderedListOutlined /> : <AppstoreOutlined />}
          onClick={view ? onClickAsList : onClickAsCard}
        />
      </div>
    </div>
  );
};

export default FilterTrainingEvent;
