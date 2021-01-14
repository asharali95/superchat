import React from "react";
import firebase,{auth} from "./../../Firebase/firebase";

const SignInWithGoogle = () => {
  var signIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account",
    })
    auth.signInWithPopup(provider);
  };

  return (
    <div>
      <button className="sign-in" onClick={signIn}>Sign in with Google</button>
    </div>
  );
};

export default SignInWithGoogle;
