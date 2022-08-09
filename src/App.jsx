import "./App.css";
import { TrainingEditPage } from "./Pages/TrainingEditPage/TrainingEditPage";
import { TrainingDetailPage } from "./Pages/TrainingDetailPage/TrainingDetailPage";
import { TrainingCreatePage } from "./Pages/TrainingCreatePage /TrainingCreatePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MissingPage } from "./Pages/MissingPage/MissingPage";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { RegisterPage } from "./Pages/RegisterPage/RegisterPage";
import Dashboard from "./Pages/Dashboard";

const setToken = userToken => {
  sessionStorage.setItem("token", JSON.stringify(userToken));
};

const getToken = () => {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken;
};

const App = () => {
  const token = getToken();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/training/:id" element={<TrainingDetailPage />} />
        <Route path="/training/create" element={<TrainingCreatePage />} />
        <Route path="/mytraining/:id" element={<TrainingDetailPage />} />
        <Route path="/mytraining/edit/:id" element={<TrainingEditPage />} />
        <Route path="*" exact={true} element={<MissingPage />} />
        <Route path="/missing" element={<MissingPage />} />
        <Route path="/login" element={<LoginPage setToken={setToken} />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
