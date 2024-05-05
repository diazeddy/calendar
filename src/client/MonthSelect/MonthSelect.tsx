import React from "react";
import './MonthSelect.css';

interface MonthSelectViewProps {
  year: number;
  month: number;
  handleClick: () => void;
  handleYear: (newYear: number) => void;
  handleMonth: (newMonth: number) => void;
}

const MonthSelectView: React.FC<MonthSelectViewProps> = ({
    year,
    month,
    handleClick,
    handleYear,
    handleMonth,
}) => {
    const goToPreviousMonth = () => {
        if (month === 0) {
            handleYear(year - 1);
            handleMonth(11);
        } else {
            handleMonth(month - 1);
        }
    };

    const goToNextMonth = () => {
        if (month === 11) {
            handleYear(year + 1);
            handleMonth(0);
        } else {
            handleMonth(month + 1);
        }
    };

    return (
        <div className="row-view">
            <div onClick={handleClick} style={{ cursor: "pointer" }}>
                {year}-{month + 1}
            </div>
            <div>
                <button onClick={goToPreviousMonth}>^</button>
                <span>&nbsp;</span>
                <button onClick={goToNextMonth}>v</button>
            </div>
        </div>
    );
};

export default MonthSelectView;
