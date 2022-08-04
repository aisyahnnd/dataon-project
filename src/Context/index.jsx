import { createContext } from "react";
import dataJson from "../Dummy/DataTable.json";
import dataTraining from "../dataTraining";
import { columnsAllTraining } from "../Utils/ColumnsAllTraining";
import { columnsMyTraining } from "../Utils/ColumnsMyTraining";
import { useState } from "react";
import Axios from "../Utils/Axios";
import { Notification } from "../Components";
export const AppContext = createContext(null);

export const ContextWrapper = props => {
  const [AllTrainingTableDataContext] = useState(dataJson);
  const [AllTrainingTableColumnContext] = useState(columnsAllTraining);
  const [MyTrainingTableDataContext] = useState(dataJson);
  const [MyTrainingTableColumnContext] = useState(columnsMyTraining);
  const [MyTrainingCardContext] = useState(dataTraining);
  const [AllTrainingCardContext] = useState(dataTraining);
  // for toggle switch view
  const [view, setView] = useState(false);

  //for get data all training
  const [DataAllTrainings, setDataAllTrainings] = useState([]);
  const GetAllTraining = async () => {
    const response = await Axios.get("/trainings");
    setDataAllTrainings(response.data);
  };

  //for get data my training

  //for create data training
  const CreateDataTraining = async data => {
    try {
      const response = await Axios.post("/trainings", data);
      Notification();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        AllTrainingTableDataContext,
        AllTrainingTableColumnContext,
        MyTrainingTableDataContext,
        MyTrainingTableColumnContext,
        MyTrainingCardContext,
        AllTrainingCardContext,
        view,
        setView,
        GetAllTraining,
        DataAllTrainings,
        CreateDataTraining,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
