import React from "react";
import firebase,{auth} from "./../../Firebase/firebase";

const SignInWithGoogle = () => {
  var signIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  var signOut = () => {
    return (
      auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign Out</button>
      )
    );
  };
  return (
    <div>
      <button onClick={signIn}>Sign in with Google</button>
    </div>
  );
};

export default SignInWithGoogle;
