import React from "react";
import Progress from "./Progress";

export const ProgressStats = () => {
  return (
    <div className="d-flex px-5 my-3 overflow-hidden">
      <Progress width={40} bg="#e79939" type="error"/>
      <Progress width={20} bg="#4857c5" />
      <Progress width={30} bg="var(--bs-primary)" />
      <Progress width={15} />
    </div>
  );
};
