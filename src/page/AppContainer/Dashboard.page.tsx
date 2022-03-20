import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchGroups } from "../../api/groups";
import { Group } from "../../modals/Group";

interface Props {}

const Dashboard: React.FC<Props> = (props) => {
  const [groups, setGroups] = useState<Group[]>([]);
  useEffect(() => {
    fetchGroups({ status: "all-groups" }).then((response) => setGroups(response));
  }, []);

  return (
    <div>
      This is dashboard page.<Link to="/recordings">Go to recordings</Link>
      {/* {groups.map((group) => (
        <div>{group}</div>
      ))} */}
    </div>
  );
};
export default memo(Dashboard);
