import { authService, firebaseAuth } from "firebaseAPI";
import React, { useState } from "react";
import { TFormEvent, TChangeEvent, TClickEvent } from "types/type";
const Auth = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [newAccount, setNewAccount] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

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
    } catch (error: any) {
      setError(error.message);
    }
  };

  const toggleAcount = () => setNewAccount((prev: boolean) => !prev);

  const onSocialClick = async (event: TClickEvent): Promise<void> => {
    const {
      currentTarget: { name },
    } = event;
    let provider: any;
    if (name === "google") {
      provider = new firebaseAuth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseAuth.GithubAuthProvider();
    }
    await authService.signInWithPopup(provider);
  };

  return (
    <div>
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
      <div>
        <button onClick={onSocialClick} name="google">
          Continue with Google
        </button>
        <button onClick={onSocialClick} name="github">
          Continue with Github
        </button>
      </div>
    </div>
  );
};

export default Auth;
