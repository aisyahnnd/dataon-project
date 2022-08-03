import { createContext } from "react";
import dataJson from "../Dummy/DataTable.json";
import dataTraining from "../dataTraining";
import { columnsAllTraining } from "../Utils/ColumnsAllTraining";
import { columnsMyTraining } from "../Utils/ColumnsMyTraining";
import { useState } from "react";
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
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
