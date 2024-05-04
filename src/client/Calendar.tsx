import Reac, { useState } from 'react';
import CalendarHeader from './components/CalendarHeader';
import ContentView from './components/ContentView';

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

    return (
        <div className="calendar">
            <CalendarHeader currentDate={currentDate} />
            <ContentView 
                year={selectedYear}
                month={selectedMonth}
                holidays={[new Date()]}
                onDateClick={handleDateClick}
            />
        </div>
    );
}

export default Calendar;