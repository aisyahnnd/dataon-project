import { Badge, Carousel, Col, Row } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { SingleTrainingCard } from "./SingleTrainingCard";
import "./MyTrainingCard.css";
import { useContext } from "react";
import { AppContext } from "../../Context";

const MyTrainingCard = () => {
  const { MyTrainingCardContext } = useContext(AppContext);
  return (
    <>
      <div className="site-card-wrapper">
        <div className="title-event">
          <p className="title">
            My Training Event
            <Badge
              offset={20}
              style={{
                backgroundColor: "#e7e7e7",
                color: "#2db7f5",
                fontWeight: "bold",
              }}
              count={MyTrainingCardContext.length}
            />
          </p>
        </div>
        <Carousel
          arrows
          dots={false}
          infinite={true}
          slidesToShow={4}
          slidesToScroll={1}
          prevArrow={<SlickButtonLeft />}
          nextArrow={<SlickButtonRight />}
        >
          {MyTrainingCardContext.map((item, id) => {
            return (
              <Row key={id} align="middle" justify="center" gutter={5}>
                <Col>
                  <div>
                    <SingleTrainingCard id={id} item={item} />
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
