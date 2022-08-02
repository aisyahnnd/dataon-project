import React, { useState } from "react";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  DatePicker,
  Upload,
  Row,
  Col,
} from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { SectionHeader } from "../../Components";
const { RangePicker } = DatePicker;

const normFile = e => {
  if (Array.isArray(e)) {
    return e;
  }

  return e?.fileList;
};

export const TrainingCreatePage = () => {
  const [componentSize, setComponentSize] = useState("default");
  const navigate = useNavigate();

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const onFinish = values => {};

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <SectionHeader></SectionHeader>
      <div className="site-card-wrapper">
        <Form
          labelCol={{
            span: 7,
          }}
          wrapperCol={{
            span: 13,
          }}
          layout="horizontal"
          initialValues={{
            size: componentSize,
          }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
        >
          <Form.Item name="event-no" label="Event No:">
            TREV-YYMM-XXXX
          </Form.Item>
          <Form.Item
            name="event-type"
            label="Event Type:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select placeholder="Select Event Type" allowClear>
              <Option value="online-class">Online Class</Option>
              <Option value="offline-class">Offline Class</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="training-course"
            label="Training Course:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Training Course" />
          </Form.Item>
          <Form.Item
            name="event-name"
            label="Event Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Input Event Name" />
          </Form.Item>
          <Form.Item
            name="provider-type"
            label="Provider Type"
            rules={[
              {
                required: true,
                message: "Please pick an item!",
              },
            ]}
          >
            <Radio.Group>
              <Radio.Button value="internal">Internal</Radio.Button>
              <Radio.Button value="external">External</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="provider"
            label="Provider"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Select Provider Type"
              allowClear
              style={{ width: "92%" }}
            >
              <Option value="internal">Internal</Option>
              <Option value="external">External</Option>
            </Select>
            <Button
              htmlType="button"
              style={{
                borderRadius: 3,
                marginLeft: 5,
                border: "1px #40a9ff solid",
                color: "#40a9ff",
              }}
            >
              <PlusOutlined />
            </Button>
          </Form.Item>
          <Form.Item
            name="event-thumbnail"
            label="Event Thumbnail"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            extra="Recommended image resolution is 500x300 (5:3 aspect ratio, max. 2MB, jpg/jpeg)"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            name="date"
            label="Date"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <RangePicker />
          </Form.Item>
          <Form.Item
            name="status"
            label="Status"
            rules={[
              {
                required: true,
                message: "Please pick an item!",
              },
            ]}
          >
            <Radio.Group>
              <Radio.Button value="draf">Internal</Radio.Button>
              <Radio.Button value="open-for-registration">
                Open for Registration
              </Radio.Button>
              <Radio.Button value="closed-registration">
                Closed Registration
              </Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Row style={{ paddingTop: 100 }}>
            <Col
              span={24}
              style={{
                textAlign: "right",
                padding: 20,
                borderTop: "1px #dddddd solid",
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
              <Button
                type="primary"
                htmlType="submit"
                style={{ borderRadius: 5, width: 100 }}
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};
