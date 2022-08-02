import { Image, Card, Col, Row, Button, Space, Typography, Modal } from "antd";
import { EnvironmentOutlined, UserOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MyTrainingCard.css";
import PropTypes from "prop-types";
const { Text } = Typography;
import { Rate } from "antd";
import { useEffect } from "react";

export const SingleTrainingCard = props => {
  const { item, id, location } = props;
  const navigate = useNavigate();

  const openLocation = () => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`,
      "_blank"
    );
  };
  const showDetail = () => {
    navigate(`/mytraining/${item.id}`, { state: item });
  };
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  // convert rate to range 1-5 not 0-100
  const [rate, setRate] = useState(item.ratings / 20);
  const showModal = () => {
    setVisible(true);
  };
  const onChangeRatings = value => {
    setRate(value);
  };
  const handleOk = item => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      //action update rate
      // convert rate to range 0 - 100 not 1-5 before update
      setConfirmLoading(false);
    }, 2000);
  };
  //rate will update on modal if value ratings update on db
  useEffect(() => {
    setRate(item.ratings);
  }, [item.ratings]);
  const handleCancel = () => {
    setRate(item.ratings);
    setVisible(false);
  };
  return (
    <Card
      key={id}
      style={{
        maxWidth: 400,
        borderRadius: 10,
      }}
      bodyStyle={{ padding: "0" }}
      hoverable
    >
      <Row onClick={showDetail} className="row-top">
        <Col>
          <Image
            alt="example"
            src={item.image}
            width={100}
            height={140}
            style={{
              borderRadius: "10px 0px 0px 0px",
              backgroundRepeat: "no-repeat",
              objectFit: "cover",
            }}
          />
        </Col>
        <Col className="row-top-detail">
          <Space direction="vertical" size={3} style={{ display: "flex" }}>
            <Text style={{ fontSize: "11px" }}>
              <EnvironmentOutlined /> {item.location}
            </Text>
            <Text strong>{item.eventName}</Text>
            <Text type="secondary">{item.startDate}</Text>
            <Text type="secondary" style={{ fontSize: "11px" }}>
              <UserOutlined /> {item.speaker}
            </Text>
          </Space>
        </Col>
      </Row>
      <Row className="row-bottom" justify="space-between">
        <Col>
          {item.isCompleted ? (
            <p className="row-bottom-detail">Event Started</p>
          ) : (
            <p className="row-bottom-detail">Event Completed</p>
          )}
        </Col>
        <Col>
          {item.isCompleted ? (
            <Button
              type="primary"
              size="small"
              style={{ fontSize: 12 }}
              onClick={openLocation}
              icon={<EnvironmentOutlined />}
            >
              View Location
            </Button>
          ) : (
            <Button
              type="primary"
              size="small"
              style={{ fontSize: 12 }}
              onClick={showModal}
            >
              Give Feedback
            </Button>
          )}
          <Modal
            title="Give Feedback Rating"
            visible={visible}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
          >
            <Space direction="vertical" size={3} style={{ display: "flex" }}>
              <Text strong>{item.eventName}</Text>
              <Text type="secondary">{item.location}</Text>
              <Text type="secondary" style={{ fontSize: "11px" }}>
                <UserOutlined /> {item.speaker}
              </Text>
              <div className="rating">
                <Rate
                  defaultValue={item.ratings}
                  value={rate}
                  onChange={value => onChangeRatings(value)}
                ></Rate>
              </div>
            </Space>
          </Modal>
        </Col>
      </Row>
    </Card>
  );
};
SingleTrainingCard.propTypes = {
  url: PropTypes.string,
  item: PropTypes.object,
  id: PropTypes.number,
  location: PropTypes.object.isRequired,
};
SingleTrainingCard.defaultProps = {
  dataBadge: 10,
  style: "",
  location: {
    lat: "28.6139",
    lng: "77.2090",
  },
};
