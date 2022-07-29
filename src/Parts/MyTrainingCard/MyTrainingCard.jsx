import { Badge, Carousel, Col, Row } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { SingleTrainingCard } from "./SingleTrainingCard";
import dataTraining from "../../dataTraining";
import "./MyTrainingCard.css";

export const MyTrainingCard = () => {
  return (
    <>
      <div className="site-card-wrapper">
        <div className="title-event">
          <p>
            My Training Event{" "}
            <Badge
              style={{
                backgroundColor: "#e7e7e7",
                color: "#2db7f5",
                fontWeight: "bold",
              }}
              count={99}
            />
          </p>
        </div>

        <Carousel
          arrows
          dots={false}
          infinite={true}
          slidesToShow={4}
          slidesToScroll={1}
          prevArrow={<LeftOutlined />}
          nextArrow={<RightOutlined />}
        >
          {dataTraining.map((item, id) => {
            return (
              <Row key={id} align="middle" justify="center" gutter={5}>
                <Col>
                  <div>
                    <SingleTrainingCard key={id} item={item} />
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
