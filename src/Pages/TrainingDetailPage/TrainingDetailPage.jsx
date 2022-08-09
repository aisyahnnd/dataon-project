import {
  CalendarOutlined,
  EnvironmentOutlined,
  ExclamationCircleOutlined,
  InfoCircleOutlined,
  PlusOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Col,
  Image,
  Modal,
  Row,
  Space,
  Typography,
} from "antd";
import { useContext, useEffect, useState } from "react";
import {
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";
import { SectionHeader } from "../../Components";
import { AppContext } from "../../Context";
import "./TrainingDetailPage.css";
const { confirm } = Modal;
const { Text } = Typography;

export const TrainingDetailPage = () => {
  const { deleteStatus, setDeleteStatus, DeleteDataMyTraining } =
    useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const handleEdit = () => {
    navigate(`/mytraining/edit/${params.id}`, {
      state: location.state,
    });
  };

  const handleBack = () => {
    navigate("/");
  };

  useEffect(() => {
    if (deleteStatus) {
      navigate("/");
      setDeleteStatus(false);
    }
  }, [deleteStatus]);

  const showDeleteConfirm = () => {
    confirm({
      title: "Are you sure to delete this training?",
      icon: <ExclamationCircleOutlined />,
      content: "When clicked the OK button, data will be deleted",
      okText: "Yes",
      okType: "danger",
      cancelText: "Cancel",

      onOk() {
        return new Promise((resolve, reject) => {
          DeleteDataMyTraining(params.id);
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log("Oops errors!"));
      },

      onCancel() {},
    });
  };

  return (
    <>
      <SectionHeader></SectionHeader>
      <div className="site-card-wrapper" key={params.id}>
        <Row className="training-card-detail">
          <Col>
            <Space
              direction="vertical"
              size={7}
              style={{ display: "flex" }}
            >
              <Text strong style={{ fontSize: "24px" }}>
                {location.state.eventName}
              </Text>
              <Text style={{ fontSize: "16px", color: "#bbbbbb" }}>
                {location.state.trainer}
              </Text>
            </Space>
            <Image
              alt="img-detail"
              src={location.state.thumbnail}
              width={400}
              height={200}
              style={{ borderRadius: 10, marginTop: 15 }}
            />
            <Card
              style={{
                marginTop: "25px",
                borderRadius: "10px",
                border: "2px solid rgba(191,191,191, .2)",
              }}
              bodyStyle={{ padding: "15px" }}
            >
              <Button
                type="primary"
                style={{
                  borderRadius: "5px",
                  fontWeight: 700,
                  width: "100%",
                }}
              >
                Join Class
              </Button>
              <Row justify="space-between">
                <Col
                  span={6}
                  style={{ paddingTop: "10px", fontWeight: 700 }}
                >
                  Joined Team
                </Col>
                <Col span={10}>
                  <Avatar.Group style={{ marginTop: "5px" }}>
                    <Avatar src="https://iconape.com/wp-content/png_logo_vector/dataon-corporation.png" />
                    <Avatar src="https://joeschmoe.io/api/v1/random" />
                  </Avatar.Group>
                </Col>
                <Col span={8}>
                  <Button
                    style={{
                      border: "none",
                      color: "#959595",
                      paddingTop: "10px",
                    }}
                  >
                    <PlusOutlined style={{ fontSize: "12px" }} />{" "}
                    Invite Others
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col className="training-detail">
            <Space
              direction="vertical"
              size={7}
              style={{ display: "flex" }}
            >
              <Text style={{ fontSize: "16px", fontWeight: 700 }}>
                <SolutionOutlined /> Overview
              </Text>
              <Text style={{ fontSize: "14px", fontWeight: 700 }}>
                <CalendarOutlined /> {location.state.startDate}
                <InfoCircleOutlined
                  style={{ marginLeft: 20, marginRight: 5 }}
                />
                {location.state.isOnlineClass === true
                  ? "Online Class"
                  : "Offline Class"}
                <UserOutlined style={{ marginLeft: 20 }} /> 2 / 5
                Person
              </Text>
              <Text
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                }}
              >
                Instructor
              </Text>
              <div>
                <Avatar
                  size="large"
                  src="https://joeschmoe.io/api/v1/random"
                  style={{ marginTop: "15px" }}
                />
                <Space direction="vertical" size={-5}>
                  <Text style={{ fontWeight: 700, paddingLeft: 10 }}>
                    {location.state.trainer}
                  </Text>
                  <Text
                    style={{
                      fontSize: "12px",
                      paddingLeft: 10,
                      color: "#8e8e8e",
                    }}
                  >
                    {location.state.additionalInfo}
                  </Text>
                </Space>
              </div>

              <Card
                bodyStyle={{ padding: 0 }}
                style={{
                  borderRadius: 10,
                  width: 850,
                  marginTop: 20,
                }}
              >
                <Row>
                  <Col
                    style={{
                      padding: 10,
                      borderBottom: "#cccccc solid 1px",
                      width: "100%",
                      backgroundColor: "#399af5",
                      borderRadius: "10px 10px 0 0",
                      color: "white",
                      fontWeight: 700,
                    }}
                  >
                    Resources
                  </Col>
                </Row>
                <Space
                  direction="vertical"
                  size={6}
                  style={{ display: "flex", padding: 10 }}
                >
                  <Text style={{ fontSize: "16px", fontWeight: 700 }}>
                    <SolutionOutlined style={{ marginRight: 5 }} />
                    {location.state.isOnlineClass === true
                      ? "Online Class "
                      : "Offline Class "}
                    Detail
                  </Text>
                  <Text
                    style={{
                      fontSize: "14px",
                      fontWeight: 700,
                    }}
                  >
                    Event Number
                  </Text>
                  <Text
                    style={{
                      fontSize: "14px",
                      color: "#8e8e8e",
                    }}
                  >
                    TREV-YYMM-XXXX
                  </Text>
                  <Text style={{ fontSize: "14px", fontWeight: 700 }}>
                    Date
                  </Text>
                  <Text
                    style={{
                      fontSize: "14px",
                      color: "#8e8e8e",
                    }}
                  >
                    {location.state.startDate}
                  </Text>
                  <Text style={{ fontSize: "14px", fontWeight: 700 }}>
                    Location
                  </Text>
                  <Text
                    style={{
                      fontSize: "14px",
                      color: "#8e8e8e",
                    }}
                  >
                    {location.state.trainer}
                  </Text>
                  <Text style={{ fontSize: "14px", fontWeight: 700 }}>
                    Status
                  </Text>
                  <Text
                    style={{
                      fontSize: "14px",
                      color: "#8e8e8e",
                    }}
                  >
                    {location.state.isComplete === true
                      ? "Close Registration"
                      : "Open for Registration"}
                  </Text>
                  <Text style={{ fontSize: "14px", fontWeight: 700 }}>
                    End Date
                  </Text>
                  <Text
                    style={{
                      fontSize: "14px",
                      color: "#8e8e8e",
                    }}
                  >
                    {location.state.endDate}
                  </Text>
                  <Text style={{ fontSize: "14px", fontWeight: 700 }}>
                    Trainer
                  </Text>
                  <Text
                    style={{
                      fontSize: "14px",
                      color: "#8e8e8e",
                    }}
                  >
                    {location.state.trainer}
                  </Text>
                </Space>
              </Card>
            </Space>
          </Col>
        </Row>
        <Row style={{ paddingTop: 20 }}>
          <Col
            span={24}
            style={{
              textAlign: "right",
              padding: 20,
              borderTop: "1px #dddddd solid",
            }}
          >
            <Button
              onClick={handleBack}
              type="secondary"
              htmlType="submit"
              style={{
                borderRadius: 5,
                width: 100,
                marginRight: 10,
              }}
            >
              Back
            </Button>
            {location.pathname === `/mytraining/${params.id}` ? (
              <>
                <Button
                  onClick={handleEdit}
                  type="primary"
                  htmlType="submit"
                  style={{
                    borderRadius: 5,
                    width: 100,
                    marginRight: 10,
                  }}
                >
                  Edit
                </Button>
                <Button
                  onClick={showDeleteConfirm}
                  type="primary"
                  danger
                  style={{
                    borderRadius: 5,
                    width: 100,
                  }}
                >
                  Delete
                </Button>
              </>
            ) : null}
          </Col>
        </Row>
      </div>
    </>
  );
};
