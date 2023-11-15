import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Typography, Box } from "@mui/material";

const SignInForm = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors: formErrors },
  } = useForm();

  const validate = (values, existingUsers) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Email is required";
    } else {
      const userWithEmail = existingUsers.find(
        (user) => user.email === values.email
      );
      if (!userWithEmail) {
        errors.email = "Invalid email";
      }
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else {
      const user = existingUsers.find(
        (user) =>
          user.email === values.email && user.password === values.password
      );
      if (!user) {
        errors.password = "Invalid password";
      }
    }

    return errors;
  };

  const onSubmit = (data) => {
    const storedUsers = JSON.parse(sessionStorage.getItem("users")) || [];
    const errors = validate(data, storedUsers);
    Object.keys(errors).forEach((field) => {
      setError(field, {
        type: "manual",
        message: errors[field],
      });
    });

    if (Object.keys(errors).length === 0) {
      console.log("Authentication successful");
      navigate("/home");
    } else {
      console.log("Invalid credentials");
    }
  };

  return (
    <Box>
      <Box className="Signinnav">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="noo"
          className="Signinnav__Sigin_logos"
        />
      </Box>
      <Box className="signin_cont">
        <Typography></Typography>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <>
                <input
                  {...field}
                  className="signin_cont__signin_email"
                  placeholder="Email or Phone Number"
                  type="email"
                />
                <Typography
                  variant="body2"
                  color="error"
                  className="Validationmessage"
                >
                  {formErrors.email && formErrors.email.message}
                </Typography>
              </>
            )}
          />

          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <>
                <input
                  {...field}
                  className="signin_cont__signin_password"
                  placeholder="Password"
                  type="password"
                />
                <Typography
                  variant="body2"
                  color="error"
                  className="Validationmessage"
                >
                  {formErrors.password && formErrors.password.message}
                </Typography>
              </>
            )}
          />
          <button className="signin_cont__sigin_button" type="submit">
            Sign In
          </button>
        </form>

        <Box className="signin_cont__rememberme">
          <input
            type="checkbox"
            className="signin_cont__rememberme__checkbox"
          />
          <label>Remember me</label>
          <a href="#" className="signin_cont__rememberme__help">
            Need help?
          </a>
        </Box>
        <Box className="signin_cont__signin_new">
          <p className="signin_cont__signin_new__new">New to Netflix?</p>
          <a
            href="#"
            className="signin_cont__signin_new__signup"
            onClick={() => navigate("/signup")}
          >
            {" "}
            Signup Now
          </a>
          <Box
            component="span"
            className="signin_cont__signin_new__description"
          >
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <a href="#">Learn More</a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignInForm;
