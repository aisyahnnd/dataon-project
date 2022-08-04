import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EnvironmentOutlined, UserOutlined } from '@ant-design/icons';
import { Card, Col, Row, Space, Typography } from 'antd';
import './AllTrainingEvent.css';

const { Text } = Typography;

export const SingleTrainingEvent = (props) => {
  const { item, id } = props;
  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/training/${item.id}`, { state: item });
  };

  return (
    <Card
      onClick={showDetail}
      key={id}
      style={{
        maxWidth: 400,
        borderRadius: 10,
      }}
      cover={
        <img
          alt="example"
          src={item.thumbnail}
          style={{ borderRadius: '10px 10px 0px 0px' }}
        />
      }
      hoverable
    >
      <Row justify="space-between">
        <Col>
          <Space
            direction="vertical"
            size={1}
            style={{ display: 'flex' }}
          >
            <Text style={{ fontSize: '11px' }}>
              <EnvironmentOutlined /> {item.trainer}
            </Text>
            <Text style={{ fontSize: '12px' }} strong>
              {item.eventName}
            </Text>
          </Space>
        </Col>
      </Row>
      <Row justify="space-between">
        <Col>
          <Space
            direction="vertical"
            size={1}
            style={{
              display: 'flex',
              paddingTop: 20,
            }}
          >
            <Text type="secondary">{item.startDate}</Text>
            <Text type="secondary" style={{ fontSize: '11px' }}>
              <UserOutlined /> {item.trainer}
            </Text>
          </Space>
        </Col>
      </Row>
    </Card>
  );
};
