import React from 'react';
import { format, isSameMonth, isWeekend, isSameDay } from 'date-fns';

import './ContentView.css';

const ContentView: React.FC<{ year: number, month: number, holidays: Date[], onDateClick: (date: Date) => void }> = ({ year, month, holidays, onDateClick }) => {
    const totalDaysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const renderDays = () => {
        const days = [];
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="empty-day"></div>);
        }
        for (let i = 1; i <= totalDaysInMonth; i++) {
            const currentDate = new Date(year, month, i);
            const isHoliday = holidays.some(holiday => isSameDay(holiday, currentDate));
            const isActive = isSameMonth(currentDate, new Date(year, month));
            const isWeekendDay = isWeekend(currentDate);

            const dayClasses = `day ${isWeekendDay ? 'weekend' : ''} ${!isActive ? 'inactive' : ''} ${isHoliday ? 'holiday' : ''}`;
            
            days.push(
            <div key={`day-${i}`} className={dayClasses} onClick={() => isActive && onDateClick(currentDate)}>
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
