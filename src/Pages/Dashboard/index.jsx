import { useContext } from "react";
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
  const { view } = useContext(AppContext);
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
