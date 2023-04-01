import { Box } from "@mui/material";
import React from "react";

export const EmployeeCard = ({ employee }) => {
  const { _id, emp_id, name, designation, date_of_joining } = employee;
  return (
    <Box
      sx={{
        border: "1px solid black",
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <p>Name :</p> <p>{name}</p>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <p>Employee Id</p> <p>{emp_id}</p>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <p>Designation</p> <p>{designation.toUpperCase()}</p>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <p>Date of Joining</p> <p>{date_of_joining}</p>
      </Box>
    </Box>
  );
};
