import { Schema, model, Document } from "mongoose";
export interface INote extends Document {
  title: string;
  content?: string;
  createdAt: Date;
}

const NoteSchema = new Schema<INote>(
  {
    title: { type: String, required: true },
    content: { type: String },
  },
  { timestamps: true }
);

export const NoteModel = model<INote>("Note", NoteSchema);
