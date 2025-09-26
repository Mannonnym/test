import express from "express";
const router =express.Router();
import { getNote } from "../contolers/notesControler.js";
import { createNote } from "../contolers/notesControler.js";
import { updateNote } from "../contolers/notesControler.js";
import { deleteNote } from "../contolers/notesControler.js";
import { getNoteById }from "../contolers/notesControler.js";

router.get("/",getNote);
router.get("/:id",getNoteById);
router.post("/",createNote);
router.put("/:id",updateNote);
router.delete("/:id",deleteNote);
export default router;