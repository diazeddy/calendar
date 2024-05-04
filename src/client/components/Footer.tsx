import React from 'react';

import "./Footer.css";

const Footer: React.FC<{ onExportNotes: () => void }> = ({ onExportNotes }) => {
    return (
        <div className="footer">
            <button onClick={onExportNotes}>Export Notes</button>
        </div>
    );
};

export default Footer;
