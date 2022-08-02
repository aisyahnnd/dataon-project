import "./App.css";
import { TrainingEditPage } from "./Pages/TrainingEditPage/TrainingEditPage";
import { TrainingDetailPage } from "./Pages/TrainingDetailPage/TrainingDetailPage";
import { TrainingCreatePage } from "./Pages/TrainingCreatePage /TrainingCreatePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MissingPage } from "./Pages/MissingPage/MissingPage";
import Dashboard from "./Pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>} />
        <Route path="/training/:id" element={<TrainingDetailPage />} />
        <Route path="/training/create" element={<TrainingCreatePage />} />
        <Route path="/mytraining/:id" element={<TrainingDetailPage />} />
        <Route path="/mytraining/edit/:id" element={<TrainingEditPage />} />
        <Route path="*" exact={true} element={<MissingPage />} />
        <Route path="/missing" element={<MissingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
