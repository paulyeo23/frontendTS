import {
  crud,
  employeeData,
  employeeList,
  newEmployeeForm,
  state,
} from "../Interfaces/interfaces";
import axios, { AxiosResponse } from "axios";

import { configureStore } from "@reduxjs/toolkit";
import { create } from "domain";

import logger from "redux-logger";
import { Reducer } from "react";

const BACKEND_URL: string = "http://localhost:3000";

export const crudFunctions = (): crud => {
  const getAllEmployees = async (): Promise<AxiosResponse> => {
    return await axios({
      method: "get",
      url: BACKEND_URL + "/employee",
    });
  };
  const createEmployee;
};

export const employeesReducer: Reducer<
  { employeeList: employeeList | []; newEmployeeForm: newEmployeeForm | {} },
  Function
> = (
  prevState: {
    employeeList: employeeList | [];
    newEmployeeForm: newEmployeeForm | {};
  } = { employeeList: [], newEmployeeForm: {} },
  action
): {
  employeeList: employeeList | [];
  newEmployeeForm: newEmployeeForm | {};
} => {};

// export const createEmployee = async (
//   form: newEmployeeForm
// ): Promise<employeeData> => {
//   const results = await axios<newEmployeeForm, employeeData>({
//     method: "post",
//     url: BACKEND_URL + "/employee",
//     data: {
//       name: form.name,
//       department: form.department,
//       salary: form.salary,
//     },
//   });
//   return results;
// };

// const reducer = {
//   getAllEmployees: getAllEmployees,
//   createEmployee: createEmployee,
// };

// const preloadedState = {
//   todos: [
//     {
//       text: "Eat food",
//       completed: true,
//     },
//     {
//       text: "Exercise",
//       completed: false,
//     },
//   ],
//   visibilityFilter: "SHOW_COMPLETED",
// };

const store = configureStore({
  reducer: { employeesReducer: employeesReducer },
});

export default store;
