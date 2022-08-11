import {
  Card,
  Col,
  Row,
  Space,
  Typography,
  Button,
  Form,
  Input,
  Carousel,
  Alert,
  Select,
} from "antd";
import "./RegisterPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Image1 from "../../assets/Images/example-3.svg";
import Image2 from "../../assets/Images/example-25.svg";
import Image3 from "../../assets/Images/example-29.svg";
import Image4 from "../../assets/Images/example-30.svg";
import Logo from "../../assets/Images/logo.png";
import { SectionHeader } from "../../Components";

const { Text } = Typography;

export const RegisterPage = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);

  let navigate = useNavigate();

  const onFinish = (values) => {
    if (!name || !username || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Username", JSON.stringify(username));
      localStorage.setItem("Password", JSON.stringify(password));

      console.log("Save in localstorage");

      alert("Registration Success");
      navigate("/login");
    }
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Card bodyStyle={{ backgroundColor: "#bac6f2" }}>
        <Card
          bodyStyle={{
            padding: "0px",
          }}
          style={{ borderRadius: 10 }}
        >
          <Row
            className="header"
            style={{ borderBottom: "1px #dddddd solid" }}
          >
            <Col span={3}>
              <img alt="logo" src={Logo} width={150} />
            </Col>
            <Col
              span={17}
              style={{
                alignItems: "center",
                justifyContent: "center",
                padding: 10,
              }}
            >
              <Space size={-5} direction="vertical">
                <Text style={{ fontSize: "16px", fontWeight: 500 }}>
                  Human Resources Information System
                </Text>
                <Text style={{ fontSize: "24px", fontWeight: 900 }}>
                  SunFish 7
                </Text>
              </Space>
            </Col>
            <Col
              span={4}
              style={{
                alignItems: "center",
                justifyContent: "center",
                paddingTop: 25,
              }}
            >
              <Select
                defaultValue="English (EN)"
                style={{
                  width: 150,
                }}
                bordered={false}
              >
                <Option value="english">English (EN)</Option>
                <Option value="indoensia">Indonesia (IDN)</Option>
              </Select>
            </Col>
          </Row>
          <Row>
            <Col span={14}>
              <Carousel
                style={{
                  justifyContent: "center",
                  paddingTop: 100,
                  paddingLeft: 100,
                }}
                autoplay
              >
                <div>
                  <img
                    style={{
                      width: "500px",
                      justifyContent: "center",
                    }}
                    alt="side-1"
                    src={Image1}
                  />
                </div>
                <div>
                  <img
                    style={{
                      width: "500px",
                      justifyContent: "center",
                    }}
                    alt="side-1"
                    src={Image2}
                  />
                </div>
                <div>
                  <img
                    style={{
                      width: "500px",
                      justifyContent: "center",
                    }}
                    alt="side-1"
                    src={Image3}
                  />
                </div>
                <div>
                  <img
                    style={{
                      width: "500px",
                      justifyContent: "center",
                    }}
                    alt="side-1"
                    src={Image4}
                  />
                </div>
              </Carousel>
            </Col>
            <Col span={10} style={{ padding: 20 }}>
              <Space
                size={3}
                style={{ paddingRight: 30, paddingBottom: 30 }}
              >
                <Text
                  style={{
                    fontSize: "36px",
                    fontWeight: 900,
                    color: "#1890ff",
                  }}
                >
                  Please enter your credential to access the system
                </Text>
              </Space>
              <Form
                name="basic"
                wrapperCol={{
                  span: 24,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
              >
                <Form.Item
                  style={{ fontWeight: "bold" }}
                  label="Name"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your name!",
                    },
                  ]}
                >
                  <Input
                    style={{ width: 400 }}
                    placeholder="Enter your name here"
                    onChange={(event) => setName(event.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  style={{ fontWeight: "bold" }}
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                    {
                      max: 20,
                      message: "Username must be less than 20",
                    },
                    {
                      pattern: new RegExp(/^[a-zA-Z 0-9]+$/i),
                      message:
                        "Username must be alphabets and numbers only",
                    },
                  ]}
                >
                  <Input
                    style={{ width: 400 }}
                    placeholder="Enter your username here"
                    onChange={(event) =>
                      setUsername(event.target.value)
                    }
                  />
                </Form.Item>
                <Form.Item
                  style={{ fontWeight: "bold" }}
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                    {
                      min: 8,
                      message:
                        "Passwords must be at least 8 characters",
                    },
                  ]}
                >
                  <Input.Password
                    style={{ width: 400 }}
                    placeholder="Password"
                    onChange={(event) =>
                      setPassword(event.target.value)
                    }
                  />
                </Form.Item>
                <Form.Item
                  wrapperCol={{
                    offset: 0,
                    span: 24,
                  }}
                >
                  <Row>
                    <Col span={24}>
                      <p>
                        Have an account?{" "}
                        <Link to="/login">Login</Link>
                      </p>
                    </Col>
                  </Row>
                  <Button
                    style={{ width: 100 }}
                    type="primary"
                    htmlType="submit"
                  >
                    Register
                  </Button>
                </Form.Item>

                {flag && (
                  <Alert
                    message="Please fill every field!"
                    type="warning"
                  />
                )}
              </Form>
            </Col>
          </Row>
          <Row className="footer">
            <Col
              span={24}
              style={{ textAlign: "center", paddingTop: 20 }}
            >
              <Text style={{ fontSize: "16px", color: "#888888" }}>
                This product is licensed for Dataon Corporation
              </Text>
            </Col>
            <Col
              span={24}
              style={{ textAlign: "center", paddingBottom: 20 }}
            >
              <Text style={{ fontSize: "16px", color: "#888888" }}>
                &copy; 1999 - 2022 DataOn Technology. All Rights
                Reserved
              </Text>
            </Col>
          </Row>
        </Card>
      </Card>
    </>
  );
};
