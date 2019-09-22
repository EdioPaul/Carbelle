import React from "react";
import { useRouter } from "../../util/router.js";
import logo from '../../components/assets/imagemoon.jpg';
import "./styles.scss";

function HomeEnter(props) {
  const router = useRouter();
  return (
    <div>
    <h1>Hello, world!</h1>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
    <div className="logo">
          <img src={logo} width="1000" height="500" />
    </div>
  </div>
  );
}

export default HomeEnter;
