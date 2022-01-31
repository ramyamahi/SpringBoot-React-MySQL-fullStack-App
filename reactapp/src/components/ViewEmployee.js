import React, {Component}  from "react";
import EmployeeServices from "../services/EmployeeServices";

class ViewEmployee extends Component {
    constructor(props) {
        super(props);
        this.state ={
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount() {
        EmployeeServices.getEmployeeById(this.state.id).then(res => {
            this.setState({employee: res.data})
        })
    }


    render() {
        const { firstname, lastname, emailid } = this.state.employee
        return (
            <ul className="list-unstyled">
                <li>First Name: {firstname}</li>
                <li>Last Name: {lastname}</li>
                <li>Email: {emailid}</li>
            </ul>
        )
    }
}


export default ViewEmployee;