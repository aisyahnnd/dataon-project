import { MoreOutlined, PlusOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Col, Dropdown, Menu, Row } from 'antd';
import {
  useNavigate,
  Link,
  useLocation,
  useParams,
} from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../Context';

const SectionHeader = ({ viewButton }) => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  let user = JSON.parse(localStorage.getItem('user-info'));
  const handleCreate = () => {
    navigate('/training/create');
  };
  //breadcumb
  const pathSnippets = location.pathname.split('/').filter((i) => i);
  const breadcrumbNameMaps = {
    '/': 'Dashboard',
    '/register': 'Register',
    '/training': 'Training',
    ['/training/' + params.id]: 'My Training',
    '/training/create': 'Create Training',
    ['/mytraining/' + params.id]: 'Detail Page',
    '/mytraining/edit': 'Edit',
    ['/mytraining/edit/' + params.id]: 'Edit Detail',
    '/mytraining': 'My Training',
  };
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        {breadcrumbNameMaps[url]}
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key={'/'}>
      <Link to="/">Dashboard</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const menuLogout = (
    <Menu
      onClick={handleLogout}
      items={[
        {
          label: 'Logout',
          key: '1',
        },
      ]}
    />
  );

  const menuLogin = (
    <Menu
      onClick={handleLogin}
      items={[
        {
          label: 'Login',
          key: '1',
        },
      ]}
    />
  );

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
            <Breadcrumb separator=">">{breadcrumbItems}</Breadcrumb>
          </Col>
          <Col
            span={12}
            style={{
              textAlign: 'right',
              padding: 0,
            }}
          >
            {viewButton && (
              <>
                <Button
                  onClick={handleCreate}
                  type="primary"
                  htmlType="submit"
                  style={{ borderRadius: 5, fontWeight: 'bold' }}
                >
                  <PlusOutlined /> Create Training Event
                </Button>
                <Dropdown.Button
                  type="dashed"
                  style={{
                    borderRadius: 5,
                    fontWeight: 'bold',
                    marginLeft: 10,
                    marginRight: 20,
                  }}
                  overlay={
                    localStorage.getItem('user-info')
                      ? menuLogout
                      : menuLogin
                  }
                  trigger={['click']}
                  icon={<MoreOutlined />}
                >
                  {user ? `Hi, ${user.username}` : 'More'}
                </Dropdown.Button>
              </>
            )}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SectionHeader;
