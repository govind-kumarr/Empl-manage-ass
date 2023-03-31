import React from "react";
import { useDispatch } from "react-redux";
import { deleteEmployee } from "../Redux/appSlice";
import { Button, TableCell, TableRow } from "@mui/material";
// import { DeleteIcon } from "@mui/icons-material";

export const EmployeeRow = ({ employee, index }) => {
  const { _id, emp_id, name, designation, date_of_joining } = employee;
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteEmployee(_id));
  };
  return (
    <TableRow role="checkbox" tabIndex={-1}>
      <TableCell align="center">{emp_id}</TableCell>
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center">{date_of_joining}</TableCell>
      <TableCell align="center">{designation}</TableCell>
      <TableCell align="center">
        <Button>Show Details</Button>
      </TableCell>
      <TableCell align="center">
        <Button>Edit</Button>
      </TableCell>
      <TableCell align="center">
        {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button> */}
        <Button variant="outlined">Delete</Button>
      </TableCell>
    </TableRow>
  );
};
