import {
  Card,
  Col,
  Row,
  Space,
  Typography,
  Dropdown,
  Menu,
  Button,
  Checkbox,
  Form,
  Input,
  Carousel,
  Alert,
} from 'antd';
import './LoginPage.css';
import { DownOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Image1 from '../../assets/Images/example-3.svg';
import Image2 from '../../assets/Images/example-25.svg';
import Image3 from '../../assets/Images/example-29.svg';
import Image4 from '../../assets/Images/example-30.svg';
import Logo from '../../assets/Images/logo.png';

const menu = (
  <Menu
    items={[
      {
        type: 'divider',
      },
      {
        label: 'English (EN)',
        key: '1',
      },
      {
        label: 'Indonesia (IDN)',
        key: '2',
      },
    ]}
  />
);

const { Text } = Typography;

export const LoginPage = () => {
  const [usernameLog, setUsernameLog] = useState('');
  const [passwordLog, setPasswordLog] = useState('');
  const [flag, setFlag] = useState(false);
  let navigate = useNavigate();

  const onFinish = (values) => {
    let username = localStorage.getItem('Username').replace(/"/g, '');
    let password = localStorage.getItem('Password').replace(/"/g, '');

    if (!usernameLog || !passwordLog) {
      setFlag(true);
      console.log('empty');
    } else if (username !== usernameLog || password !== passwordLog) {
      setFlag(true);
    } else {
      navigate('/');
      setFlag(false);
    }
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Card bodyStyle={{ backgroundColor: '#bac6f2' }}>
      <Card
        bodyStyle={{
          padding: '0px',
        }}
        style={{ borderRadius: 10 }}
      >
        <Row
          className="header"
          style={{ borderBottom: '1px #dddddd solid' }}
        >
          <Col span={3}>
            <img alt="logo" src={Logo} width={150} />
          </Col>
          <Col
            span={18}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              padding: 10,
            }}
          >
            <Space size={-5} direction="vertical">
              <Text style={{ fontSize: '16px', fontWeight: 500 }}>
                Human Resources Information System
              </Text>
              <Text style={{ fontSize: '24px', fontWeight: 900 }}>
                SunFish 7
              </Text>
            </Space>
          </Col>
          <Col
            span={3}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: 30,
            }}
          >
            <Dropdown overlay={menu} trigger={['click']}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <Text style={{ color: 'black' }}>English (EN)</Text>
                  <DownOutlined style={{ color: 'black' }} />
                </Space>
              </a>
            </Dropdown>
          </Col>
        </Row>
        <Row className="content">
          <Col span={14}>
            <Carousel
              style={{
                justifyContent: 'center',
                paddingTop: 100,
                paddingLeft: 100,
              }}
              autoplay
            >
              <div>
                <img
                  style={{
                    width: '500px',
                    justifyContent: 'center',
                  }}
                  alt="side-1"
                  src={Image1}
                />
              </div>
              <div>
                <img
                  style={{ width: '500px', justifyContent: 'center' }}
                  alt="side-1"
                  src={Image2}
                />
              </div>
              <div>
                <img
                  style={{ width: '500px', justifyContent: 'center' }}
                  alt="side-1"
                  src={Image3}
                />
              </div>
              <div>
                <img
                  style={{ width: '500px', justifyContent: 'center' }}
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
                  fontSize: '36px',
                  fontWeight: 900,
                  color: '#1890ff',
                }}
              >
                Please enter your credential to access the system
              </Text>
            </Space>
            <Form
              name="basic"
              wrapperCol={{
                span: 18,
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
                style={{ fontWeight: 'bold' }}
                label="Username"
                name="username"
              >
                <Input
                  placeholder="Enter your username here"
                  onChange={(event) =>
                    setUsernameLog(event.target.value)
                  }
                />
              </Form.Item>
              <Form.Item
                style={{ fontWeight: 'bold' }}
                label="Password"
                name="password"
              >
                <Input.Password
                  placeholder="Password"
                  onChange={(event) =>
                    setPasswordLog(event.target.value)
                  }
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
                      Haven't account?{' '}
                      <Link to="/register">Register</Link>
                    </p>
                  </Col>
                </Row>
                <Button
                  style={{ width: 100 }}
                  type="primary"
                  htmlType="submit"
                >
                  Login
                </Button>
              </Form.Item>
              {flag && (
                <Alert
                  message="Wrong username/password!"
                  type="warning"
                />
              )}
            </Form>
          </Col>
        </Row>
        <Row className="footer">
          <Col
            span={24}
            style={{ textAlign: 'center', paddingTop: 20 }}
          >
            <Text style={{ fontSize: '16px', color: '#888888' }}>
              This product is licensed for Dataon Corporation
            </Text>
          </Col>
          <Col
            span={24}
            style={{ textAlign: 'center', paddingBottom: 20 }}
          >
            <Text style={{ fontSize: '16px', color: '#888888' }}>
              &copy; 1999 - 2022 DataOn Technology. All Rights
              Reserved
            </Text>
          </Col>
        </Row>
      </Card>
    </Card>
  );
};
