import React from "react";
import { auth } from "../../Firebase/firebase";

const Signout = () => {

  var signOut = () => {
    return (
      auth.currentUser && (
        <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
      )
    );
  };
  return signOut()
};

export default Signout;
