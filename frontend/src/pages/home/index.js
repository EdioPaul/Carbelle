import React from "react";
import SignInSection from "./../../components/SignInSection";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function HomePage(props) {
  const router = useRouter();

  return (
    <SignInSection
      color="white"
      size="medium"
      title="Login Administrativo Espaço Carbelle"
      subtitle="Controle de Eventos Chácara"
      buttonText="Entrar"
    />
  );
}

export default HomePage;
