import { FC } from "react";
import classNames from "classnames";

export interface UsdChangeProps {
  value: number;
}

export const UsdChange: FC<UsdChangeProps> = ({ value }) => {
  return (
    <span className={classNames(value >= 0 ? "text-success" : "text-error")}>
      {value.toFixed(2)} %
    </span>
  );
};
