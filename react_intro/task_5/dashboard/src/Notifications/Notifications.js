import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import closeIcon from "../assets/close-icon.png";

const Notifications = () => {
    // Fonction gestionnaire de clics
    const handleCloseClick = () => {
        console.log("Close button has been clicked");
    };
    return (
        <div className="Notifications">
            <button
                style={{
                    position: "absolute",
                    right: '20px',
                    top: '20px',
                    background: 'transparent',
                    border: 'none',
                    height: '20px',
                    width: '20px',
                }}
                aria-label="Close"
                onClick={handleCloseClick}
            >
                <img src={closeIcon} alt="close-icon" style={{ height: '100%', width: '100%' }} />
            </button>

            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
        </div>
    );
};

export default Notifications;