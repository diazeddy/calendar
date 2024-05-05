import express from 'express';
import { getNotes, saveNote, updateNote } from '../controllers/notesController';
import { RequestWithMonthParams, RequestWithNote } from '../types';

const router = express.Router();

router.get('/notes/:year/:month', (req: RequestWithMonthParams, res) => getNotes(req, res));
router.post('/notes', (req: RequestWithNote, res) => saveNote(req, res));
router.put('/notes', (req: RequestWithNote, res) => updateNote(req, res));

export default router;