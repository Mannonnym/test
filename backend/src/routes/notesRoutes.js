import express from "express";
const router =express.Router();
import { getNote } from "../contolers/notesControler";
import { createNote } from "../contolers/notesControler";
import { updateNote } from "../contolers/notesControler";
import { deleteNote } from "../contolers/notesControler";

router.get("/",getNote);
router.post("/",createNote);
router.put("/:id",updateNote);
router.delete("/:id",deleteNote);
export default router;