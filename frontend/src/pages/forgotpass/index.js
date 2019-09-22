import React from "react";
import ForgotPassSection from "./../../components/ForgotPassSection";
import "./styles.scss";

function ForgotpassPage(props) {
  return (
    <ForgotPassSection
      color="white"
      size="large"
      title="Resetar a senha"
      subtitle=""
      buttonText="Resetar"
    />
  );
}

export default ForgotpassPage;
