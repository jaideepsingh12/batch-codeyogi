import React, { memo } from "react";
import { Switch, Route } from "react-router-dom";
import AuthHero from "../../Components/AuthHero";
import { User } from "../../modals/User";
import LoginPage from "./Login.page";
import SignupPage from "./Signup.page";
interface Props {
  onLoginApp: (user: User) => void;
}

const Auth: React.FC<Props> = (props) => {
  return (
    <div className="flex">
      <Switch>
        <div className="w-1/2">
          <Route path="/login">
            <LoginPage onLoginAuth={props.onLoginApp} />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
        </div>
      </Switch>
      <AuthHero></AuthHero>
    </div>
  );
};
export default memo(Auth);
