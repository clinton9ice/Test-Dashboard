import React from "react";
import { ActiveTabProvider } from "./Store/Context/ActiveTabs";

import { Tab, Stats, ProgressStats, Status } from "./Components";

function App() {
  return (
    <div className="container-fluid">
      <h3 className="title">Main Metrics</h3>
      <br />

      <ActiveTabProvider>
        <Tab />
        <br />
        <br />
        <Stats />
        <ProgressStats />
        <br />
        <Status />
        <br />
        <br />
        <br />

        <div className="container">
          <div className="data-container">
            <ul className="list">
              <li className="d-flex align-items-start">
                <div className="icon-badge"></div>

                <div className="description d-flex">
                  <div className="left_data_container">
                    <div>
                      Searches <sup className="badge bg-success">50%</sup>
                    </div>

                    <p>
                      29 380
                      <span className="text-muted">yesterday</span>
                    </p>

                    <div className="text-muted">
                      27985 <span>last friday</span>
                    </div>
                  </div>

                  <div className="right_data_container">
                    <p className="text-danger">CTR: 0,04%</p>
                    <p className="text-muted small">Conventous</p>
                    <p className="small">Help: CTK, CRS</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </ActiveTabProvider>
    </div>
  );
}

export default App;
