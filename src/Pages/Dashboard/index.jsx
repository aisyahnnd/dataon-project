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
    <div>
      <SectionHeader />
      <FilterTrainingEvent />
      {view ? <MyTrainingCard /> : <MyTrainingEventTable />}
      {view ? <AllTrainingEvent /> : <AllTrainingEventTable />}
    </div>
  );
};

export default Dashboard;
