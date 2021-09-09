import React, { useState, useEffect } from "react";
import AppRouter from "Components/Router";
import { authService } from "firebaseAPI";

function App() {
  const [init, setInit] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const time: number = new Date().getFullYear();

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {!init ? "loading...." : <AppRouter isLoggedIn={isLoggedIn} />}
      <footer>&copy; {time} Ho-witter</footer>
    </>
  );
}

export default App;
