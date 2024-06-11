import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import CreateCampaign from './components/CreateCampaign';
import Campaigns from './components/Campaigns';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/create-campaign" component={CreateCampaign} />
        <Route path="/campaigns" component={Campaigns} />
      </Switch>
    </Router>
  );
}

export default App;
