import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeList from "./components/EmployeeList";
import { BrowserRouter, Router, Route, Switch} from 'react-router-dom'
import AddEmployee from "./components/AddEmployee";

function App() {
  return (
      <BrowserRouter>
          <div className="container pt-3">
              <Switch>
                  <Route path="/" exact component={ EmployeeList } />
                  <Route path="/add" component={ AddEmployee } />
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
