import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeList from "./components/EmployeeList";
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import ViewEmployee from "./components/ViewEmployee"

function App() {
  return (
      <BrowserRouter>
          <div className="container pt-3">
              <Switch>
                  <Route path="/" exact component={ EmployeeList } />
                  <Route path="/add" component={ AddEmployee } />
                  <Route path="/edit/:id" component={ EditEmployee } />
                  <Route path="/view/:id" component={ ViewEmployee } />
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
