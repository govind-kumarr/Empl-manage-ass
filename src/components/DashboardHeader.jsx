import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getEmployee } from "../Redux/appSlice";

export const DashboardHeader = ({ setShow }) => {
  const { employees, user } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployee());
  }, []);
  return (
    <DashHeader>
      <div className="greetingBox" onClick={() => setShow("registerEmployee")}>
        <span className="info_heading">Welcome</span> {user}
      </div>
      <div className="totalEmployees">
        <span className="info_heading">Total Employees</span>{" "}
        {employees?.length || 0}
      </div>
      <div className="chart">
        <button className="btn showChart">Show Chart</button>
      </div>

      <div className="employees" onClick={() => setShow("employeeTable")}>
        Show Employees
      </div>
    </DashHeader>
  );
};

const DashHeader = styled.header`
  max-width: 1200px;
  margin: auto;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  div {
    border: 2px solid grey;
    border-radius: 5px;

    padding: 5px;
    cursor: pointer;

    display: flex;
    justify-content: space-between;
    gap: 5px;
    align-items: center;
  }
  .info_heading {
    font-size: 18px;
    font-weight: bold;
    color: black;
  }
`;
