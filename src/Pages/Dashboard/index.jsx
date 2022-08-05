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
    valueCardTraining,
    SearchCardTraining,
    GetAllTraining,
    GetMyTraining,
    view,
    deleteStatus,
  } = useContext(AppContext);

  useEffect(() => {
    GetMyTraining();
    GetAllTraining();
    SearchCardTraining(valueCardTraining);
  }, [deleteStatus, valueCardTraining]);

  return (
    <>
      <SectionHeader viewButton></SectionHeader>
      <FilterTrainingEvent />
      {view ? (
        <>
          <MyTrainingCard />
          <AllTrainingEvent />
        </>
      ) : (
        <>
          <MyTrainingEventTable />
          <AllTrainingEventTable />
        </>
      )}
    </>
  );
};

export default Dashboard;
