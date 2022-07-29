import { MyTrainingCard } from './Parts/MyTrainingCard/MyTrainingCard';
import { AllTrainingEvent } from './Parts/AllTrainingEvent/AllTrainingEvent';
import FilterTrainingEvent from './Parts/FilterTrainingEvent';
import './App.css';
import { SectionHeader } from './Parts/SectionHeader/SectionHeader';

function App() {
  return (
    <>
      <SectionHeader />
      <FilterTrainingEvent />
      <MyTrainingCard />
      <AllTrainingEvent />
    </>
  );
}

export default App;
