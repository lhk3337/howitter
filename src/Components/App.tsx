import React, { useState, useEffect } from "react";
import AppRouter from "Components/Router";
import { authService } from "firebaseAPI";

function App() {
  const [init, setInit] = useState<boolean>(false);
  const [userObj, setUserObj] = useState<null | Object>(null);

  useEffect(() => {
    authService.onAuthStateChanged((user: any) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args: any) => user.updateProfile(args),
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    const user = authService.currentUser as any;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args: any) => user.updateProfile(args),
    });
  };

  return (
    <>
      {!init ? "loading...." : <AppRouter refreshUser={refreshUser} isLoggedIn={Boolean(userObj)} userObj={userObj} />}
    </>
  );
}

export default App;
