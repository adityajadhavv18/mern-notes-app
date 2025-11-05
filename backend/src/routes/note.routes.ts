import { Router } from "express";
import * as noteController from "../controllers/note.controller";

const router = Router();

router.get("/", noteController.getNotes);
router.post("/", noteController.createNote);
router.get("/:id", noteController.getNoteById);
router.delete("/:id", noteController.deleteNote);

export default router;
