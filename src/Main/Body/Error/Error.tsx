import { Button } from "@/components/Button/Button.tsx";
import styles from "./Error.module.css";
import type { DispatchWithoutAction } from "react";

interface Props {
  onRetry: DispatchWithoutAction;
}
export const Error = ({ onRetry }: Props) => {
  return (
    <div className={styles.message} role="alert">
      <h3>Looks like the show was interrupted</h3>
      <p>We couldn’t load the results. Check your connection and try again.</p>
      <Button className={styles.retry} onClick={onRetry}>
        Try again
      </Button>
    </div>
  );
};
