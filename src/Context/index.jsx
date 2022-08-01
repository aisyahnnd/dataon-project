import { createContext } from "react";
import dataJson from "../Dummy/DataTable.json";
import dataTraining from "../dataTraining";
import { columnsAllTraining } from "../Utils/ColumnsAllTraining";
import { columnsMyTraining } from "../Utils/ColumnsMyTraining";

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
