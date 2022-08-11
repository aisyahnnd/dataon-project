import {
  Card,
  Col,
  Row,
  Space,
  Typography,
  Button,
  Checkbox,
  Form,
  Carousel,
  Alert,
  Select,
  Input,
} from "antd";
import "./LoginPage.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Image1 from "../../assets/Images/example-3.svg";
import Image2 from "../../assets/Images/example-25.svg";
import Image3 from "../../assets/Images/example-29.svg";
import Image4 from "../../assets/Images/example-30.svg";
import Logo from "../../assets/Images/logo.png";
import PropTypes from "prop-types";
import { Notification } from "../../Components";

const { Text } = Typography;

export const LoginPage = ({ setToken }) => {
  var message = "";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  let navigate = useNavigate();

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async () => {
    console.warn(username, password);
    let item = {
      username: username,
      password: password,
    };

    if (username === "aisyah" && password === "12345678") {
      try {
        let result = await fetch("http://localhost:3000/api/login", {
          method: "POST",
          body: JSON.stringify(item),
        });
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result.data));
        localStorage.setItem("token", JSON.stringify(result.token));
        setToken(JSON.stringify(result.token));
        var messages = "Login success";
        Notification(messages, "success");
        navigate("/");
      } catch (error) {
        console.log(error);
        Notification(error.message, "warn");
      }
    } else {
      setFlag(true);
      return false;
    }
  };

  return (
    <Card bodyStyle={{ backgroundColor: "#bac6f2" }}>
      <Card
        bodyStyle={{
          padding: "0px",
        }}
        style={{ borderRadius: 10 }}
      >
        <Row className="header" style={{ borderBottom: "1px #dddddd solid" }}>
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
        <Row className="content">
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
                  style={{ width: "500px", justifyContent: "center" }}
                  alt="side-1"
                  src={Image2}
                />
              </div>
              <div>
                <img
                  style={{ width: "500px", justifyContent: "center" }}
                  alt="side-1"
                  src={Image3}
                />
              </div>
              <div>
                <img
                  style={{ width: "500px", justifyContent: "center" }}
                  alt="side-1"
                  src={Image4}
                />
              </div>
            </Carousel>
          </Col>
          <Col span={10} style={{ padding: 20 }}>
            <Space size={3} style={{ paddingRight: 30, paddingBottom: 30 }}>
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
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              layout="vertical"
            >
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
                    message: "Username must be alphabets and numbers only",
                  },
                ]}
              >
                <Input
                  style={{ width: 400 }}
                  placeholder="Enter your username here"
                  onChange={event => setUsername(event.target.value)}
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
                    message: "Passwords must be at least 8 characters",
                  },
                ]}
              >
                <Input.Password
                  style={{ width: 400 }}
                  placeholder="Password"
                  onChange={event => setPassword(event.target.value)}
                />
              </Form.Item>
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 0,
                  span: 24,
                }}
              >
                <Row>
                  <Col span={12}>
                    <Checkbox>Remember me</Checkbox>
                  </Col>
                  <Col span={12}>
                    <p>
                      <a href="#">Forgot password?</a>
                    </p>
                  </Col>
                </Row>
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
                      Haven't account? <Link to="/register">Register</Link>
                    </p>
                  </Col>
                </Row>
                <Button
                  style={{ width: 100 }}
                  type="primary"
                  htmlType="submit"
                  onClick={handleSubmit}
                >
                  Login
                </Button>
              </Form.Item>
              {flag && (
                <Alert message="Wrong username/password!" type="warning" />
              )}
            </Form>
          </Col>
        </Row>
        <Row className="footer">
          <Col span={24} style={{ textAlign: "center", paddingTop: 20 }}>
            <Text style={{ fontSize: "16px", color: "#888888" }}>
              This product is licensed for Dataon Corporation
            </Text>
          </Col>
          <Col span={24} style={{ textAlign: "center", paddingBottom: 20 }}>
            <Text style={{ fontSize: "16px", color: "#888888" }}>
              &copy; 1999 - 2022 DataOn Technology. All Rights Reserved
            </Text>
          </Col>
        </Row>
      </Card>
    </Card>
  );
};

LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired,
};
