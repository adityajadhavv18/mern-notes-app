import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { removeNote } from "../store/notesSlice";

const NoteList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, loading } = useAppSelector((s) => s.notes);

  const onDelete = async (id: string) => {
    if (!confirm("Delete this note?")) return;
    try {
      await dispatch(removeNote(id)).unwrap();
    } catch (err) {
      console.error("Delete failed", err);
      alert("Failed to delete");
    }
  };

  if (loading) return <div>Loading notes...</div>;
  if (items.length === 0) return <div>No notes yet.</div>;

  return (
    <ul>
      {items.map((note) => (
        <li key={note._id} style={{ marginBottom: 12 }}>
          <strong>{note.title}</strong>
          <div>{note.content}</div>
          <small>{new Date(note.createdAt).toLocaleString()}</small>
          <div>
            <button onClick={() => onDelete(note._id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
