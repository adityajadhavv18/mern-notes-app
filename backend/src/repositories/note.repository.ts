import { NoteModel, INote } from "../models/note.models";
import { Types } from "mongoose";
export const createNote = async (payload: {
  title: string;
  content?: string;
}) => {
  const note = await NoteModel.create(payload);
  return note.toObject();
};

export const getAllNotes = async () => {
  const notes = await NoteModel.find().sort({ createdAt: -1 }).lean();
  return notes;
};

export const getNoteById = async (id: string) => {
  if (!Types.ObjectId.isValid(id)) return null;
  const note = await NoteModel.findById(id).lean();
  return note;
};

export const deleteNoteById = async (id: string) => {
  if (!Types.ObjectId.isValid(id)) return null;
  const res = await NoteModel.findByIdAndDelete(id).lean();
  return res;
};
