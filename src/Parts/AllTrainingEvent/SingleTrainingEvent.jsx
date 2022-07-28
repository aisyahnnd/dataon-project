import React from 'react';
import { EnvironmentOutlined, UserOutlined } from '@ant-design/icons';
import { Card, Col, Row, Space, Typography } from 'antd';
import './AllTrainingEvent.css';

const { Text } = Typography;

export const SingleTrainingEvent = (props) => {
  const { item, id } = props;

  return (
    <Card
      key={id}
      style={{
        maxWidth: 400,
        borderRadius: 10,
      }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
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
              <EnvironmentOutlined /> {item.location}
            </Text>
            <Text strong>{item.title}</Text>
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
            <Text type="secondary">{item.description}</Text>
            <Text type="secondary" style={{ fontSize: '11px' }}>
              <UserOutlined /> {item.author}
            </Text>
          </Space>
        </Col>
      </Row>
    </Card>
  );
};
