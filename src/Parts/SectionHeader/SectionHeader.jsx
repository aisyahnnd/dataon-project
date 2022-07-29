import { MoreOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';

export const SectionHeader = () => {
  return (
    <>
      <div className="site-card-wrapper">
        <Row>
          <Col
            span={24}
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
