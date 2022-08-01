import { Image, Card, Col, Row, Button, Space, Typography } from "antd";
import { EnvironmentOutlined, UserOutlined } from "@ant-design/icons";
import "./MyTrainingCard.css";
import PropTypes from "prop-types";
const { Text } = Typography;

export const SingleTrainingCard = props => {
  const { item, id, location } = props;
  console.log("test");
  const openLocation = () => {
    console.log("test hit");
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`,
      "_blank"
    );
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
      <Row className="row-top">
        <Col>
          <Image
            alt="example"
            src={item.img}
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
            <Text strong>{item.title}</Text>
            <Text type="secondary">{item.description}</Text>
            <Text type="secondary" style={{ fontSize: "11px" }}>
              <UserOutlined /> {item.author}
            </Text>
          </Space>
        </Col>
      </Row>
      <Row className="row-bottom" justify="space-between">
        <Col>
          <p className="row-bottom-detail">Event Started</p>
        </Col>
        <Col>
          <Button
            type="primary"
            size="small"
            style={{ fontSize: 12 }}
            onClick={openLocation}
            icon={<EnvironmentOutlined />}
          >
            View Locationn
          </Button>
        </Col>
      </Row>
    </Card>
  );
};
SingleTrainingCard.propTypes = {
  url: PropTypes.string,
  item: PropTypes.object,
  id: PropTypes.object,
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
