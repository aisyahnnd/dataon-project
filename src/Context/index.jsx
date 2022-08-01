import { createContext } from "react";
import dataJson from "../Dummy/DataTable.json";
import dataTraining from "../dataTraining";
import { columnsAllTraining } from "../Utils/ColumnsAllTraining";
import { columnsMyTraining } from "../Utils/ColumnsMyTraining";
import { useState } from "react";
export const AppContext = createContext(null);
// All Training Event Table Context
export const AllTrainingTableDataContext = createContext(dataJson);
export const AllTrainingTableColumnContext = createContext(columnsAllTraining);
// My Training Event Table Context
export const MyTrainingTableDataContext = createContext(dataJson);
export const MyTrainingTableColumnContext = createContext(columnsMyTraining);
//Data My Training Event Card
export const MyTrainingCardContext = createContext(dataTraining);

//Data All Training Event Card
export const AllTrainingCardContext = createContext(dataTraining);

export const ContextWrapper = props => {
  const [AllTrainingTableDataContext] = useState(dataJson);
  const [AllTrainingTableColumnContext] = useState(columnsAllTraining);
  const [MyTrainingTableDataContext] = useState(dataJson);
  const [MyTrainingTableColumnContext] = useState(columnsMyTraining);
  const [MyTrainingCardContext] = useState(dataTraining);
  const [AllTrainingCardContext] = useState(dataTraining);
  return (
    <AppContext.Provider
      value={{
        AllTrainingTableDataContext,
        AllTrainingTableColumnContext,
        MyTrainingTableDataContext,
        MyTrainingTableColumnContext,
        MyTrainingCardContext,
        AllTrainingCardContext,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
