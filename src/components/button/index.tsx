import { FC } from "react";

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      type="button"
      className="rounded bg-primary px-2 py-1 text-xs font-semibold text-font shadow-sm hover:bg-on-primary uppercase m-1"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
