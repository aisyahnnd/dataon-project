import LabelSection from "../../Components/LabelSection";
import TableData from "../../Components/TableData";

import { useContext, useState } from "react";
import {
  AllTrainingTableColumnContext,
  AllTrainingTableDataContext,
} from "../../Context";
const AllTrainingEventTable = () => {
  const dataTable = useContext(AllTrainingTableDataContext);
  const columns = useContext(AllTrainingTableColumnContext);
  const a = useState("a");
  return (
    <div className="site-card-wrapper">
      <LabelSection
        label="All Training Event"
        dataBadge={50}
        style={{
          backgroundColor: "#e7e7e7",
          color: "#2db7f5",
          fontWeight: "bold",
        }}
      ></LabelSection>
      <TableData
        dataTable={dataTable}
        pagination={{ defaultPageSize: 2 }}
        columns={columns}
      ></TableData>
    </div>
  );
};

export default AllTrainingEventTable;
