import React from "react";
import SignInSection from "./../../components/SignInSection";
import "./styles.scss";

function SigninPage(props) {
  return (
    <SignInSection
      color="white"
      size="large"
      title="Bem Vindo(a)"
      subtitle=""
      buttonText="Entrar"
    />
  );
}

export default SigninPage;
