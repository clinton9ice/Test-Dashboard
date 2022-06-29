import { useContext, useState, useEffect } from "react";
import { useActiveTab } from "../../Store/Context/ActiveTabs";
import MetricsContext from "../../Store/Context/Store";

export const Stats = () => {
  const [isActiveTab, dispatcher] = useActiveTab();
  const { errors_last_3days, errors_last_hour, errors_yesterday } =
    useContext(MetricsContext);
  const [avgCount, setAvgCount] = useState(0);

  // useEffect(() => {
  //   if (
  //     isActiveTab.isActive === "Today" ||
  //     isActiveTab.isActive === "Last hour"
  //   ) {
  //     if (errors_last_hour.length > 0) {
  //       setAvgCount(
  //         errors_last_hour.reduce((acc, curr) => {
  //           return acc + curr.count;
  //         }, 0) / errors_last_hour.length
  //       );
  //     }
  //   }

  //   if (isActiveTab.isActive === "Yester") {
  //     if (errors_yesterday.length > 0) {
  //       setAvgCount(
  //         errors_yesterday.reduce((acc, curr) => {
  //           return acc + curr.count;
  //         }, 0) / errors_yesterday.length
  //       );
  //       console.log(errors_yesterday);
  //     }
  //   }
  // }, [isActiveTab.isActive, errors_last_hour, errors_yesterday]);

  return (
    <ul className="list d-flex  justify-content-around stats_container">
      <li className="list-item">
        <div className="d-flex">
          <div className="badge"></div>

          <span className="ms-4 fw-bold"> Error 0.12%</span>
        </div>
        <p className="text-muted small ms-4">Average: {avgCount}%</p>
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
