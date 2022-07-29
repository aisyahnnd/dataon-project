import { AllTrainingEventTable, MyTrainingEventTable } from "./Parts";
import { MyTrainingCard } from "./Parts/MyTrainingCard/MyTrainingCard";
import { AllTrainingEvent } from "./Parts/AllTrainingEvent/AllTrainingEvent";
import FilterTrainingEvent from "./Parts/FilterTrainingEvent";
import "./App.css";

const App = () => {
  return (
    <>
      <AllTrainingEventTable />
      <MyTrainingEventTable />
      <FilterTrainingEvent />
      <MyTrainingCard />
      <AllTrainingEvent />
    </>
  );
};

export default App;
