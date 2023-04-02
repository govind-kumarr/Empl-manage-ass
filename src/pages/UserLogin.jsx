import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { userLoginSchema } from "../schemas";
import { adminLogin } from "../Redux/appSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";

const initialValues = {
  username: "",
  password: "",
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export const UserLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state);

  useEffect(() => {
    if (user != null) navigate("/dashboard");
  }, [user]);

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleBlur,
    handleChange,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema: userLoginSchema,
    onSubmit: (values) => {
      dispatch(adminLogin(values));
    },
  });

  return (
    <UserLoginForm>
      <h1 className="section_heading">Login Form</h1>
      <form onSubmit={handleSubmit} className="form form-center">
        <TextField
          name="username"
          type="text"
          placeholder="admin"
          onChange={handleChange}
          value={values.username}
          label="Username"
          variant="outlined"
          error={touched.username && errors.username ? true : false}
          helperText={errors.username}
          fullWidth
        />
        <TextField
          name="password"
          type="password"
          placeholder="admin"
          value={values.password}
          onChange={handleChange}
          label="Password"
          variant="outlined"
          error={touched.password && errors.password ? true : false}
          helperText={errors.password}
          fullWidth
        />
        <Button
          disabled={values.username && values.password ? false : true}
          variant="contained"
          type="submit"
        >
          Login
        </Button>
      </form>
    </UserLoginForm>
  );
};

const UserLoginForm = styled.div`
  max-width: 500px;
  margin: auto;
  .section_heading {
    margin: 10px auto;
    text-transform: capitalize;
    text-align: center;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;

    border: 1px solid black;
    padding: 1rem 1rem;
  }
  .form-center {
    width: 90%;
    max-width: 500px;
    margin: auto;
  }
`;
