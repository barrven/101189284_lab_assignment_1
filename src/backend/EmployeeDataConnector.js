import axios from "axios"

const EMPLOYEE_LIST_URL = "http://localhost:9090/api/v1/employees";

class EmployeeDataConnector {

    getEmployees = () =>{
        return axios.get(EMPLOYEE_LIST_URL);
    }
}

export default new EmployeeDataConnector()
