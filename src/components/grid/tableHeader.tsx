import classNames from "classnames";
import { FC } from "react";

export interface TableHeaderProps {
  first?: boolean;
  header: string;
}

export const TableHeader: FC<TableHeaderProps> = ({ first, header }) => {
  return (
    <th
      scope="col"
      className={classNames(
        "whitespace-nowrap px-2 py-3.5 text-sm font-normal text-font uppercase",
        first ? "text-left" : "text-right"
      )}
    >
      {header}
    </th>
  );
};
