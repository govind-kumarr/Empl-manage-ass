import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getEmployees } from "../Redux/appSlice";
import { Button } from "@mui/material";
import { comps } from "../pages/Dashboard";

export const DashboardHeader = ({ setShow, show }) => {
  const { employees, user } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployees());
  }, []);
  return (
    <DashHeader>
      <Button
        variant={show == comps.register ? "contained" : "outlined"}
        onClick={() => setShow(comps.register)}
      >
        Welcome {user}
      </Button>
      <Button
        variant={show == comps.totalEmp ? "contained" : "outlined"}
        onClick={() => setShow(comps.totalEmp)}
      >
        Total Employees {employees?.length}
      </Button>
      <Button
        variant={show == comps.desChart ? "contained" : "outlined"}
        onClick={() => setShow(comps.desChart)}
      >
        Show Chart
      </Button>
      <Button
        variant={show == comps.employees ? "contained" : "outlined"}
        onClick={() => setShow(comps.employees)}
      >
        Show Employees
      </Button>
    </DashHeader>
  );
};

const DashHeader = styled.div`
  max-width: 1200px;
  margin: auto;
  border: 3px solid #1565c0;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin: 1rem auto;
`;
