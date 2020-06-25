import React from 'react';

import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src="https://static.vecteezy.com/system/resources/previews/000/518/198/non_2x/woman-working-with-computer-bright-colorful-vector-illustration.jpg"
                className="avatar"
                alt="avatar"
            />
            <h2 className="main-name">Bhakti Patil</h2>
            <p className="subtitle">"Love learninig new things"</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
            </div>
        </div>
    );
};