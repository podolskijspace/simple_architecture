import { Fragment } from "react";
import styles from "./Loading.module.css";
import classNames from "classnames";

export const Loading = () => {
  return (
    <Fragment>
      <p className={styles.srOnly} role="status">
        Loading search results
      </p>
      <div className={styles.grid} aria-hidden="true">
        {Array.from({ length: 8 }, (_, index) => (
          <div key={index} className={styles.movie}>
            <div className={classNames(styles.poster, styles.skeleton)} />
            <div className={styles.movieBody}>
              <div className={classNames(styles.skeleton, styles.skeletonTitle)} />
              <div className={classNames(styles.skeleton, styles.skeletonMeta)} />
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
