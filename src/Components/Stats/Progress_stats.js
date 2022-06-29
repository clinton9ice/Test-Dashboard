import { useEffect, useContext } from "react";
import Progress from "./Progress";
import { useActiveTab } from "../../Store/Context/ActiveTabs";
import MetricsContext from "../../Store/Context/Store";

export const ProgressStats = () => {
  const [isActiveTab] = useActiveTab();
  const { errors_last_3days, errors_last_hour, errors_yesterday } =
    useContext(MetricsContext);

  return (
    <div className="d-flex px-5 my-3 overflow-hidden">
      {isActiveTab.isActive === "Yesterday" &&
        (errors_yesterday.length > 0 ? (
          errors_yesterday.map((error, index) => {
            return (
              <Progress
                key={index}
                error={error}
                bg={
                  ((error.code === 500 || error.code === null) && "#e79939") ||
                  (error.code === 501 && "#e79939") ||
                  (error.code === 502 && "var(--bs-primary)") ||
                  (error.code === 599 && "#4857c5")
                }
                width={error.count > 1000 ? 100 : error.count / 10}
              />
            );
          })
        ) : (
          <Progress width={100} bg="var(--bs-success)" />
        ))}

      {(isActiveTab.isActive === "Today" ||
        isActiveTab.isActive === "Last hour") &&
        (errors_last_hour.length > 0 ? (
          errors_last_hour.map((error, index) => {
            return (
              <Progress
                key={index}
                error={error}
                bg={
                  ((error.code === 500 || error.code === null) && "#e79939") ||
                  (error.code === 501 && "#e79939") ||
                  (error.code === 502 && "var(--bs-primary)") ||
                  (error.code === 599 && "#4857c5")
                }
                width={error.count > 1000 ? 100 : error.count / 10}
              />
            );
          })
        ) : (
          <Progress width={100} bg="var(--bs-success)" />
        ))}

      {/* For Last three days */}
      {isActiveTab.isActive === "Last" &&
        (errors_last_3days.length > 0 ? (
          errors_last_3days.map((error, index) => {
            return (
              <Progress
                key={index}
                error={error}
                bg={
                  ((error.code === 500 || error.code === null) && "#e79939") ||
                  (error.code === 501 && "#e79939") ||
                  (error.code === 502 && "var(--bs-primary)") ||
                  (error.code === 599 && "#4857c5")
                }
                width={error.count > 1000 ? 100 : error.count / 10}
              />
            );
          })
        ) : (
          <Progress width={100} bg="var(--bs-success)" />
        ))}
    </div>
  );
};
