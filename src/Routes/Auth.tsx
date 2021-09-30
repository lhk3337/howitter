import React from "react";
import AuthForm from "Components/AuthForm";
import { authService, firebaseAuth } from "firebaseAPI";
import { TClickEvent } from "types";

const Auth = () => {
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
      <AuthForm />
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
