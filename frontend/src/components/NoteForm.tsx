import React, { useState } from "react";
import { useAppDispatch } from "../hooks";
import { addNote } from "../store/notesSlice";

const NoteForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return alert("Title required");
    try {
      await dispatch(addNote({ title: title.trim(), content })).unwrap();
      setTitle("");
      setContent("");
    } catch (err) {
      console.error("Failed to add note", err);
      alert("Failed to add note");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Title</label>
        <br />
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div style={{ marginTop: 8 }}>
        <label>Content</label>
        <br />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div style={{ marginTop: 8 }}>
        <button type="submit">Add Note</button>
      </div>
    </form>
  );
};

export default NoteForm;
