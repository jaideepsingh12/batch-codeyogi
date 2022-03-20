import React, { memo, useContext } from "react";
import { useHistory } from "react-router";
import { logout } from "../api/auth";
import AppContext from "../App.context";
import { User } from "../modals/User";
interface Props {
  user: User;
}
const Sidebar: React.FC<Props> = (props) => {
  const { user } = useContext(AppContext);
  return (
    <div>
      <div className="h-screen bg-blue-400 w-80">
        <div>{user!.first_name}</div>
        This is sidebar.
        <button
          className="px-3 py-2 bg-red-500"
          onClick={() => {
            logout();
            window.location.href = "/login";
          }}
        >
          {" "}
          logout
        </button>
      </div>
    </div>
  );
};
export default memo(Sidebar);
