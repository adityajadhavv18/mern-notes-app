import React, { useEffect } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import { useAppDispatch } from "./hooks";
import { loadNotes } from "./store/notesSlice";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadNotes());
  }, [dispatch]);

  return (
    <div style={{ maxWidth: 800, margin: "2rem auto", padding: "1rem" }}>
      <h1>MERN Notes (TypeScript)</h1>
      <NoteForm />
      <hr />
      <NoteList />
    </div>
  );
};

export default App;
