import { createContext } from "react";
import dataJson from "../Dummy/DataTable.json";
import dataTraining from "../dataTraining";
import { columnsAllTraining } from "../Utils/ColumnsAllTraining";
import { columnsMyTraining } from "../Utils/ColumnsMyTraining";
import { useState } from "react";
import Axios from "../Utils/Axios";
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
    console.log("noh response", response.data);
    setDataAllTrainings(response.data);
    console.log("nih data all trainings", DataAllTrainings);
  };

  //for get data my training

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
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
