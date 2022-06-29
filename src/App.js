import { ActiveTabProvider } from "./Store/Context/ActiveTabs";

// Import Components
import { Tab, Stats, ProgressStats, Status, DataList } from "./Components";

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
              <DataList
                p1="29 380 Yesterday"
                s1="27 985 Last friday"
                header1="Searches"
                rate={50}
                p2="You get 100% traffic on mobile and desktop devices."
                header2={["Mobile traffic: 100% ", "Web traffic: 100% "]}
              />

              <DataList
                header1="Clicks"
                header2="CTR: 0,04%"
                icon="bi bi-fingerprint"
                p1="243 Yesterday"
                s1="280 Last friday"
                rate="-13"
                p2="Conversion from searches  to clicks on all devices."
                small={`Help: CTR, Cliks`}
              />

              <DataList
                p1="24 Yesterday"
                s1="24 Last friday"
                header1="Salees"
                icon="bi bi-cart-fill"
                p2="Conversion from cliks  to bookings on all devices.."
                header2={["STR: 6.2% ", "Avg Check: 8903"]}
                small="Help: STR, Bookings, Avg. Check"
              />
            </ul>
          </div>
        </div>
      </ActiveTabProvider>
    </div>
  );
}

export default App;
