import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { userLoginSchema } from "../schemas";
import { adminLogin } from "../Redux/appSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const initialValues = {
  username: "",
  password: "",
};

export const UserLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state);

  useEffect(() => {
    if (user) navigate("/dashboard");
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
      // console.log(values);
      dispatch(adminLogin(values));
      resetForm();
    },
  });

  return (
    <UserLoginForm>
      <h1 className="section_heading">Login Form</h1>
      <form onSubmit={handleSubmit} className="form form-center">
        <div className="inputField">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.username && touched.username ? (
            <p className="error">{errors.username}</p>
          ) : null}
        </div>
        <div className="inputField">
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p className="error">{errors.password}</p>
          ) : null}
        </div>
        <button type="submit" className="btn login">
          login
        </button>
      </form>
    </UserLoginForm>
  );
};

const UserLoginForm = styled.div`
  max-width: 1200px;
  margin: auto;
  .section_heading {
    margin: auto;
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
  .login {
    background: var(--fourth-color);
    font-weight: bold;
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
