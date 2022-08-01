import { useContext } from "react";
import LabelSection from "../../Components/LabelSection";
import TableData from "../../Components/TableData";
import {
  MyTrainingTableColumnContext,
  MyTrainingTableDataContext,
} from "../../Context";
import Data from "../../Dummy/DataTable.json";
const MyTrainingEventTable = () => {
  const dataTable = useContext(MyTrainingTableDataContext);
  const columns = useContext(MyTrainingTableColumnContext);
  return (
    <div className="site-card-wrapper">
      <LabelSection
        label="My Training Event"
        dataBadge={50}
        style={{
          backgroundColor: "#e7e7e7",
          color: "#2db7f5",
          fontWeight: "bold",
        }}
      />
      <TableData
        dataTable={dataTable}
        pagination={{ defaultPageSize: 2 }}
        columns={columns}
      />
    </div>
  );
};

export default MyTrainingEventTable;
