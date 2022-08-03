import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  DatePicker,
  Row,
  Col,
  InputNumber,
} from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import dayjs from "dayjs";
import moment from "moment";
import { SectionHeader } from "../../Components";
const { RangePicker } = DatePicker;

const normFile = e => {
  if (Array.isArray(e)) {
    return e;
  }

  return e?.fileList;
};

const options = [
  {
    label: "Internal",
    value: "Internal",
  },
  {
    label: "Open for Registration",
    value: "Open for Registration",
  },
  {
    label: "Closed Registration",
    value: "Closed Registration",
  },
];

export const TrainingEditPage = () => {
  const [componentSize, setComponentSize] = useState("default");
  const [data, setData] = useState({
    eventName: "",
    startDate: "",
    endDate: "",
    image: "",
    speaker: "",
    location: "",
    ratings: "",
    isOnline: "",
    isOffline: "",
    information: "",
    participant: "",
    isCompleted: "",
    date: "",
    eventType: "",
  });
  const [value, setValue] = useState("");
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const onChangeRadioButton = ({ target: { value } }) => {
    setValue(
      data.isCompleted === true
        ? "Closed Registration"
        : "Open for Registration"
    );
  };

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const onFinish = values => {};

  const getData = async () => {
    try {
      setData({
        eventName: location.state.eventName,
        startDate: dayjs(location.state.startDate).format("YYYY-MM-DD HH:mm"),
        endDate: dayjs(location.state.endDate).format("YYYY-MM-DD HH:mm"),
        image: location.state.image,
        eventType:
          location.isOffline === true ? "Offline Class" : "Online Class",
        location: location.state.location,
        speaker: location.state.speaker,
        ratings: location.state.ratings,
        information: location.state.information,
        participant: location.state.participant,
      });
    } catch (error) {
      navigate("/missing");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  form.setFieldsValue({
    eventName: data.eventName,
    date: [moment(data.startDate), moment(data.endDate)],
    image: data.image,
    eventType: data.eventType,
    location: data.location,
    speaker: data.speaker,
    ratings: data.ratings,
    information: data.information,
    participant: data.participant,
  });

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
          form={form}
          style={{ paddingTop: 50 }}
        >
          <Form.Item name="eventNo" label="Event No:">
            TREV-YYMM-XXXX
          </Form.Item>
          <Form.Item
            name="eventType"
            label="Event Type:"
            value={data.eventType}
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
            name="eventName"
            label="Event Name"
            value={data.eventName}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="speaker"
            label="Speaker"
            value={data.speaker}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="location"
            label="Location"
            value={data.location}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="date"
            label="Date"
            value={data.date}
            rules={[{ required: true, message: "Please select date!" }]}
          >
            <RangePicker
              format="YYYY-MM-DD HH:mm"
              defaultPickerValue={[
                moment(data.startDate),
                moment(data.endDate),
              ]}
              showTime
            />
          </Form.Item>
          <Form.Item
            name="isCompleted"
            label="Status"
            value={value}
            rules={[
              {
                required: true,
                message: "Please pick an item!",
              },
            ]}
          >
            <Radio.Group
              options={options}
              onChange={onChangeRadioButton}
              optionType="button"
              defaultValue={
                data.isCompleted === true
                  ? "Closed Registration"
                  : "Open for Registration"
              }
            />
          </Form.Item>
          <Form.Item
            name="participant"
            label="Participant"
            value={data.participant}
            rules={[{ required: true }]}
          >
            <InputNumber min={1} max={100} type="number" />
          </Form.Item>
          <Form.Item name="ratings" label="Ratings" value={data.ratings}>
            <InputNumber min={1} max={100} type="number" />
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
