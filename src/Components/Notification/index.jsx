import React from "react";
import { SmileOutlined } from "@ant-design/icons";
import { notification } from "antd";
function Notification(messages) {
  notification.open({
    message: "Succes",
    description: messages,
    icon: (
      <SmileOutlined
        style={{
          color: "#108ee9",
        }}
      />
    ),
  });
}

export default Notification;
