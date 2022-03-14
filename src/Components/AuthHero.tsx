import React, { memo } from "react";
interface Props {}
const AuthHero: React.FC<Props> = (props) => {
  console.log("auth page rendering");

  return <div className="w-1/2 h-screen bg-blue-500">Auth image goes here.</div>;
};
export default memo(AuthHero);
