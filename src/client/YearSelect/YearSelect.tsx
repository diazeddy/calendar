import React from "react";

import './YearSelect.css';

interface YearSelectViewProps {
  year: number;
  handleClick: () => void;
  handleYear: (newYear: number) => void;
}

const YearSelectView: React.FC<YearSelectViewProps> = ({
    year,
    handleClick,
    handleYear,
}) => {
    const goToPreviousYear = () => {
        handleYear(year - 1);
    };

    const goToNextYear = () => {
        handleYear(year + 1);
    };

    return (
        <div className="row-view">
            <div onClick={handleClick} style={{ cursor: "pointer" }}>{year}</div>
            <div>
                <button onClick={goToPreviousYear}>^</button>
                <span>&nbsp;</span>
                <button onClick={goToNextYear}>v</button>
            </div>
        </div>
    );
};

export default YearSelectView;
