// routes/exportRoutes.ts
import express from 'express';
import { getNotes } from '../controllers/notesController';
import { RequestWithMonthParams } from '../types';
import fs from 'fs';

const router = express.Router();

router.get('/export/:year/:month', async (req: RequestWithMonthParams, res) => {
    const { year, month } = req.params;
    const notes = await getNotes(req, res);
    const filename = `notes_${year}_${month}.json`;

    fs.writeFile(filename, JSON.stringify(notes), (err) => {
        if (err) {
            console.error('Error exporting notes', err);
            res.status(500).json({ error: 'Error exporting notes' });
        } else {
            res.download(filename);
        }
    });
});

export default router;
