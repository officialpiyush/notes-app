import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";

interface GenerateInputProps {
  name: string;
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  type: string;
  className?: string;
  inputClassName?: string;
}

export default function GenerateInput({
  name,
  state,
  setState,
  type,
  className,
  inputClassName,
}: GenerateInputProps) {
  return (
    <div className={className}>
      <label className="label" htmlFor={name}>
        <span className="label-text uppercase">{name}</span>
        <span className="label-text-alt text-red-400 uppercase">Required</span>
      </label>
      <input
        id={name}
        value={state}
        onChange={(event) => setState(event.currentTarget.value)}
        type={type}
        placeholder="Type here"
        className={clsx(
          "input input-bordered w-full",
          inputClassName ?? "max-w-xs",
        )}
      />
    </div>
  );
}
