import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <a className={styles.brand} href="/">
        credits<span className={styles.brandDot}>✳</span>
      </a>
      <span className={styles.tagline}>Every story has a beginning</span>
    </header>
  );
};
