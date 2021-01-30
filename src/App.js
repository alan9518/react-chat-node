/* ==========================================================================
** React Firebase Chat
** 28/01/2021
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Imports
// --------------------------------------
  import {BrowserRouter as Router, Route} from 'react-router-dom';  

  import Login from './components/user/LogIn';
  
  import ChatRoom from './components/chat/ChatRoom';
  
  import './App.css';


  

// --------------------------------------
// Create Commponent
// --------------------------------------
const App = () => {


  // ?--------------------------------------
  // ? Render App
  // ?--------------------------------------
  return  (
    <Router>
      <Route path = "/" component = {Login} exact/>
      <Route path = "/chat" component = {ChatRoom}/>
    </Router>
  )

}


// --------------------------------------
// Export App
// --------------------------------------
export default App;
