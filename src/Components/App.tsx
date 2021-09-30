import React, { useState, useEffect } from "react";
import AppRouter from "Components/Router";
import { authService } from "firebaseAPI";
import GlobalStyle from "styles/global-styles";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";

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
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {!init ? (
          "loading...."
        ) : (
          <AppRouter refreshUser={refreshUser} isLoggedIn={Boolean(userObj)} userObj={userObj} />
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
