import React, { memo } from "react";
import { Route } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";
import LecturePage from "./lecture.page";
import DashboardPage from "./Dashboard.page";
import RecordingsPage from "./Recordings.page";
import { User } from "../../modals/User";
interface Props {
  user: User;
}
const AppContainer: React.FC<Props> = (props) => {
  return (
    <div className="flex">
      <Sidebar user={props.user} />
      <Route path="/dashboard">
        <DashboardPage />
      </Route>
      <Route path="/recordings">
        <RecordingsPage />
      </Route>
      <Route path="/batch/:batchnumber/lecture/:lecturenumber">
        <LecturePage />
      </Route>
    </div>
  );
};
export default memo(AppContainer);
