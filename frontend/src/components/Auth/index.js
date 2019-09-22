import React, { useState } from "react";
import FormStatus from "./../FormStatus";
import FormField from "./../FormField";
import SectionButton from "./../SectionButton";
import { Link } from "./../../util/router.js";
import "./styles.scss";

function Auth(props) {
  // State for all inputs
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  // Whether to show errors
  // We set to true if they submit and there are errors.
  // We only show errors after they submit because
  // it's annoying to see errors while typing.
  const [showErrors, setShowErrors] = useState(false);

  // Error array we'll populate
  let errors = [];

  // Function for fetching error for a field
  const getError = field => {
    return errors.find(e => e.field === field);
  };

  // Function to see if field is empty
  const isEmpty = val => val.trim() === "";

  // Add error if email empty
  if (["signin", "signup", "forgotpass"].includes(props.mode)) {
    if (isEmpty(email)) {
      errors.push({
        field: "email",
        message: "Digite um E-Mail"
      });
    }
  }

  // Add error if password empty
  if (["signin", "signup", "changepass"].includes(props.mode)) {
    if (isEmpty(pass)) {
      errors.push({
        field: "pass",
        message: "Digite uma senha"
      });
    }
  }

  // Add error if confirmPass empty or
  // if it doesn't match pass.
  // Only for signup and changepass views.
  if (["signup", "changepass"].includes(props.mode)) {
    if (isEmpty(confirmPass)) {
      errors.push({
        field: "confirmPass",
        message: "Por Favor Confirme a senha"
      });
    } else if (pass !== confirmPass) {
      errors.push({
        field: "confirmPass",
        message: `Ei...O que você digitou não confere com a sua senha :( Tente Novamente!`
      });
    }
  }

  // Handle form submission
  const handleSubmit = () => {
    // If field errors then show them
    if (errors.length) {
      setShowErrors(true);
    } else {
      // Otherwise call onSubmit with email/pass
      if (props.onSubmit) {
        props.onSubmit({
          email,
          pass
        });
      }
    }
  };

  return (
    <div className="Auth">
      {props.status && props.status.message && (
        <FormStatus type={props.status.type} message={props.status.message} />
      )}

      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {["signup", "signin", "forgotpass"].includes(props.mode) && (
          <FormField
            value={email}
            type="email"
            placeholder="Email"
            error={showErrors && getError("email")}
            onChange={value => setEmail(value)}
          />
        )}

        {["signup", "signin", "changepass"].includes(props.mode) && (
          <FormField
            value={pass}
            type="password"
            placeholder="Password"
            error={showErrors && getError("pass")}
            onChange={value => setPass(value)}
          />
        )}

        {["signup", "changepass"].includes(props.mode) && (
          <FormField
            value={confirmPass}
            type="password"
            placeholder="Confirm Password"
            error={showErrors && getError("confirmPass")}
            onChange={value => setConfirmPass(value)}
          />
        )}

        <div className="field">
          <p className="control ">
            <SectionButton
              parentColor={props.parentColor}
              size="medium"
              fullWidth={true}
              state={
                props.status && props.status.type === "pending"
                  ? "loading"
                  : "normal"
              }
            >
              {props.buttonText}
            </SectionButton>
          </p>
        </div>

        {["signup", "signin"].includes(props.mode) && (
          <div className="Auth__bottom-link has-text-centered">
            {props.mode === "signup" && (
              <>
                Já Possuí uma conta?
                <Link to="/signin">Logar</Link>
              </>
            )}

            {props.mode === "signin" && (
              <>
                <Link to="/signup">Criar uma conta</Link>
                <Link to="/forgotpass">Esqueci a senha</Link>
              </>
            )}
          </div>
        )}
      </form>
    </div>
  );
}

export default Auth;
