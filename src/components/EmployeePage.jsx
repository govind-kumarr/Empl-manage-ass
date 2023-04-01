import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { EmployeeCard } from "./EmployeeCard";
import { PrevEmpData } from "./PrevEmpData";

export const EmployeePage = () => {
  const { emp_id } = useParams();
  const data = useLocation().state;
  return (
    <Employee>
      {data && (
        <Box>
          <EmployeeCard employee={data} />
          <PrevEmpData emp_id={emp_id} />
        </Box>
      )}
    </Employee>
  );
};
const Employee = styled.div`
  max-width: 800px;
  margin: auto;
`;
