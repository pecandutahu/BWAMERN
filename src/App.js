import React from 'react';
import 'assets/scss/style.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from 'pages/LandingPage';

function App() {
  return (
    <div className="App">
       <Router>
          {/* <Route path="/" component={LandingPage}> </Route> */}
          <Switch>
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
