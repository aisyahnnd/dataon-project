import React from "react";
import { SmileOutlined } from "@ant-design/icons";
import { notification } from "antd";
const Notification = () => {
  notification.open({
    message: "Succes",
    description: "Event successfully created ",
    icon: (
      <SmileOutlined
        style={{
          color: "#108ee9",
        }}
      />
    ),
  });
};

export default Notification;
