import { ButtonIcon, SelectBox, Toggle, TextInput } from "../../Components";
import { Input } from "antd";
import "./filterTrainingEvent.css";
import { UnorderedListOutlined, AppstoreOutlined } from "@ant-design/icons";
import { useContext, useCallback, useEffect } from "react";
import { AppContext } from "../../Context";
const FilterTrainingEvent = () => {
  const {
    view,
    setView,
    setValueInputSearching,
    setValueCardTraining,
    debounce,
    eventType,
    setEventType,
    eventStatus,
    setEventStatus,
    valueInputSearching,
  } = useContext(AppContext);
  const onClickAsCard = () => {
    setView(true);
  };
  const onClickAsList = () => {
    setView(false);
  };

  const onChangeSearching = value => {
    // setValueCardTraining(value);
    setValueInputSearching(value);
  };
  const eventChange = value => {
    setEventStatus("");
    setEventType(value);
  };
  const statusChange = value => {
    setEventType("");
    setEventStatus(value);
  };
  const debounceFunc = useCallback(debounce(onChangeSearching, 1000), []);
  return (
    <div className="container-gridd">
      <TextInput
        type="search"
        label="Search Training"
        placeholder="Search Training"
        style={{ width: 230, borderRadius: 5 }}
        onChange={value => debounceFunc(value.target.value)}
      />
      <SelectBox
        type="event"
        style={{ width: 230 }}
        onChange={eventChange}
        value={eventType}
      ></SelectBox>
      <SelectBox
        type="status"
        style={{ width: 230 }}
        onChange={statusChange}
        value={eventStatus}
      ></SelectBox>
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
