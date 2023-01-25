import { Axios, AxiosResponse } from "axios";

export interface newEmployeeData {
  name: string;
  salary: number;
  department: string;
}

export interface employeeData extends newEmployeeData {
  id: number;
}

export interface employeeList {
  employees: employeeData[];
}

export interface errormessage {
  errormessage: string;
}

export interface newEmployeeForm extends newEmployeeData {
  name: HTMLInputElement & string;
  department: HTMLInputElement & string;
  salary: HTMLInputElement & number;
}

export interface state {
  employeeList: employeeList | [];
  employeeForm: newEmployeeForm | {};
}

export interface crud {
  getAllEmployees: () => { response: Promise<AxiosResponse> };
  createEmployee: (form: {
    name: string;
    salary: number;
    department: string;
  }) => { response: Promise<AxiosResponse> };
  updateEmployee: (form: {
    name: string;
    salary: number;
    department: string;
  }) => { response: Promise<AxiosResponse> };
  deleteEmployee: () => { response: Promise<AxiosResponse> };
}
