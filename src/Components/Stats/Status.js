import { Tags } from "./Tags";
import styles from "./Tag.module.css"

export const Status = () => {
    return (
      <div className={styles.tagsContainer}>
        <Tags bg="#e79939">Error 500: 51256</Tags>
        <Tags bg="var(--purple)">Error 501: 800</Tags>
        <Tags bg="var(--bs-primary)">Error 502: 650</Tags>
        <Tags>Other: 330</Tags>
      </div>
    );
}
