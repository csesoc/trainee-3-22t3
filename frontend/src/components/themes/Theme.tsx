import "./Theme.css";
import FontItem from "./FontItem";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMoon,
    faStar,
  } from "@fortawesome/free-regular-svg-icons"

const Theme = () => {
    const [mode, setMode] = useState('light');
    useEffect(() => {
        const root = document.querySelector<HTMLElement>(':root');
        if (root) {
            root.style.colorScheme = mode; 
        }
    }, [mode]);
    return (
        <div className="theme-container">
            <div className="font">
                <h1>Font</h1>
                <div className="font-items">
                    <FontItem fontFamily="Arial" />
                    <FontItem fontFamily="serif" />
                    <FontItem fontFamily="monospace" />
                </div>
            </div>
            <div className="theme">
                <h1>Themes</h1>
                <div className="theme-items">
                    <div className="theme-item" onClick={() => setMode('dark')}>
                        <FontAwesomeIcon icon={faMoon} />
                        <p>Dark Mode</p>
                    </div>
                    <div className="theme-item" onClick={() => setMode('light')}>
                        <FontAwesomeIcon icon={faStar} />
                        <p>Light Mode</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Theme;