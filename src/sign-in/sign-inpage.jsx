import React from "react";
import SignInForm from "./sign-inform";
import "./SignInPage.scss";
import Footer from "./footer";

const SignInPage = () => {
  return (
    <div className="sign-in-container">
      <SignInForm />
      <Footer />
    </div>
  );
};

export default SignInPage;
