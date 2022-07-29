import { MoreOutlined, PlusOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Col, Row } from 'antd';

export const SectionHeader = () => {
  return (
    <>
      <div className="site-card-wrapper">
        <Row>
          <Col
            span={12}
            style={{
              textAlign: 'left',
              paddingTop: 5,
              paddingLeft: 5,
            }}
          >
            <Breadcrumb separator=">">
              <Breadcrumb.Item>Training</Breadcrumb.Item>
              <Breadcrumb.Item
                style={{ fontWeight: 'bold', color: '#1890ff' }}
              >
                Training Event
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
          <Col
            span={12}
            style={{
              textAlign: 'right',
              padding: 0,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              style={{ borderRadius: 5, fontWeight: 'bold' }}
            >
              <PlusOutlined /> Create Training Event
            </Button>
            <Button
              type="dashed"
              style={{
                borderRadius: 5,
                fontWeight: 'bold',
                marginLeft: 10,
                marginRight: 20,
              }}
            >
              <MoreOutlined /> More
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};
