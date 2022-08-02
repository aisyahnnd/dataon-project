import { useContext } from "react";
import { AppContext } from "../../Context";
import {
  FilterTrainingEvent,
  MyTrainingCard,
  AllTrainingEventTable,
  MyTrainingEventTable,
  AllTrainingEvent,
  SectionHeader,
} from "../../Parts";
const Dashboard = () => {
  const { view } = useContext(AppContext);
  return (
    <>
      <SectionHeader />
      <FilterTrainingEvent />
      {view ? (
        <>
          <MyTrainingCard /> <AllTrainingEvent />
        </>
      ) : (
        <>
          <MyTrainingEventTable /> <AllTrainingEventTable />{" "}
        </>
      )}
    </>
  );
};

export default Dashboard;
