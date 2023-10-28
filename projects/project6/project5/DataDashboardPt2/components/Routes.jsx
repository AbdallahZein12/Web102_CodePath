// Routes.jsx
import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import RestaurantDetail from './RestaurantDetail';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/restaurant/:id" component={RestaurantDetail} />
      </Switch>
    </Router>
  );
};

export default Routes;
