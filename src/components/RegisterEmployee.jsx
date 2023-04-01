import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addEmployee } from "../Redux/appSlice";
import { registerSchema } from "../schemas";
import { Button, MenuItem, Select, TextField } from "@mui/material";

const initialValues = {
  emp_id: "",
  name: "",
  date_of_joining: "",
  designation: "",
};

export const RegisterEmployee = () => {
  const dispatch = useDispatch();

  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema: registerSchema,
    onSubmit: (values) => {
      dispatch(addEmployee(values));
      resetForm();
    },
  });
  return (
    <RegisterForm>
      <h1 className="section_heading">Registration Form</h1>
      <form onSubmit={handleSubmit} className="form form-center">
        <TextField
          name="emp_id"
          type="text"
          onChange={handleChange}
          value={values.emp_id}
          label="Employee ID"
          variant="outlined"
          error={touched.emp_id && errors.emp_id ? true : false}
          helperText={errors.emp_id}
          fullWidth
        />
        <TextField
          name="name"
          type="text"
          onChange={handleChange}
          value={values.name}
          label="Employee Name"
          variant="outlined"
          error={touched.name && errors.name ? true : false}
          helperText={errors.name}
          fullWidth
        />
        <TextField
          name="date_of_joining"
          type="date"
          onChange={handleChange}
          value={values.date_of_joining}
          variant="outlined"
          error={
            touched.date_of_joining && errors.date_of_joining ? true : false
          }
          helperText={errors.date_of_joining}
          fullWidth
        />
        <Select
          name="designation"
          labelId="designation"
          value={values.designation}
          label="Designation"
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="">Select Designation</MenuItem>
          <MenuItem value="md">Md</MenuItem>
          <MenuItem value="manager">Manager</MenuItem>
          <MenuItem value="clerk">Clerk</MenuItem>
          <MenuItem value="cashier">Cashier</MenuItem>
        </Select>
        <Button variant="outlined" type="submit">
          Add Employee
        </Button>
      </form>
    </RegisterForm>
  );
};

const RegisterForm = styled.div`
  border: 3px solid var(--primary-color);
  max-width: 900px;
  margin: auto;
  .section_heading {
    margin: auto;
    text-align: center;
    text-transform: capitalize;
    background: var(--primary-color);
    color: white;
  }
  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;
  }
  .form-center {
    width: 90%;
    max-width: 800px;
    margin: auto;
  }
  .error {
    color: red;
  }
`;
