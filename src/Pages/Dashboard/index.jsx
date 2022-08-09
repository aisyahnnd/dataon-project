import { useContext, useEffect } from "react";
import { SectionHeader } from "../../Components";
import { AppContext } from "../../Context";
import {
  FilterTrainingEvent,
  MyTrainingCard,
  AllTrainingEventTable,
  MyTrainingEventTable,
  AllTrainingEvent,
} from "../../Parts";
const Dashboard = () => {
  const {
    GetAllTraining,
    GetMyTraining,
    view,
    valueInputSearching,
    GetDataSearching,
    DataAllTrainings,
    AllTrainingTableColumnContext,
    MyTrainingTableColumnContext,
    DataMyTraining,
    deleteStatus,
  } = useContext(AppContext);
  useEffect(() => {
    // GetAllTraining();
    // GetMyTraining();
    GetDataSearching(valueInputSearching);
  }, [valueInputSearching, deleteStatus]);

  return (
    <>
      <SectionHeader viewButton></SectionHeader>
      <FilterTrainingEvent />
      {view ? (
        <>
          <MyTrainingCard /> <AllTrainingEvent item={DataAllTrainings} />
        </>
      ) : (
        <>
          <MyTrainingEventTable
            dataTable={DataMyTraining}
            columns={MyTrainingTableColumnContext}
          />
          <AllTrainingEventTable
            dataTable={DataAllTrainings.data}
            columns={AllTrainingTableColumnContext}
          />
        </>
      )}
    </>
  );
};

export default Dashboard;
