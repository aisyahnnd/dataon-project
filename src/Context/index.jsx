import { createContext } from "react";
import dataJson from "../Dummy/DataTable.json";
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
  // for toggle switch view
  const [view, setView] = useState(false);

  //for get data all training
  const [DataAllTrainings, setDataAllTrainings] = useState([]);
  const GetAllTraining = async () => {
    const response = await Axios.get("/trainings");
    setDataAllTrainings(response.data);
  };

  //for get data my training
  const [DataMyTraining, setDataMyTraining] = useState([]);
  const GetMyTraining = async () => {
    const response = await Axios.get(`/users/1/trainings`);
    setDataMyTraining(response.data);
  };

  //for create data training
  const CreateDataTraining = async data => {
    try {
      var messages = "Event successfully created";
      const response = await Axios.post("/trainings", data);
      Notification(messages);
    } catch (error) {
      console.log(error);
    }
  };

  //for edit data my training
  const EditDataTraining = async (dataEdit, paramsId, userId) => {
    try {
      var messages = "Event successfully Update";
      const response = await Axios.put(
        `users/${userId}/trainings/${paramsId}`,
        dataEdit
      );
      Notification(messages);
    } catch (error) {
      console.log(error);
    }
  };

  //for searching input filter
  const [valueInputSearching, setValueInputSearching] = useState("");
  //get data searching
  const GetDataSearching = async valueInputSearching => {
    console.log(2424, valueInputSearching);
    let endpoints = [
      `/users/1/trainings?search=${valueInputSearching}`,
      `/trainings?search=${valueInputSearching}`,
    ];
    await Promise.all(endpoints.map(endpoint => Axios.get(endpoint))).then(
      ([{ data: dataUserTraining }, { data: dataAllTraining }]) => {
        setDataAllTrainings(dataAllTraining);
        setDataMyTraining(dataUserTraining);
      }
    );
  };
  //for delete data my training
  const [deleteStatus, setDeleteStatus] = useState(false);
  const DeleteDataMyTraining = async id => {
    await Axios.delete(`/users/1/trainings/${id}`)
      .then(res => {
        console.log(res.data);
        setDeleteStatus(true);
      })
      .catch(error => {
        console.log(error);
      });
  };

  //for search card training
  const [valueCardTraining, setValueCardTraining] = useState("");
  const SearchCardTraining = async valueCardTraining => {
    const myTraining = await Axios.get(
      `/users/1/trainings?search=${valueCardTraining}`
    );
    const allTraining = await Axios.get(
      `/trainings?search=${valueCardTraining}`
    );

    Promise.all([myTraining, allTraining]).then(
      ([{ data: dataMyTraining }, { data: dataAllTraining }]) => {
        setDataMyTraining(dataMyTraining);
        setDataAllTrainings(dataAllTraining);
        setValueCardTraining(valueCardTraining);
      }
    );
  };

  return (
    <AppContext.Provider
      value={{
        AllTrainingTableDataContext,
        AllTrainingTableColumnContext,
        MyTrainingTableDataContext,
        MyTrainingTableColumnContext,
        view,
        setView,
        GetAllTraining,
        GetMyTraining,
        DataAllTrainings,
        CreateDataTraining,
        DataMyTraining,
        EditDataTraining,
        valueInputSearching,
        setValueInputSearching,
        GetDataSearching,
        deleteStatus,
        setDeleteStatus,
        DeleteDataMyTraining,
        SearchCardTraining,
        valueCardTraining,
        setValueCardTraining,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
