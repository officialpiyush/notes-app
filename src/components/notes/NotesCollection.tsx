import { useQuery } from "urql";
import GET_NOTES from "../../utils/graphql/get";
import NoteCard from "./NoteCard";

export default function NotesCollection() {
  const [{ data, fetching }] = useQuery({
    query: GET_NOTES,
  });

  if (fetching) {
    return <div>Loading...</div>;
  }

  if (data && data.notes && data.notes.length > 0) {
    return (
      <div className="flex flex-col gap-2">
        {data.notes.map((d: any) => (
          <NoteCard key={d.id} title={d.title} id={d.id} />
        ))}
      </div>
    );
  }
  return <div>You have no notes yet!</div>;
}
