import React, { useState, useEffect } from "react";
import AppRouter from "Components/Router";
import { authService } from "firebaseAPI";

function App() {
  const [init, setInit] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userObj, setUserObj] = useState<null>(null);
  const time: number = new Date().getFullYear();

  useEffect(() => {
    authService.onAuthStateChanged((user: any) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {!init ? "loading...." : <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} />}
      <footer>&copy; {time} Ho-witter</footer>
    </>
  );
}

export default App;
