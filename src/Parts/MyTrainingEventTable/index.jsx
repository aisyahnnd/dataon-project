import { useContext } from "react";
import LabelSection from "../../Components/LabelSection";
import TableData from "../../Components/TableData";
import { AppContext } from "../../Context";
const MyTrainingEventTable = () => {
  const { MyTrainingTableDataContext } = useContext(AppContext);
  const { MyTrainingTableColumnContext } = useContext(AppContext);
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
        dataTable={MyTrainingTableDataContext}
        pagination={{ defaultPageSize: 2 }}
        columns={MyTrainingTableColumnContext}
      />
    </div>
  );
};

export default MyTrainingEventTable;
