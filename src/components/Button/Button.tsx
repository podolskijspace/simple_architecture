import { Button as BaseButton } from "@base-ui/react/button";
import styles from "./Button.module.css";
import classNames from "classnames";

type ButtonProps = Omit<BaseButton.Props, "className"> & {
  className?: string;
};

export const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <BaseButton
      {...props}
      className={classNames(styles.button, className)}
    />
  );
};
