import React, { Suspense } from 'react'; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const RemoSystemCheck = React.lazy(() => import('./pages/RemoSystemCheck'))

function App() {
  return (<Router>
    <Suspense fallback={ <div>Loading...</div>}>
      <main>
        <Switch>
          <Route exact path="/" component={RemoSystemCheck} />
        </Switch>
      </main>
    </Suspense>
  </Router>
  );
}

export default App;
