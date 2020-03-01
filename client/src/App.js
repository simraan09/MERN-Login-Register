import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Login from './Components/Login';
import Register from './Components/Register';
import Profile from './Components/Profile';


function App() {
  return (
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path="/" components={Landing} />
          <div className="container">
            <Route exact path="/register" components={Register} />
            <Route exact path="/login" components={Login} />
            <Route exact path="/profile" components={Profile} />
          </div>
        </div>
      </Router>
  );
}

export default App;
