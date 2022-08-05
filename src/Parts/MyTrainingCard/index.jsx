import { Badge, Carousel, Col, Row } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { SingleTrainingCard } from "./SingleTrainingCard";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context";
import "./MyTrainingCard.css";

const MyTrainingCard = () => {
  const { DataMyTraining } = useContext(AppContext);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      setData(DataMyTraining.data);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, [DataMyTraining]);

  return (
    <>
      <div className="site-card-wrapper">
        <div className="title-event">
          <p className="title">
            My Training Event
            <Badge
              offset={20}
              style={{
                marginLeft: 5,
                backgroundColor: "#e7e7e7",
                color: "#2db7f5",
                fontWeight: "bold",
              }}
              count={data.length}
            />
          </p>
        </div>
        <Carousel
          arrows
          dots={false}
          infinite={data.length > 3 ? true : false}
          slidesToShow={3}
          slidesToScroll={1}
          prevArrow={<SlickButtonLeft />}
          nextArrow={<SlickButtonRight />}
        >
          {data.map((item, id) => {
            return (
              <Row key={item.id} align="middle" justify="center" gutter={5}>
                <Col>
                  <div>
                    <SingleTrainingCard id={item.id} item={item} />
                  </div>
                </Col>
              </Row>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};
const SlickButtonLeft = ({ currentSlide, slideCount, children, ...props }) => (
  <LeftOutlined {...props}>{children}</LeftOutlined>
);
const SlickButtonRight = ({ currentSlide, slideCount, children, ...props }) => (
  <RightOutlined {...props}>{children}</RightOutlined>
);
export default MyTrainingCard;
