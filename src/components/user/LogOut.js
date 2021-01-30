/* ==========================================================================
** LogOut component with Firebase
** 28/01/2021
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
//  Imports
// --------------------------------------
import React from 'react';
import 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';

// --------------------------------------
// Create Component
// --------------------------------------
const LogOut = ({auth})=> {

    return (
        <div>
            <button onClick = {()=> auth.signOut()}> Sign Out </button>
            
        </div>
        
    )
}

// --------------------------------------
// Export Component
// --------------------------------------
export default LogOut;