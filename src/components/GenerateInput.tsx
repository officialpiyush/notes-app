import { Dispatch, SetStateAction } from "react";

interface GenerateInputProps {
  name: string;
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  type: string;
}

export default function GenerateInput({
  name,
  state,
  setState,
  type,
}: GenerateInputProps) {
  return (
    <div>
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
        className="input input-bordered w-full max-w-xs"
      />
    </div>
  );
}
