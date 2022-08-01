import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "antd/dist/antd.css";
import {
  AllTrainingCardContext,
  AllTrainingTableColumnContext,
  AllTrainingTableDataContext,
  MyTrainingCardContext,
  MyTrainingTableColumnContext,
} from "./Context";
import { columnsAllTraining } from "./Utils/ColumnsAllTraining";
import dataJson from "./Dummy/DataTable.json";
import dataTraining from "./dataTraining";
import { columnsMyTraining } from "./Utils/ColumnsMyTraining";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AllTrainingTableDataContext.Provider value={dataJson}>
      <AllTrainingTableColumnContext.Provider value={columnsAllTraining}>
        <MyTrainingCardContext.Provider value={dataJson}>
          <MyTrainingTableColumnContext.Provider value={columnsMyTraining}>
            <MyTrainingCardContext.Provider value={dataTraining}>
              <AllTrainingCardContext.Provider value={dataTraining}>
                <App />
              </AllTrainingCardContext.Provider>
            </MyTrainingCardContext.Provider>
          </MyTrainingTableColumnContext.Provider>
        </MyTrainingCardContext.Provider>
      </AllTrainingTableColumnContext.Provider>
    </AllTrainingTableDataContext.Provider>
  </React.StrictMode>
);
