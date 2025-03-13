import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import LoginPanel from "./components/LoginPanel";
// ...existing code...

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPanel} />
        {/* ...existing routes... */}
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
}

export default App;
