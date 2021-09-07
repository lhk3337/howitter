import React, { useState } from "react";
import AppRouter from "Components/Router";
import { authService } from "firebaseAPI";
import firebase from "firebase/app";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<firebase.User | null>(authService.currentUser);
  const time: number = new Date().getFullYear();

  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {time} Ho-witter</footer>
    </>
  );
}

export default App;
