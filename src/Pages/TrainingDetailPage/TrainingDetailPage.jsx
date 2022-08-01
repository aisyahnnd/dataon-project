import { EnvironmentOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Image, Row, Space, Typography } from 'antd';
import {
  useNavigate,
  useParams,
  useLocation,
} from 'react-router-dom';
import './TrainingDetailPage.css';
const { Text } = Typography;

export const TrainingDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const handleEdit = () => {
    navigate(`/mytraining/edit/${params.id}`, {
      state: location.state,
    });
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="site-card-wrapper" key={params.id}>
      <>
        <Row>
          <Col>
            <Image
              alt="img-detail"
              src={location.state.image}
              width={400}
              height={400}
              style={{ borderRadius: 10 }}
            />
          </Col>

          <Col className="training-detail">
            <Space
              direction="vertical"
              size={7}
              style={{ display: 'flex' }}
            >
              <Text style={{ fontSize: '16px' }}>
                <EnvironmentOutlined /> {location.state.location}
              </Text>
              <Text strong style={{ fontSize: '32px' }}>
                {location.state.eventName}
              </Text>
              <Text style={{ fontSize: '16px' }}>
                Event No : TREV-YYMM-XXXX
              </Text>
              <Text style={{ fontSize: '16px' }}>
                Event Type :{' '}
                {location.state.isOnline === true
                  ? 'Online Class'
                  : 'Offline Class'}
              </Text>
              <Text style={{ fontSize: '16px' }}>
                Event Name : {location.state.eventName}
              </Text>
              <Text style={{ fontSize: '16px' }}>
                Status :{' '}
                {location.state.isCompleted === true
                  ? 'Close Registration'
                  : 'Open for Registration'}
              </Text>
            </Space>
            <Space
              direction="vertical"
              size={5}
              style={{ display: 'flex', paddingTop: 50 }}
            >
              <Text
                type="secondary"
                style={{
                  fontSize: '16px',
                }}
              >
                Start Date : {location.state.startDate}
              </Text>
              <Text type="secondary" style={{ fontSize: '16px' }}>
                End Date : {location.state.endDate}
              </Text>
              <Text type="secondary" style={{ fontSize: '16px' }}>
                <UserOutlined /> {location.state.speaker}
              </Text>
            </Space>
          </Col>
        </Row>

        <Row style={{ paddingTop: 20 }}>
          <Col
            span={24}
            style={{
              textAlign: 'right',
              padding: 20,
              borderTop: '1px #dddddd solid',
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
              <Button
                onClick={handleEdit}
                type="primary"
                htmlType="submit"
                style={{ borderRadius: 5, width: 100 }}
              >
                Edit
              </Button>
            ) : null}
          </Col>
        </Row>
      </>
    </div>
  );
};
