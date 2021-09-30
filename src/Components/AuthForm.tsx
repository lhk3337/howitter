import React, { useState } from "react";
import { authService } from "firebaseAPI";
import { TFormEvent, TChangeEvent } from "types";

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
      <form onSubmit={onSubmit}>
        <input name="email" type="text" placeholder="Email" required value={email} onChange={onChange} />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
          autoComplete="on"
        />
        <input type="submit" value={newAccount ? "Create Account" : "Sign In"} />
        {error}
      </form>
      <span onClick={toggleAcount}>{newAccount ? "Sign In" : "Create Account"}</span>
    </>
  );
};

export default AuthForm;
