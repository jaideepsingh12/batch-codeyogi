import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AppContainerPage from "./page/AppContainer.page";
import AuthPage from "./page/Auth.page";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login"></Redirect>
          </Route>
          <Route path={["/login", "/signup"]} exact>
            <AuthPage />
          </Route>
          <Route path={["/dashboard", "/recordings", "/batch/:batchnumber/lecture/:lecturenumber"]}>
            <AppContainerPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
