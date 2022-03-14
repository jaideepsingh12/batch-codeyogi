import React, { memo } from "react";
import { Link } from "react-router-dom";
interface Props {}
const Dashboard: React.FC<Props> = (props) => {
  return (
    <>
      This is dashboard page.<Link to="/recordings">Go to recordings</Link>
    </>
  );
};
export default memo(Dashboard);
