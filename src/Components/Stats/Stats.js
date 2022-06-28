import React from "react";

export const Stats = () => {
  return (
    <ul className="list d-flex  justify-content-around stats_container">
      <li className="list-item">
        <div className="d-flex">
          <div className="badge"></div>

          <span className="ms-4 fw-bold"> Error 0.12%</span>
        </div>
        <p className="text-muted small ms-4">Average: 0.1%</p>
      </li>

      <li className="list-item">
        <div className="d-flex">
          <div className="badge"></div>
          <span className="ms-4 fw-bold">Zeroes : 5.12%</span>
        </div>
        <p className="text-muted small ms-4">Average: 8.15%</p>
      </li>

      <li className="list-item">
        <div className="d-flex">
          <div className="badge"></div>
          <span className="ms-4 fw-bold">Timeout: 0.12%</span>
        </div>
        <p className="text-muted small ms-4">Average: 0.11%</p>
      </li>
    </ul>
  );
};

export default Stats;
