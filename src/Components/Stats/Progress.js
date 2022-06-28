import styles from "./Stats.module.css";

function Progress({ width, children, bg }) {
  return (
      <div className={styles.progress} style={{ width: width +"%", backgroundColor: bg }}>
        {children}
      </div>
  );
}

export default Progress;
