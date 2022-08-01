import { Rate } from "antd";
import { Link } from "../../Components";
export const columnsMyTraining = [
  {
    title: "EventName",
    dataIndex: "eventName",
    key: "eventName",
    sorter: (a, b) => a.eventName.localeCompare(b.eventName),
    render: eventName => <Link></Link>,
  },
  {
    title: "Event Type",
    dataIndex: "eventType",
    key: "eventType",
    sorter: (a, b) => a.eventType.localeCompare(b.eventType),
  },
  {
    title: "Event Periode",
    dataIndex: "eventPeriode",
    key: "eventPeriode",
    sorter: (a, b) => a.eventPeriode - b.eventPeriode,
  },
  {
    title: "Trainer Name",
    dataIndex: "trainerName",
    key: "trainerName",
    sorter: (a, b) => a.trainerName.localeCompare(b.trainerName),
  },
  {
    title: "Rating",
    dataIndex: "rating",
    key: "rating",
    sorter: (a, b) => a.rating - b.rating,
    render: rating => (
      <Rate disabled allowHalf defaultValue={0} value={rating}></Rate>
    ),
  },
  {
    title: "Additional Info",
    dataIndex: "additionalInfo",
    key: "additionalInfo",
    sorter: (a, b) => a.additionalInfo.localeCompare(b.additionalInfo),
  },
];
