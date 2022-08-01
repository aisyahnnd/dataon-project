import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

export const MissingPage = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/');
  };

  return (
    <Result
      style={{
        backgroundColor: '#fff',
        height: '55vw',
        paddingTop: 100,
      }}
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={onClick}>
          Back Home
        </Button>
      }
    />
  );
};
