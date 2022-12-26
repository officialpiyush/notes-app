import CreateNote from "./notes/CreateNote";

export default function Notes() {
  return (
    <div className="flex flex-col gap-4">
      <CreateNote />

      <hr className="border-stone-600" />
    </div>
  );
}
