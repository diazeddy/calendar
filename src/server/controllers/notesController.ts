import { Response, Request } from "express";
import { Note, RequestWithMonthParams, RequestWithNote } from "../types";

let notes: { [date: string]: string } = {};


export const getNotes = (req: RequestWithMonthParams, res: Response) => {
    const { year, month } = req.params;
    const startDate = new Date(parseInt(String(year)), parseInt(String(month)), 1);
    const endDate = new Date(parseInt(String(year)), parseInt(String(month)) + 1, 0);

    const notesForMonth: Note[] = Object.entries(notes)
        .filter(([date]) => {
        const currentDate = new Date(date);
        return currentDate >= startDate && currentDate <= endDate;
        })
        .map(([date, note]) => ({ date, note }));

    res.json(notesForMonth);
};
  
export const saveNote = (req: RequestWithNote, res: Response) => {
    const { date, note } = req.body;
    notes[date] = note;
    res.status(201).json({ message: 'Note saved successfully' });
};

export const updateNote = (req: RequestWithNote, res: Response) => {
    const { date, note } = req.body;
    notes[date] = note;
    res.status(200).json({ message: 'Note updated successfully' });
}