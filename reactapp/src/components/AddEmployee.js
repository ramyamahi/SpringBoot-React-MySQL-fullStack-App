import React, {Component}  from "react";
import EmployeeServices from "../services/EmployeeServices";

class AddEmployee extends Component {
    constructor(props) {
        super(props);
        this.state ={
            id: this.props.match.params.id,
            firstname: '',
            lastname:'',
            emailid: ''
        }
        this.fnameHandler = this.fnameHandler.bind(this);
        this.lnameHandler = this.lnameHandler.bind(this);
        this.mailidHandler = this.mailidHandler.bind(this);
        this.addEmployee = this.addEmployee.bind(this);
    }

    fnameHandler(event) {
        this.setState({firstname: event.target.value})
    }

    lnameHandler(event) {
        this.setState({lastname: event.target.value})
    }

    mailidHandler(event) {
        this.setState({emailid: event.target.value})
    }

    addEmployee(e) {
        e.preventDefault();
        let employee = {firstname: this.state.firstname, lastname: this.state.lastname, emailid: this.state.emailid};
        if(this.state.id <=0) {
            EmployeeServices.addEmployee(employee).then(res => {
                this.props.history.push('/');
            })
        }
        else {
            EmployeeServices.editEmployee(employee, this.state.id).then((res) => {
                this.props.history.push('/');
            })
        }
        
    }

    cancel() {
        this.props.history.push('/');
    }

    componentDidMount() {
        if(this.state.id <=0) {
            return
        }
        else{
            EmployeeServices.getEmployeeById(this.state.id).then((res) => {
                let employee = res.data;
                this.setState({firstname: employee.firstname, lastname: employee.lastname, emailid: employee.emailid});
            })
        }
    }

    render() {
        return (
            <div>
                <form>
                    <div className="row g-3 align-items-center">
                        <div className="col-5">
                            <label className="form-label">First Name</label>
                        </div>
                        <div className="col-7">
                            <input type="text" className="form-control"  name="firstname" value={this.state.firstname} onChange={this.fnameHandler}/>
                        </div>
                    </div><br/>
                    <div className="row g-3 align-items-center">
                        <div className="col-5">
                            <label className="form-label">Last Name</label>
                        </div>
                        <div className="col-7">
                            <input type="text" className="form-control" name="lastname" value={this.state.lastname} 
                        onChange={this.lnameHandler}/>
                        </div>
                    </div><br/>
                    <div className="row g-3 align-items-center">
                        <div className="col-5">
                            <label className="form-label">E-mail</label>
                        </div>
                        <div className="col-7">
                            <input type="email" className="form-control" name="emailid" value={this.state.emailid} onChange={this.mailidHandler}/>
                        </div>
                    </div><br/> <br/>                 
                    <button  className="btn btn-primary" onClick={this.addEmployee}>{this.state.id <= 0 ? 'Add Employee' : 'Update'}</button>
                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>                  
                </form>
            </div>
        )
    }
}


export default AddEmployee;