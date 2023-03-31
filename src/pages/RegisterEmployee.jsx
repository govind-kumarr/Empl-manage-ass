import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addEmployee } from "../Redux/appSlice";
import { registerSchema } from "../schemas";

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
      // console.log(values);
      dispatch(addEmployee(values));
      resetForm();
    },
  });
  return (
    <RegisterForm>
      <h1 className="section_heading">Registration Form</h1>
      <form onSubmit={handleSubmit} className="form form-center">
        <div className="inputField">
          <label htmlFor="emp_id">Employee Id</label>
          <input
            type="text"
            name="emp_id"
            value={values.emp_id}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.emp_id && touched.emp_id ? (
            <p className="error">{errors.emp_id}</p>
          ) : null}
        </div>
        <div className="inputField">
          <label htmlFor="name">Employee Name</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? (
            <p className="error">{errors.name}</p>
          ) : null}
        </div>
        <div className="inputField">
          <label htmlFor="date_of_joining">Date of Joining</label>
          <input
            type="date"
            name="date_of_joining"
            value={values.date_of_joining}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.date_of_joining && touched.date_of_joining ? (
            <p className="error">{errors.date_of_joining}</p>
          ) : null}
        </div>
        <div className="inputField">
          <label htmlFor="designation">Designation</label>
          <select
            type="text"
            name="designation"
            value={values.designation}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="">Select Designation</option>
            <option value="md">MD</option>
            <option value="manager">Manager</option>
            <option value="clerk">Clerk</option>
            <option value="cashier">Cashier</option>
          </select>
          {errors.designation && touched.designation ? (
            <p className="error">{errors.designation}</p>
          ) : null}
        </div>
        <button className="btn register" type="submit">
          Add Employee
        </button>
      </form>
    </RegisterForm>
  );
};

const RegisterForm = styled.div`
  .section_heading {
    margin: auto;
    text-align: center;
    text-transform: capitalize;
  }
  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;

    border: 1px solid black;
    padding: 1rem 0rem;

    div {
      /* border: 1px solid black; */
      width: 90%;
      max-width: 500px;
      height: 80px;
      padding: 5px;

      display: flex;
      flex-direction: column;
      label {
        text-transform: uppercase;
        font-size: large;
        font-weight: bold;
      }
      input,
      select {
        width: 90%;
        height: 20px;
        padding: 5px;
      }
      select {
        height: 30px;
      }
    }
    .register {
      background: var(--fourth-color);
      font-weight: bold;
      
    }
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
