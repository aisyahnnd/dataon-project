import {
  ButtonIcon,
  SelectBox,
  Toggle,
  TextInput,
} from "@/Components";
import "./filterTrainingEvent.css";
import {
  UnorderedListOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { useContext, useCallback, useEffect } from "react";
import { AppContext } from "@/Context";
import { useTranslation } from "react-i18next";
const FilterTrainingEvent = () => {
  const { t } = useTranslation(["dashboard"]);
  const {
    view,
    setView,
    setValueInputSearching,
    debounce,
    eventType,
    setEventType,
    eventStatus,
    setEventStatus,
  } = useContext(AppContext);
  const onClickAsCard = () => {
    setView(true);
  };
  const onClickAsList = () => {
    setView(false);
  };

  const onChangeSearching = (value) => {
    setEventStatus("");
    setEventType("");
    setValueInputSearching(value);
  };
  const eventChange = (value) => {
    setValueInputSearching("");
    setEventStatus("");
    setEventType(value);
  };
  const statusChange = (value) => {
    setValueInputSearching("");
    setEventType("");
    setEventStatus(value);
  };
  const debounceFunc = useCallback(
    debounce(onChangeSearching, 1000),
    []
  );
  return (
    <div className="container-gridd">
      <TextInput
        type="search"
        label={t("search.label")}
        placeholder={t("search.placeholder")}
        style={{ width: 230, borderRadius: 5 }}
        onChange={(value) => debounceFunc(value.target.value)}
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
        <Toggle label={t("related")}></Toggle>
      </div>
      <div className="wrapperButton">
        <ButtonIcon
          textButton={
            view ? t("buttonView.part2") : t("buttonView.part1")
          }
          style={{ borderRadius: 5, width: 200 }}
          icon={
            view ? <UnorderedListOutlined /> : <AppstoreOutlined />
          }
          onClick={view ? onClickAsList : onClickAsCard}
        />
      </div>
    </div>
  );
};

export default FilterTrainingEvent;
