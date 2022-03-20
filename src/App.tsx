import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { me } from "./api/auth";
import { LS_AUTH_TOKEN } from "./api/base";
import AppContext from "./App.context";
import { User } from "./modals/User";
import AppContainerPageLazy from "./page/AppContainer/AppContainer.Lazy";
import AuthPageLazy from "./page/Auth/Auth.Lazy";

function App() {
  const token = localStorage.getItem(LS_AUTH_TOKEN);
  const [user, setUser] = useState<User>();
  useEffect(() => {
    if (!token) return;
    me().then((u) => setUser(u));
  }, []);

  if (!user && token) {
    return <div className="bg-green-500">loading ...</div>;
  }
  return (
    <AppContext.Provider value={{ user, setUser }}>
      <Suspense fallback={<div className="bg-red-500">Loading</div>}>
        <div>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact>
                {user ? <Redirect to="/dashboard"></Redirect> : <Redirect to="/login"></Redirect>}
              </Route>
              <Route path={["/login", "/signup"]} exact>
                {user ? (
                  <Redirect to="/dashboard"></Redirect>
                ) : (
                  <AuthPageLazy
                    onLoginApp={(u) => {
                      setUser(u);
                    }}
                  ></AuthPageLazy>
                )}
              </Route>
              <Route path={["/dashboard", "/recordings", "/batch/:batchnumber/lecture/:lecturenumber"]}>
                {user ? <AppContainerPageLazy user={user!} /> : <Redirect to="/login"></Redirect>}
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </Suspense>
    </AppContext.Provider>
  );
}

export default App;
