import { Fragment } from "react";
import styles from "./Loading.module.css";

export const Loading = () => {
  return (
    <Fragment>
      <p className={styles.srOnly} role="status">
        Loading search results
      </p>
      <div className={styles.grid} aria-hidden="true">
        {Array.from({ length: 8 }, (_, index) => (
          <div key={index} className={styles.movie}>
            <div className={`${styles.poster} ${styles.skeleton}`} />
            <div className={styles.movieBody}>
              <div className={`${styles.skeleton} ${styles.skeletonTitle}`} />
              <div className={`${styles.skeleton} ${styles.skeletonMeta}`} />
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
