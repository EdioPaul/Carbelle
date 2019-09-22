import React from "react";
import SignUpSection from "./../../components/SignUpSection";
import "./styles.scss";

function SignupPage(props) {
  return (
    <SignUpSection
      color="white"
      size="large"
      title="Criar uma conta"
      subtitle=""
      buttonText="Cadastrar"
    />
  );
}

export default SignupPage;
