import React from "react";
import { authService, firebaseAuth } from "firebaseAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import AuthForm from "Components/AuthForm";
import { TClickEvent } from "types";
import * as Style from "styles/Routes/AuthStyle";

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
    <Style.Container>
      <FontAwesomeIcon icon={faTwitter} color={"#04AAFF"} size="3x" style={{ marginBottom: 30 }} />
      <AuthForm />
      <Style.Btns>
        <Style.Btn onClick={onSocialClick} name="google">
          Continue with Google <FontAwesomeIcon icon={faGoogle} />
        </Style.Btn>
        <Style.Btn onClick={onSocialClick} name="github">
          Continue with Github <FontAwesomeIcon icon={faGithub} />
        </Style.Btn>
      </Style.Btns>
    </Style.Container>
  );
};

export default Auth;
