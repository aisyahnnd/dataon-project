import { MyTrainingCard } from './Parts/MyTrainingCard/MyTrainingCard';
import { AllTrainingEvent } from './Parts/AllTrainingEvent/AllTrainingEvent';
import FilterTrainingEvent from './Parts/FilterTrainingEvent';
import { AllTrainingEventTable, MyTrainingEventTable } from './Parts';
import './App.css';
import { SectionHeader } from './Parts/SectionHeader/SectionHeader';
import { TrainingEditPage } from './Pages/TrainingEditPage/TrainingEditPage';

const App = () => {
  return (
    <>
      <AllTrainingEventTable />
      <MyTrainingEventTable />
      <SectionHeader />
      <FilterTrainingEvent />
      <MyTrainingCard />
      <AllTrainingEvent />
      <TrainingEditPage />
    </>
  );
};

export default App;
