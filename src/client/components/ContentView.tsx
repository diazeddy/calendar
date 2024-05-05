import React from 'react';
import { isSameMonth, isWeekend, isSameDay } from 'date-fns';

import './ContentView.css';

const ContentView: React.FC<{ year: number, month: number, holidays: Date[], notes: {[date: string]: string}, onDateClick: (date: Date) => void }> = ({ year, month, holidays, notes, onDateClick }) => {
    const renderDays = () => {
        const days = [];
        const firstDay = new Date(year, month, 1).getDay();
        const lastDayOfPrevMonth = new Date(year, month, 0).getDate();
        const lastDay = new Date(year, month + 1, 0).getDate();

        // Render days from previous month
        for (let i = firstDay - 1; i >= 0; i--) {
            const prevDate = lastDayOfPrevMonth - i;
            const currentDate = new Date(year, month - 1, prevDate);
            days.push(
                <div key={`inactive-${prevDate}`} className="inactive-day">
                    {prevDate}
                </div>
            );
        }

        for (let i = 1; i <= lastDay; i++) {
            const currentDate = new Date(year, month, i);
            const isHoliday = holidays.some(holiday => isSameDay(holiday, currentDate));
            const isActive = isSameMonth(currentDate, new Date(year, month));
            const isWeekendDay = isWeekend(currentDate);

            const note = notes[currentDate.toISOString().split('T')[0]];
            const hasNote = !!note;

            const dayClasses = `day ${isWeekendDay ? 'weekend' : ''} ${!isActive ? 'inactive' : ''} ${isHoliday ? 'holiday' : ''} ${hasNote ? 'with-note' : ''}`;
            days.push(
                <div key={`day-${i}`} className={dayClasses} onClick={() => isActive && onDateClick(currentDate)}>
                    {i}
                </div>
            );
        }

        // Render days from next month
        const lastDayOfMonth = new Date(year, month, lastDay).getDay();
        for (let i = 1; i < 14 - lastDayOfMonth; i++) {
            const nextDate = new Date(year, month + 1, i);
            days.push(
                <div key={`inactive-next-${i}`} className="inactive-day">
                    {i}
                </div>
            );
        }
        return days;
    };

    return (
        <div className="content-view">
            <div className="days">
            <div className="day">Sun</div>
            <div className="day">Mon</div>
            <div className="day">Tue</div>
            <div className="day">Wed</div>
            <div className="day">Thu</div>
            <div className="day">Fri</div>
            <div className="day">Sat</div>
            </div>
            <div className="dates">
                {renderDays()}
            </div>
        </div>
    );
};

export default ContentView;
