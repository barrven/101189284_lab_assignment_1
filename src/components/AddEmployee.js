import React, { Component } from "react"
import EmployeeDataConnector from "../backend/EmployeeDataConnector";

class AddEmployee extends Component{
    constructor(props){
        super(props);

        this.state= {
            firstName: "",
            lastName: "",
            emailId: ""
        };

        // todo: tutorial defines these methods outside of the constructor and then binds them from inside
        //  this way seems to work for now but reference this later if it breaks at some point
        //  https://youtu.be/S5AFJIfRxQU?t=420

        this.firstNameChanged = (e) =>{
            this.setState({firstName: e.target.value});
        };

        this.lastNameChanged = (e) =>{
            this.setState({lastName: e.target.value});
        };

        this.emailChanged = (e) =>{
            this.setState({emailId: e.target.value});
        };

        this.submitForm = (e) =>{
            e.preventDefault();
            let employee = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                emailId: this.state.emailId
            };

            EmployeeDataConnector.addEmployee(employee)
                .then(res =>{
                    this.props.history.push("/")
                })
                .catch(e => console.error(e))
        };

        this.cancel = () =>{
              this.props.history.push("/")
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Employee</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input placeholder="First Name" name="firstName" className="form-control"
                                        value={this.state.firstName} onChange={this.firstNameChanged}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input placeholder="Last Name" name="lastName" className="form-control"
                                           value={this.state.lastName} onChange={this.lastNameChanged}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input placeholder="Email" name="emailId" className="form-control"
                                           value={this.state.emailId} onChange={this.emailChanged}
                                    />
                                </div>

                                <div className="text-center mt-4">
                                    <button className="btn btn-success m-2 btn-block" onClick={this.submitForm}>Save</button>
                                    <button className="btn btn-danger m-2 btn-block" onClick={this.cancel.bind(this)}>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddEmployee
