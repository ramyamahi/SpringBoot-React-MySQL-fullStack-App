import React, {Component}  from "react";
import EmployeeServices from "../services/EmployeeServices";

class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state ={
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this)
    }

    componentDidMount() {
        EmployeeServices.getEmployees().then((res) => {
            this.setState({employees : res.data});
        })
    }

    viewEmployee(id) {
        this.props.history.push(`/viewEmployee/${id}`);
    }

    addEmployee() {
        this.props.history.push('/addEmployee/-1');
    }

    editEmployee(id) {
        this.props.history.push(`/addEmployee/${id}`);
    }

    deleteEmployee(id) {
        EmployeeServices.deleteEmployee(id).then((res) => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        })
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button><br/><br/>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">E-mail</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>   
                            
                        {
                            this.state.employees.map((employee) => {
                                return (
                                    <tr key={employee.id}>
                                        <td>{employee.firstname}</td>
                                        <td>{employee.lastname}</td>
                                        <td>{employee.emailid}</td>
                                        <td>
                                            <button className="btn btn-info" onClick={() => {this.viewEmployee(employee.id)}}>Info</button>
                                            <button className="btn btn-primary" onClick={() => {this.editEmployee(employee.id)}}>Edit</button>
                                            <button className="btn btn-danger" onClick={() => {this.deleteEmployee(employee.id)}}>Delete</button>
                                        </td>
                                    </tr>  
                                )
                            })
                        }                           
                                              
                    </tbody>
                </table>
            </div>
        )
    }
}


export default EmployeeList;