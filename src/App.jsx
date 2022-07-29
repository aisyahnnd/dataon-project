import { MyTrainingEventTable } from './Parts'
import { MyTrainingCard } from './Parts/MyTrainingCard/MyTrainingCard';
import { AllTrainingEvent } from './Parts/AllTrainingEvent/AllTrainingEvent';
import FilterTrainingEvent from './Parts/FilterTrainingEvent';
import './App.css';

function App() {
  return (
    <>
      <FilterTrainingEvent />
      <MyTrainingCard />
      <AllTrainingEvent />
    </>
  );
}

export default App
