import { ButtonIcon, SelectBox, Toggle, TextInput } from "../../Components";
import { Input } from "antd";
import "./filterTrainingEvent.css";
import { UnorderedListOutlined, AppstoreOutlined } from "@ant-design/icons";
import { useContext, useCallback, useEffect } from "react";
import { AppContext } from "../../Context";
const FilterTrainingEvent = () => {
  const { view, setView, valueInputSearching, setValueInputSearching } =
    useContext(AppContext);
  const onClickAsCard = () => {
    setView(true);
  };
  const onClickAsList = () => {
    setView(false);
  };

  //
  const debounce = func => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 1000);
    };
  };

  const onChangeSearching = value => {
    setValueInputSearching(value);
  };

  const debounceFunc = useCallback(debounce(onChangeSearching), []);

  return (
    <div className="container-grid">
      <TextInput
        label="Search Training"
        placeholder="Search Training"
        style={{ width: 230, borderRadius: 5 }}
        onChange={value => debounceFunc(value.target.value)}
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
