import { ChangeEventHandler, FC, HTMLInputTypeAttribute } from "react";

export interface InputProps {
  name: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  value: string | number;
}

export const Input: FC<InputProps> = ({
  name,
  onChange,
  placeholder,
  type,
  value,
}) => {
  return (
    <div className="relative">
      <input
        className="block w-full rounded-md px-2 border-0 text-font bg-surface shadow-sm ring-1 ring-inset ring-font placeholder:text-gray-400 sm:text-sm sm:leading-6"
        id={name}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value !== 0 ? value : ""}
      />
      <span className="text-font text-sm pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
        USD
      </span>
    </div>
  );
};
