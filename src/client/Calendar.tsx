import { useState, useEffect } from 'react';
import CalendarHeader from './components/CalendarHeader';
import ContentView from './components/ContentView';
import Footer from './components/Footer';
import MonthSelect from './MonthSelect/MonthSelect';
import YearSelect from './YearSelect/YearSelect';
import MonthGrid from './MonthGrid/MonthGrid';
import YearGrid from './YearGrid/YearGrid';

import axios from 'axios';

import { fetchUSHolidays } from './api';

interface ItemProps {
    date: string;
    note: string;
}

const Calendar: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
    const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());
    
    // State for storing notes
    const [notes, setNotes] = useState<{ [date: string]: string }>({});
    
    // Conversion Option
    const [viewOption, setViewOption] = useState<number>(0);

    // US Holiday
    const [holidays, setHolidays] = useState<Date[]>([]);

    useEffect(() => {
        fetchNotes();
    }, [selectedMonth, selectedYear]);

    const fetchNotes = async () => {
        try {
            const response = await axios.get(`/api/notes/${selectedYear}/${selectedMonth}`);
            const transformedData: {[key: string]: string} = {};
            response.data.forEach((item: ItemProps) => {
                transformedData[item.date] = item.note;
            })
            setNotes(transformedData);
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    };

    const handleDateClick = async (date: Date) => {
        const dateString = date.toISOString().split('T')[0];
        const newNotes = { ...notes };
        const existingNote = newNotes[dateString] || '';
        const promptMessage = existingNote ? 'Edit note for ' + dateString + ':' : 'Enter note for ' + dateString + ':';
        let newNote = prompt(promptMessage, existingNote);

        if (!newNotes[dateString]) {
            if (newNote !== null) {
                newNotes[dateString] = newNote;
            }
        } else {
            if (newNote === "") {
                delete newNotes[dateString];
            } else if (newNote !== null) {
                newNotes[dateString] = newNote;
            }
        }

        if (newNote !== null) {
            try {
                if (newNote === '') {
                    await axios.delete(`/api/notes/${dateString}`);
                } else {
                    const method = existingNote ? 'put' : 'post';
                    await axios[method]('/api/notes', { date: dateString, note: newNote });
                }
                await fetchNotes();
            } catch (error) {
                console.error('Error saving note:', error);
            }
        }

        setNotes(newNotes);
    }

    const handleExportNotes = async () => {
        try {
            const response = await axios.get(`/api/export/${selectedYear}/${selectedMonth}`, { responseType: 'blob' });
            const blob = new Blob([response.data], { type: 'application/json' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `notes_${selectedYear}_${selectedMonth}.json`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (error) {
            console.error('Error exporting notes:', error);
        }        
    }

    const updateYear = (newYear: number) => {
        setSelectedYear(newYear);
    }

    const updateMonth = (newMonth: number) => {
        setSelectedMonth(newMonth);
    }

    useEffect(() => {
        const updateHolidays = async () => {
            const newHolidays = await fetchUSHolidays(selectedYear);
            setHolidays(newHolidays);
        };
        updateHolidays();
    }, [selectedYear])

    const handleMonthClick = (newMonth: number) => {
        setSelectedMonth(newMonth);
        setViewOption(0); // Go back to DateView
    }

    const handleYearClick = (newYear: number) => {
        setSelectedYear(newYear);
        setViewOption(1); // Go back to MonthlyView
    }

    const changeViewOption = () => {
        if (viewOption === 0) {
            setViewOption(1);  // From DateView to MonthlyView
        } else if (viewOption === 1) {
            setViewOption(2); // From MonthlyView to YearlyView
        }
    }

    const resetOptions = () => {
        setViewOption(0);
        const d = new Date();
        updateYear(d.getFullYear());
        updateMonth(d.getMonth());
    }

    return (
        <div className="calendar">
            <CalendarHeader currentDate={currentDate} handleClick={() => resetOptions()} />
            {viewOption === 0 ? (
                <MonthSelect
                    year={selectedYear}
                    month={selectedMonth}
                    handleClick={changeViewOption}
                    handleYear={updateYear}
                    handleMonth={updateMonth}
                />
            ) : viewOption === 1 ? (
                <YearSelect
                    year={selectedYear}
                    handleClick={changeViewOption}
                    handleYear={updateYear}
                />
            ) : (
                <p>1970-2050</p>
            )}
            { viewOption === 0 ? (
            <ContentView 
                year={selectedYear}
                month={selectedMonth}
                holidays={holidays}
                notes={notes}
                onDateClick={handleDateClick}
            />) : viewOption === 1 ? (
                <MonthGrid handleClick={handleMonthClick} />
            ) : (
                <YearGrid handleClick={handleYearClick} />
            )}
            <Footer onExportNotes={handleExportNotes} />
        </div>
    );
}

export default Calendar;