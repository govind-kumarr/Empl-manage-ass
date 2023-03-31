import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { RegisterEmployee } from "./RegisterEmployee";
import { UserLogin } from "./UserLogin";
import { useSelector } from "react-redux";
import { EmployeePage } from "../components/EmployeePage";

export const AllRoutes = () => {
  const { token, user } = useSelector((state) => state);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route
          path="/dashboard"
          element={token && user ? <Dashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/employee/:id"
          element={
            token && user ? <EmployeePage /> : <Navigate to="/dashboard" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
