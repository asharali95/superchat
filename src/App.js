import "./App.css";
import {auth} from "./Firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatPage from "./Components/ChatPage/ChatPage";
import SignInWithGoogle from "./Components/SignInWithGoogle/SignInWithGoogle";

function App() {
  const [user] = useAuthState(auth); 
  return (
    <div>
      {user ? <ChatPage/> : <SignInWithGoogle/>} 
    </div>
    );
}

export default App;
