import { Request, Response } from "express";
import * as noteService from "../services/note.service";

export const createNote = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    const note = await noteService.createNote(title, content);
    res.status(201).json(note);
  } catch (err: any) {
    res.status(400).json({ message: err.message || "Bad Request" });
  }
};

export const getNotes = async (_req: Request, res: Response) => {
  try {
    const notes = await noteService.listNotes();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getNoteById = async (req: Request, res: Response) => {
  try {
    const note = await noteService.getNote(req.params.id);
    res.json(note);
  } catch (err: any) {
    res.status(404).json({ message: err.message || "Not Found" });
  }
};

export const deleteNote = async (req: Request, res: Response) => {
  try {
    await noteService.removeNote(req.params.id);
    res.status(204).send();
  } catch (err: any) {
    res.status(404).json({ message: err.message || "Not Found" });
  }
};
