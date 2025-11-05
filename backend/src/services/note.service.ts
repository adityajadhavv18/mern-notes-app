import * as noteRepo from "../repositories/note.repository";

export const createNote = async (title: string, content?: string) => {
  // simple validation at service level
  if (!title || title.trim().length === 0) {
    throw new Error("Title is required");
  }
  const note = await noteRepo.createNote({ title: title.trim(), content });
  return note;
};

export const listNotes = async () => {
  return await noteRepo.getAllNotes();
};

export const getNote = async (id: string) => {
  const note = await noteRepo.getNoteById(id);
  if (!note) throw new Error("Note not found");
  return note;
};

export const removeNote = async (id: string) => {
  const note = await noteRepo.deleteNoteById(id);
  if (!note) throw new Error("Note not found");
  return note;
};
