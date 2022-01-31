import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import ViewEmployee from './components/ViewEmployee';

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <header className="App-header">
          <h2>Employee Management System</h2><br/>
            <Switch>
              <Route exact path="/" component={EmployeeList}></Route>
              <Route path="/addEmployee/:id" component={AddEmployee}></Route>
              <Route path="/viewEmployee/:id" component={ViewEmployee}></Route>
              </Switch>        
          </header>
        </div>
      </Router>
    </div>
  );
}

export default App;
