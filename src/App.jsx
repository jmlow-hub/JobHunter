import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './container/Login/Login';
import NewUserSignUp from "./component/NewUserSignUp";

import styles from "./App.scss";

const App = () => {
  return (
    <Router>
        <div className={styles.app}>
          <Switch>
            <Route  exact path="/">
              <Login />
            </Route>
            
            <Route path="/newUserSignup"> 
              <NewUserSignUp />
            </Route>

          
          </Switch>
        </div>

      
    </Router>
 
  )
}

export default App
