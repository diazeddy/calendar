import Reac, { useState } from 'react';
import CalendarHeader from './components/CalendarHeader';
import ContentView from './components/ContentView';
import MonthSelectView from './components/MonthSelectView';
import YearSelectView from './components/YearSelectView';
import Footer from './components/Footer';

import { holidayArray } from './constants';

const Calendar: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
    const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());
    // State for storing notes
    const [notes, setNotes] = useState<{ [date: string]: string }>({});

    const handleDateClick = (date: Date) => {
        const dateString = date.toISOString().split('T')[0];
        const newNotes = { ...notes };
        if (!newNotes[dateString]) {
            const newNote = prompt('Enter note for ' + dateString + ':');
            if (newNote !== null) {
                newNotes[dateString] = newNote;
            }
        } else {
            const editNote = prompt('Edit note for ' + dateString + ':', newNotes[dateString]);
            if (editNote === "") {
                delete newNotes[dateString];
            } else if (editNote !== null) {
                newNotes[dateString] = editNote;
            }
        }
        setNotes(newNotes);
    }

    const handleExportNotes = () => {
        const notesToExport = Object.entries(notes).map(([date, note]) => ({ date, note }));
        const json = JSON.stringify(notesToExport, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'calendar_notes.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);     
    }

    return (
        <div className="calendar">
            <CalendarHeader currentDate={currentDate} />
            <div className='controls'>
                <MonthSelectView selectedMonth={selectedMonth} onChange={setSelectedMonth} />
                <YearSelectView selectedYear={selectedYear} onChange={setSelectedYear} />
            </div>
            <ContentView 
                year={selectedYear}
                month={selectedMonth}
                holidays={holidayArray}
                onDateClick={handleDateClick}
            />
            <Footer onExportNotes={handleExportNotes} />
        </div>
    );
}

export default Calendar;