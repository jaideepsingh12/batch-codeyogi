import React, { memo } from "react";
import { Link } from "react-router-dom";
interface Props {}
const Signup: React.FC<Props> = (props) => {
  return (
    <div className="flex">
      This is signup page. Already have an account ? <Link to="/login">Click Here</Link>
    </div>
  );
};
export default memo(Signup);
