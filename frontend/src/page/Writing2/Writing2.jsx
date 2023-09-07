import styles from "./style.css"
import { Progress } from "./components/Progress";
import { Q1 } from "./components/Q1";

export const Writing2 = () => {
  return (
    <div className={styles.root}>
      <Progress />
      <div className="box-container">

        <div className="box">
        <Q1 />

        </div>
        </div>
        </div>
  );
  };