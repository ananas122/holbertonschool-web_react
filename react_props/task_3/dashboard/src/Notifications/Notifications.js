import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

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
            <p>
                Here is the list of notifications
            </p>
            <ul>
                <NotificationItem
                    type="default"
                    value="New course available"
                />
                <NotificationItem
                    type="urgent"
                    value="New resume available"
                />
                <NotificationItem
                    type="urgent"
                    html={{ __html: getLatestNotification() }}
                />
            </ul>
        </div>
    );
};

export default Notifications;