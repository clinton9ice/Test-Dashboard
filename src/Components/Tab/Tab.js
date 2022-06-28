import { useActiveTab } from "../../Store/Context/ActiveTabs";
import styles from "./Tabs.module.css";
import { Button } from "react-bootstrap";

export function Tab() {
  const [isActiveTab, dispatcher] = useActiveTab();

  return (
    <ul className={styles.tab_container}>
      <li className={styles.listItem}>
        <Button
          type="button"
          className={
            isActiveTab.isActive === "Last hour" ? styles.active : styles.btn
          }
          onClick={() => dispatcher("LAST_HOUR")}
        >
          Last hour
        </Button>
      </li>

      <li className={styles.listItem}>
        <Button
          type="button"
          className={
            isActiveTab.isActive === "Today" ? styles.active : styles.btn
          }
          onClick={() => dispatcher("TODAY")}
        >
          Today
        </Button>
      </li>

      <li className={styles.listItem}>
        <Button
          type="button"
          onClick={() => dispatcher("YESTERDAY")}
          className={
            isActiveTab.isActive === "Yesterday"
              ? styles.active
              : styles.btn
          }
        >
          Yesterday
        </Button>
      </li>

      <li className={styles.listItem}>
        <Button
          type="button"
          onClick={() => dispatcher("LAST")}
          className={
            isActiveTab.isActive === "Last" ? styles.active : styles.btn
          }
        >
          Last 3 days
        </Button>
      </li>
    </ul>
  );
}
