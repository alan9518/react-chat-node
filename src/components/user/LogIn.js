/* ==========================================================================
** Login component with Firebase
** 28/01/2021
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
//  Imports
// --------------------------------------
    import React, {useState} from 'react';
    import {Link} from 'react-router-dom';
    import './styles.css';

// --------------------------------------
// Create Component
// --------------------------------------
    const Login = ()=> {

        const [name, setName] =  useState('');
        const [room, setRoom] = useState('');

        return (
            <div className = "logInContainer">
                <div className="controlsContainer">
                    <h1 className="heading">Join</h1>
                    <div><input type="text" placeholder="Name" className = "logInput" onChange={(event) => setName(event.target.value)}/></div>
                    <div><input type="text" placeholder="Room" className = "logInput mt-20"  onChange= {(event)=>setRoom(event.target.value)}/></div>
                    <Link to = {`/chat?name=${name}&room=${room}`} onClick= {(event)=> (!name || !room) ? event.preventDefault() : null}> <button className = "loginButton mt-20">Sign In</button> </Link>
                </div>
            </div>
            
        )
    }

// --------------------------------------
// Export Component
// --------------------------------------
    export default Login;