import { MyTrainingCard } from './Parts/MyTrainingCard/MyTrainingCard';
import { AllTrainingEvent } from './Parts/AllTrainingEvent/AllTrainingEvent';
import FilterTrainingEvent from './Parts/FilterTrainingEvent';
import { AllTrainingEventTable, MyTrainingEventTable } from './Parts';
import './App.css';
import { SectionHeader } from './Parts/SectionHeader/SectionHeader';
import { TrainingEditPage } from './Pages/TrainingEditPage/TrainingEditPage';
import { TrainingDetailPage } from './Pages/TrainingDetailPage/TrainingDetailPage';
import { TrainingCreatePage } from './Pages/TrainingCreatePage /TrainingCreatePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AllTrainingEventTable />
              <MyTrainingEventTable />
              <SectionHeader />
              <FilterTrainingEvent />
              <MyTrainingCard />
              <AllTrainingEvent />
            </>
          }
        />
        <Route
          path="/training/:id"
          element={<TrainingDetailPage />}
        />
        <Route
          path="/training/create"
          element={<TrainingCreatePage />}
        />

        <Route
          path="/mytraining/:id"
          element={<TrainingDetailPage />}
        />
        <Route
          path="/mytraining/edit/:id"
          element={<TrainingEditPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
