import React from "react";
import ChangePassSection from "./../../components/ChangePassSection";
import "./styles.scss";

function ChangepassPage(props) {
  return (
    <ChangePassSection
      color="white"
      size="large"
      title="Escolha uma nova senha"
      subtitle=""
      buttonText="Mudar Senha"
    />
  );
}

export default ChangepassPage;
