import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import FriendsList from './components/FriendsList'; 
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
       <Link to="/login">Login</Link>
       <Route path="/login" component={Login} />
       <Link to="/protected">Protected Page</Link>
       <PrivateRoute exact path="/protected" component={FriendsList} />
    </div>
    </Router>
  );
}

export default App;
