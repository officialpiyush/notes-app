import clsx from "clsx";
import { useState } from "react";
import { CombinedError, useMutation } from "urql";
import DELETE_NOTE from "../../utils/graphql/delete";

interface NoteCardProps {
  id: string;
  title: string;
}

export default function NoteCard({ id, title }: NoteCardProps) {
  const [insertError, setInsertError] = useState<CombinedError | null>(null);
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [{ fetching }, deleteNote] = useMutation(DELETE_NOTE);

  const onDeleteNote = async () => {
    setInsertError(null);

    const { error } = await deleteNote({
      id,
    });

    if (error) {
      setInsertError(error);
    }
  };

  return (
    <div className="flex flex-col gap-2">
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

      <div className="border border-slate-700 bg-slate-800 px-4 py-2 w-full flex justify-between items-center">
        <span>{title}</span>

        <div className="flex items-center justify-center">
          <button onClick={onDeleteNote} type="button">
            <svg
              className="h-5 w-5 fill-current text-red-600 hover:text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M7 6V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5zm6.414 8l1.768-1.768-1.414-1.414L12 12.586l-1.768-1.768-1.414 1.414L10.586 14l-1.768 1.768 1.414 1.414L12 15.414l1.768 1.768 1.414-1.414L13.414 14zM9 4v2h6V4H9z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
