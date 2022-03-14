import React, { memo } from "react";
import { Link } from "react-router-dom";
interface Props {}
const Recordings: React.FC<Props> = (props) => {
  return (
    <>
      This is recordings page.<Link to="/dashboard">Go to dashboard</Link>{" "}
    </>
  );
};
export default memo(Recordings);
