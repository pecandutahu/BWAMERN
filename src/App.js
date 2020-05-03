import React from 'react';
import 'assets/scss/style.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from 'pages/LandingPage';
import BrowseBy from 'pages/BrowseBy';
import Stories from 'pages/Stories';
import Agents from 'pages/Agents';

function App() {
  return (
    <div className="App">
       <Router>
          {/* <Route path="/" component={LandingPage}> </Route> */}
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/browse-by" component={BrowseBy} />
            <Route path="/stories" component={Stories} />
            <Route path="/agents" component={Agents} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
