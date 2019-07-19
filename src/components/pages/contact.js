import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contactImage from "../../../static/assets/images/auth/login.jpg";

export default function() {
    return (
        <div className="contact-page-wrapper">
            <div 
                className="contact-image"
                style={{
                    background: "url(" + contactImage + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />
            <div className="contact-information-wrapper">
                <div className="email contact-info">
                    <div className="icon">
                        <FontAwesomeIcon icon='inbox' />
                    </div>
                    whatsyourface@gmail.com
                </div>
                <div className="phone-number contact-info">
                    <div className="icon">
                        <FontAwesomeIcon icon='mobile-alt' />
                    </div>
                    444-444-4444
                </div>
                <div className="address contact-info">
                    <div className="icon">
                        <FontAwesomeIcon icon='directions' />
                    </div>
                    Anywhere, USA
                </div>
            </div>
        </div>
    )
}