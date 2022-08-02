import { MoreOutlined, PlusOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Col, Row } from "antd";
import { useNavigate, Link, useLocation, useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../Context";
const SectionHeader = ({ viewButton }) => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const handleCreate = () => {
    navigate("/training/create");
  };
  //breadcumb
  const pathSnippets = location.pathname.split("/").filter(i => i);
  const breadcrumbNameMaps = {
    "/": "Dashboard",
    "/register": "Register",
    "/training": "Training",
    ["/training/" + params.id]: "My Training",
    "/training/create": "Create Training",
    ["/mytraining/" + params.id]: "Detail Page",
    "/mytraining/edit": "Edit",
    ["/mytraining/edit/" + params.id]: "Edit Detail",
    "/mytraining": "My Training",
  };
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={url}>
        {/* <Link to={url}>{breadcrumbNameMaps[url]}</Link> //disable link because route not dynamic */}
        {breadcrumbNameMaps[url]}
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key={"/"}>
      <Link to="/">Dashboard</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);
  return (
    <>
      <div className="site-card-wrapper">
        <Row>
          <Col
            span={12}
            style={{
              textAlign: "left",
              paddingTop: 5,
              paddingLeft: 5,
            }}
          >
            <Breadcrumb separator=">">{breadcrumbItems}</Breadcrumb>
          </Col>
          <Col
            span={12}
            style={{
              textAlign: "right",
              padding: 0,
            }}
          >
            {viewButton && (
              <>
                <Button
                  onClick={handleCreate}
                  type="primary"
                  htmlType="submit"
                  style={{ borderRadius: 5, fontWeight: "bold" }}
                >
                  <PlusOutlined /> Create Training Event
                </Button>
                <Button
                  type="dashed"
                  style={{
                    borderRadius: 5,
                    fontWeight: "bold",
                    marginLeft: 10,
                    marginRight: 20,
                  }}
                >
                  <MoreOutlined /> More
                </Button>
              </>
            )}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SectionHeader;
