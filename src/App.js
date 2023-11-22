import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import ThankYouPage from './components/ThankYouPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/register" component={RegistrationPage} />
        <Route path="/thankyou" component={ThankYouPage} />
      </Switch>
    </Router>
  );
};

export default App;
