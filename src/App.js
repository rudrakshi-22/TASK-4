import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
// import RegistrationPage from './components/RegistrationPage';


const App = () => {
  return (
    <Router>
      
        <Route exact path="/" component={LoginPage} />
        {/* <Route path="/register" component={RegistrationPage} /> */}
      
    </Router>
  );
};

export default App;

