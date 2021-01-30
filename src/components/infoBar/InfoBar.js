/* ==========================================================================
** Chat Info Bar Component
** 29/01/2021
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Imports
// --------------------------------------   
    import React from 'react';
    import onlineIcon from '../../icons/onlineIcon.png';
    import closeIcon from '../../icons/closeIcon.png';
    import './styles.css';

// --------------------------------------
// Create Component
// --------------------------------------
    const InfoBar = ({room})=> {

        return(
            <div className="infoBarContainer">
                <div className="leftContainer">
                    <img src={onlineIcon} alt="Status" className="onlineIcon"/>
                    <h3> {room && room} </h3>
                </div>
                <div className="rightContainer">
                    <a href="/"> <img src={closeIcon} alt=""/> </a>
                </div>
            </div>
        )
    }

// --------------------------------------
// Export
// --------------------------------------       
    export default InfoBar;