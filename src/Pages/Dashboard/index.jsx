import { useContext, useEffect } from 'react';
import { SectionHeader } from '../../Components';
import { AppContext } from '../../Context';
import {
  FilterTrainingEvent,
  MyTrainingCard,
  AllTrainingEventTable,
  MyTrainingEventTable,
  AllTrainingEvent,
} from '../../Parts';
const Dashboard = () => {
  const { GetAllTraining, GetMyTraining, view } =
    useContext(AppContext);

  useEffect(() => {
    GetMyTraining();
    GetAllTraining();
  }, []);

  return (
    <>
      <SectionHeader viewButton></SectionHeader>
      <FilterTrainingEvent />
      {view ? (
        <>
          <MyTrainingCard /> <AllTrainingEvent />
        </>
      ) : (
        <>
          <MyTrainingEventTable /> <AllTrainingEventTable />
        </>
      )}
    </>
  );
};

export default Dashboard;
