import LabelSection from '../../Components/LabelSection';
import TableData from '../../Components/TableData';
import { useContext } from 'react';
import { AppContext } from '../../Context';
const AllTrainingEventTable = () => {
  const { DataAllTrainings, AllTrainingTableColumnContext } =
    useContext(AppContext);

  return (
    <div className="site-card-wrapper">
      <LabelSection
        label="All Training Event"
        dataBadge={50}
        style={{
          backgroundColor: '#e7e7e7',
          color: '#2db7f5',
          fontWeight: 'bold',
        }}
      ></LabelSection>
      <TableData
        dataTable={DataAllTrainings.data}
        pagination={{ defaultPageSize: 10 }}
        columns={AllTrainingTableColumnContext}
      ></TableData>
    </div>
  );
};

export default AllTrainingEventTable;
