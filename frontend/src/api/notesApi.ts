import axios from "axios";
import { type Note } from "../types/note";

const api = axios.create({
  baseURL: "/api", // Vite will proxy this to http://localhost:5000/api
  headers: { "Content-Type": "application/json" },
});

export const fetchNotes = async (): Promise<Note[]> => {
  const res = await api.get<Note[]>("/notes");
  return res.data;
};

export const createNote = async (payload: {
  title: string;
  content?: string;
}): Promise<Note> => {
  const res = await api.post<Note>("/notes", payload);
  return res.data;
};

export const deleteNote = async (id: string): Promise<void> => {
  await api.delete(`/notes/${id}`);
};
