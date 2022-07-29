import LabelSection from '../../Components/LabelSection'
import TableData from '../../Components/TableData'
import Data from '../../Dummy/DataTable.json'
import { Rate } from 'antd'
const AllTrainingEventTable = () => {
  return (
      <div className="site-card-wrapper">
          <LabelSection
            label="All Training Event" dataBadge={50} style={{
              backgroundColor: '#e7e7e7',
              color: '#2db7f5',
              fontWeight: 'bold'
            }}></LabelSection>
          <TableData dataTable={Data} pagination={{ defaultPageSize: 2 }} columns={
              [
                {
                  title: 'Number',
                  dataIndex: 'key',
                  key: 'key'
                },
                {
                  title: 'EventName',
                  dataIndex: 'eventName',
                  key: 'eventName',
                  sorter: (a, b) => a.eventName.localeCompare(b.eventName)
                },
                {
                  title: 'Event Type',
                  dataIndex: 'eventType',
                  key: 'eventType',
                  sorter: (a, b) => a.eventType.localeCompare(b.eventType)
                },
                {
                  title: 'Event Periode',
                  dataIndex: 'eventPeriode',
                  key: 'eventPeriode',
                  sorter: (a, b) => a.eventPeriode - b.eventPeriode
                },
                {
                  title: 'Trainer Name',
                  dataIndex: 'trainerName',
                  key: 'trainerName',
                  sorter: (a, b) => a.trainerName.localeCompare(b.trainerName)
                },
                {
                  title: 'Rating',
                  dataIndex: 'rating',
                  key: 'rating',
                  sorter: (a, b) => a.rating - b.rating,
                  render: (rating) => <Rate disabled allowHalf defaultValue={0} value={rating}></Rate>
                },
                {
                  title: 'Additional Info',
                  dataIndex: 'additionalInfo',
                  key: 'additionalInfo',
                  sorter: (a, b) => a.additionalInfo.localeCompare(b.additionalInfo)
                }
              ]}></TableData>
    </div>
  )
}

export default AllTrainingEventTable
