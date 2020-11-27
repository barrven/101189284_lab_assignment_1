import axios from "axios"

const BASE_EMP_URL = "http://localhost:9090/api/v1/employees";

class EmployeeDataConnector {

    getEmployees = () =>{
        return axios.get(BASE_EMP_URL)
    };

    addEmployee = (employee) =>{
        return axios.post(BASE_EMP_URL, employee)
    }
}

export default new EmployeeDataConnector()
