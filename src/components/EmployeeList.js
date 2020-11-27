import React, { Component } from "react";
import EmployeeDataConnector from "../backend/EmployeeDataConnector";

class EmployeeList extends Component{
    constructor(props){
        super(props);
        this.state = {
            employees: []
        };

        this.addEmployee = () =>{
            this.props.history.push("/add")
        };
    }

    componentDidMount() {
        EmployeeDataConnector.getEmployees()
            .then(res =>{
                this.setState({ employees: res.data })
            })
    }



    render(){
        return (
            <div>
                <h2 className="text-center">Employees List </h2>
                <div className="row pb-3 d-flex flex-row-reverse">
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                </div>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.employees.map((employee) =>(
                            <tr key = {employee.id}>
                                <td>{ employee.firstName}</td>
                                <td>{ employee.lastName}</td>
                                <td>{ employee.emailId}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default EmployeeList
