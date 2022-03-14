import React, { memo } from "react";
interface Props {}
const Sidebar: React.FC<Props> = (props) => {
  return <div className="h-screen bg-blue-400 w-80">This is sidebar</div>;
};
export default memo(Sidebar);
