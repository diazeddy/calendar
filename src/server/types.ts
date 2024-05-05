import { Request } from "express";

export interface Note {
    date: string;
    note: string;
}

export interface MonthParams {
    year: number;
    month: number;
}

export interface RequestWithMonthParams {
    params: MonthParams;
}

export interface RequestWithNote extends Request {
    body: Note;
}