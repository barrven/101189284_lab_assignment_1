import axios from "axios"

const EMP_URL = "http://localhost:9090/api/v1/employees";

class EmployeeDataConnector {

    getEmployees = () =>{
        return axios.get(EMP_URL)
    };

    addEmployee = (employee) =>{
        return axios.post(EMP_URL, employee)
    };

    deleteEmployee = (id) =>{
      return axios.delete(EMP_URL+"/"+id)
    };

    getEmployeeById = (id) =>{
        return axios.get(EMP_URL+"/"+id)
    };

    updateEmployeeById = (id, employee) =>{
        return axios.put(EMP_URL+"/"+id, employee)
    }
}

export default new EmployeeDataConnector()
