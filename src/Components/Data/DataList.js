import Style from "./Data.module.css";

export const DataList = ({
  icon,
  type,
  header1,
  header2,
  badgeBg,
  rate,
  p1,
  p2,
  small,
  s1,
}) => {
  return (
    <li className="d-flex align-items-start flex-wrap my-4">
      <div className="left_data_container d-flex flex-wrap me-5">
        <div className={Style.dataBadge}>
          <i className={icon || "bi bi-funnel-fill"}></i>
          <div className={Style.stateContainer}>
            <span
              className={Style.state}
              style={{
                backgroundColor: Math.ceil(rate) < 1 ? " var(--bs-danger)" : "var(--bs-success)",
              }}
            ></span>
          </div>
        </div>

        <div className="ms-3">
          <h5 className={Math.ceil(rate) < 1 ? " text-danger " : ""}>
            {header1 || "Searches"}
            {rate && (
              <sup
                className={
                  Math.ceil(rate) < 1
                    ? "badge bg-danger small ms-2"
                    : "badge bg-success small ms-2"
                }
                style={{ backgroundColor: badgeBg }}
              >
                {rate}%
              </sup>
            )}
          </h5>

          {Array.isArray(p1) ? (
            p1.map((p) => (
              <p className="text-muted small" key={p}>
                {p}
              </p>
            ))
          ) : (
            <h4 className="text-muted small " style={{ fontSize: "1.2em" }}>
              {p1}
            </h4>
          )}

          {s1 && (
            <p className="text-muted" style={{ fontSize: "1.2em" }}>
              {s1}
            </p>
          )}
        </div>
      </div>

      <div className="right_data_container ms-5">
        {Array.isArray(header2) ? (
          header2.map((h) => (
            <h5 className="text" key={h}>
              {h}
            </h5>
          ))
        ) : (
          <h5 className={Math.ceil(rate) < 1 ? " text-danger " : ""}>
            {header2}
          </h5>
        )}

        {Array.isArray(p2) ? (
          p2.map((p) => (
            <p className="text-muted small" key={p}>
              {p}
            </p>
          ))
        ) : (
          <p className="text-muted small">{p2}</p>
        )}

        {small && (
          <p className="small">
            {small.split(":").length > 0 ? (
              <>
                {small.split(":")[0]} :
                <span className="text-primary">{small.split(":")[1]}</span>
              </>
            ) : (
              small
            )}
          </p>
        )}
      </div>
    </li>
  );
};

export default DataList;
