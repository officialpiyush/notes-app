import clsx from "clsx";
import { useState } from "react";
import { CombinedError, useMutation } from "urql";
import INSERT_NOTE from "../../utils/graphql/insert";
import GenerateInput from "../GenerateInput";

export default function CreateNote() {
  const [note, setNote] = useState("");
  const [insertError, setInsertError] = useState<CombinedError | null>(null);
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [{ fetching }, insertNote] = useMutation(INSERT_NOTE);

  const addNote = async () => {
    if (!note) return;
    setInsertError(null);

    const { error } = await insertNote({
      note: {
        title: note,
      },
    });

    if (error) {
      setInsertError(error);
    } else {
      setNote("");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className={clsx(insertError ? "block" : "hidden")}>
        <div className="w-full alert alert-error shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{insertError?.message}</span>
          </div>
        </div>
      </div>
      <div className="w-full flex items-end gap-4">
        <GenerateInput
          className="w-full"
          inputClassName="w-full"
          name="New Note"
          state={note}
          setState={setNote}
          type="text"
        />
        <button onClick={addNote} className="btn btn-primary" type="button">
          Create
        </button>
      </div>
    </div>
  );
}
