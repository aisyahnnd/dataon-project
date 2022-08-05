import React, { useState, useEffect } from "react";
import { Badge, Col, Row, List } from "antd";
import { SingleTrainingEvent } from "./SingleTrainingEvent";
import { useContext } from "react";
import { AppContext } from "../../Context";
import "./AllTrainingEvent.css";

const AllTrainingEvent = () => {
  const { DataAllTrainings } = useContext(AppContext);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      setData(DataAllTrainings.data);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, [DataAllTrainings]);

  return (
    <>
      <div className="site-card-wrapper">
        <div className="title-event">
          <p>
            All Training Event
            <Badge
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

        <List
          grid={{
            gutter: 16,
            column: 5,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 5,
            xxl: 3,
          }}
          dataSource={data.slice(0, 5)}
          renderItem={(item, id) => (
            <List.Item>
              <Row justify="center">
                <Col>
                  <SingleTrainingEvent id={item.id} item={item} />
                </Col>
              </Row>
            </List.Item>
          )}
        />
      </div>
    </>
  );
};

export default AllTrainingEvent;
