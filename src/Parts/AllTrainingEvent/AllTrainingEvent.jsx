import React from 'react';
import { Badge, Col, Row, List, Card } from 'antd';
import { SingleTrainingEvent } from './SingleTrainingEvent';
import dataTraining from '../../dataTraining';
import './AllTrainingEvent.css';

export const AllTrainingEvent = () => {
  return (
    <>
      <div className="site-card-wrapper">
        <div className="title-event">
          <p>
            All Training Event{' '}
            <Badge
              style={{
                backgroundColor: '#e7e7e7',
                color: '#2db7f5',
                fontWeight: 'bold',
              }}
              count={99}
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
          dataSource={dataTraining.slice(0, 5)}
          renderItem={(item, id) => (
            <List.Item>
              <Row justify="center">
                <Col>
                  <SingleTrainingEvent key={id} item={item} />
                </Col>
              </Row>
            </List.Item>
          )}
        />
      </div>
    </>
  );
};
