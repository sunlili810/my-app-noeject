import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const item1 = lazy(() => import('pages/item1/item1'));
const item2 = lazy(() => import('pages/item2/item2'));

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={item1} />
              <Route exact path="/item1" component={item1} />
              <Route exact path="/item2" component={item2} />
            </Switch>
          </Suspense>
        </Router>
      </div>
    );
  }
}

export default App;
