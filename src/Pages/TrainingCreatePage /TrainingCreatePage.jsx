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
import { SectionHeader } from "@/Components";
import { useContext } from "react";
import { AppContext } from "@/Context";
const { RangePicker } = DatePicker;
const { Option, OptGroup } = Select;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }

  return e?.fileList;
};

export const TrainingCreatePage = () => {
  const [form] = Form.useForm();
  const { CreateDataTraining } = useContext(AppContext);
  const [componentSize, setComponentSize] = useState("default");
  const navigate = useNavigate();

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const handleBack = () => {
    navigate("/");
  };

  //format date
  const rangeConfig = {
    rules: [
      {
        type: "array",
        required: true,
        message: "Please select time!",
      },
    ],
  };
  //post data
  const onFinish = (values) => {
    const starDate = values.date[0].format("YYYY-MM-DD");
    const endDate = values.date[1].format("YYYY-MM-DD");
    const data = {
      eventName: values.eventName,
      isOnlineClass: values.isOnlineClass,
      startDate: starDate,
      endDate: endDate,
      location: { lat: values.latitude, long: values.longitude },
      isComplete: values.status,
      trainer: values.trainer,
      additionalInfo: values.additionalInfo,
    };
    CreateDataTraining(data);
    form.resetFields();
  };

  return (
    <>
      <SectionHeader></SectionHeader>

      <div className="site-card-wrapper">
        <Form
          onFinish={onFinish}
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
          form={form}
        >
          <Form.Item
            name="isOnlineClass"
            label="Event Type:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Select Event Type"
              optionFilterProp="children"
              allowClear
            >
              <OptGroup label="Type">
                <Option value={true}>Online Class</Option>
                <Option value={false}>Offline Class</Option>
              </OptGroup>
            </Select>
          </Form.Item>
          <Form.Item
            name="eventName"
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
            <Upload
              name="logo"
              action="/upload.do"
              listType="picture"
            >
              <Button icon={<UploadOutlined />}>
                Click to Upload
              </Button>
            </Upload>
          </Form.Item>
          <Form.Item
            name="date"
            label="Date"
            {...rangeConfig}
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
              <Radio.Button value={true}>
                Open for Registration
              </Radio.Button>
              <Radio.Button value={false}>
                Closed Registration
              </Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="trainer"
            label="Trainer Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Input Trainer Name" />
          </Form.Item>

          <Form.Item label="Location based Latitude and Longitude">
            <Form.Item
              name="latitude"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input name="latitude" placeholder="latitude" />
            </Form.Item>
            <Form.Item
              name="longitude"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="longitude" />
            </Form.Item>
          </Form.Item>

          <Form.Item
            name="additionalInfo"
            label="Infromation"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Input Information Event" />
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
