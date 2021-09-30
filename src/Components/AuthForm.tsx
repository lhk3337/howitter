import React, { useState } from "react";
import { authService } from "firebaseAPI";
import { TFormEvent, TChangeEvent } from "types";
import * as Auth from "styles/Routes/AuthStyle";

const AuthForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [newAccount, setNewAccount] = useState<boolean>(true);
  const [error, setError] = useState<string>();

  const onChange = (event: TChangeEvent): void => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (event: TFormEvent): Promise<void> => {
    event.preventDefault();
    try {
      if (newAccount) {
        await authService.createUserWithEmailAndPassword(email, password);
      } else {
        await authService.signInWithEmailAndPassword(email, password);
      }
    } catch (e) {
      setError((e as Error).message);
    }
  };

  const toggleAcount = () => setNewAccount((prev: boolean) => !prev);

  return (
    <>
      <Auth.Container onSubmit={onSubmit}>
        <Auth.Input name="email" type="text" placeholder="Email" required value={email} onChange={onChange} />
        <Auth.Input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
          autoComplete="on"
        />
        <Auth.Submit
          StateBackgroundColor={newAccount}
          type="submit"
          value={newAccount ? "Create Account" : "Sign In"}
        />
        {error && <Auth.Error>{error}</Auth.Error>}
      </Auth.Container>
      <Auth.Switch onClick={toggleAcount}>{newAccount ? "Sign In" : "Create Account"}</Auth.Switch>
    </>
  );
};

export default AuthForm;
