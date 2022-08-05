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
  } = useContext(AppContext);
  var totalData = null;
  useEffect(() => {
    GetAllTraining();
    GetMyTraining();
    GetDataSearching(valueInputSearching);
  }, [valueInputSearching]);

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
