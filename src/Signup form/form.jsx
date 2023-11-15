import React, { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, TextField, Typography } from "@mui/material";
import "./signup.scss";
import { emailset } from "../App";
import { useNavigate } from "react-router-dom";
const SignUpForm = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: { errors: formErrors },
  } = useForm();
  const emailset1 = useContext(emailset);
  const email = emailset1[0];
  const validate = (values, existingUsers) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    if (!values.email) {
      errors.email = "Email id is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email =
        "Make sure your email address contains @, . and does not contain any white spaces";
    } else {
      if (existingUsers.some((user) => user.email === values.email)) {
        errors.email = "Email address is already in use";
      } else {
        if (!values.password) {
          errors.password = "Password is required";
        } else if (!PWD_REGEX.test(values.password)) {
          errors.password =
            "To ensure maximum security make sure that the password contains an uppercase, lowercase, number, and a special character";
        }

        if (!values.confirmPassword) {
          errors.confirmPassword = "Please confirm the password";
        } else if (values.password !== values.confirmPassword) {
          errors.confirmPassword = "Passwords do not match";
        }
      }
    }

    return errors;
  };

  const onSubmit = (data) => {
    const existingUsers = JSON.parse(sessionStorage.getItem("users")) || [];
    const errors = validate(data, existingUsers);

    Object.keys(errors).forEach((field) => {
      setError(field, {
        type: "manual",
        message: errors[field],
      });
    });

    if (Object.keys(errors).length === 0) {
      const newUser = {
        ...data,
        id: new Date().getTime().toString(),
      };
      sessionStorage.setItem(
        "users",
        JSON.stringify([...existingUsers, newUser])
      );
      alert("Registration Successful");
      navigate("/");
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="formtotal">
      <Controller
        name="email"
        control={control}
        defaultValue={email}
        render={({ field }) => (
          <>
            <TextField
              label="Email Address"
              {...field}
              className="email"
              variant="outlined"
              margin="normal"
              fullWidth
              color="error"
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
            <TextField
              label="Password"
              type="password"
              {...field}
              className="password"
              variant="outlined"
              margin="normal"
              fullWidth
              color="error"
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

      <Controller
        name="confirmPassword"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <>
            <TextField
              label="Confirm Password"
              type="password"
              {...field}
              className="confirmpassword"
              variant="outlined"
              margin="normal"
              fullWidth
              color="error"
            />
            <Typography
              variant="body2"
              color="error"
              className="Validationmessage"
            >
              {formErrors.confirmPassword && formErrors.confirmPassword.message}
            </Typography>
          </>
        )}
      />

      <Button
        type="submit"
        className="submit"
        variant="contained"
        color="error"
        fullWidth
      >
        Sign Up
      </Button>
    </form>
  );
};

export default SignUpForm;
