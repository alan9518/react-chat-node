/* ==========================================================================
** Chat Message component 
** 28/01/2021
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
//  Imports
// --------------------------------------
    import React from 'react';
    import ReactEmoji from 'react-emoji';
    import './styles.message.css';

// --------------------------------------
// Create Component
// --------------------------------------
    const ChatMessage = ({message : {user, text}, name})=> {
        
        // ? set if the message shows as sned or as received
        const trimmedName = name.trim().toLowerCase();
        const isSentByCurrentUser =  user === trimmedName ? true : false;
        

        return (
            isSentByCurrentUser
            ? (
              <div className="messageContainer justifyEnd">
                <p className="sentText pr-10">{trimmedName}</p>
                <div className="messageBox backgroundBlue">
                  <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
                </div>
              </div>
              )
              : (
                <div className="messageContainer justifyStart">
                  <div className="messageBox backgroundLight">
                    <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
                  </div>
                  <p className="sentText pl-10 ">{user}</p>
                </div>
              )
            
        )
    }

// --------------------------------------
// Export Component
// --------------------------------------
    export default ChatMessage;