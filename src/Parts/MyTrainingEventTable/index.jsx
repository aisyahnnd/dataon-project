import LabelSection from "@/Components/LabelSection";
import TableData from "@/Components/TableData";

const MyTrainingEventTable = ({ dataTable, columns }) => {
  return (
    <div className="bg-card rounded-[10px] p-5 m-5">
      <LabelSection
        label="My Training Event"
        dataBadge={50}
        style={{
          backgroundColor: "#e7e7e7",
          color: "#2db7f5",
          fontWeight: "bold",
        }}
      />
      <div className="overflow-x-auto">
        <TableData
          key={dataTable.id}
          dataTable={dataTable.data}
          pagination={{ defaultPageSize: 2 }}
          columns={columns}
        />
      </div>
    </div>
  );
};

export default MyTrainingEventTable;
