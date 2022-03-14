import React, { memo } from "react";
import { useParams } from "react-router-dom";
interface Props {}
const Lecture: React.FC<Props> = (props) => {
  const { batchnumber, lecturenumber } = useParams<any>();

  return (
    <div>
      this is lecture page. here batch number {batchnumber}'s lecture number {lecturenumber} is being shown
    </div>
  );
};
export default memo(Lecture);
