import React from "react";
import { useDispatch } from "react-redux";
import { deleteEmployee } from "../Redux/appSlice";
import { Button, TableCell, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";

export const EmployeeRow = ({ employee, index }) => {
  const { _id, emp_id, name, designation, date_of_joining } = employee;
  const navigate = useNavigate();
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
        <Button
          variant="outlined"
          color="info"
          startIcon={<PersonIcon />}
          onClick={() => navigate(`/employee/${emp_id}`, { state: employee })}
        >
          Show Details
        </Button>
      </TableCell>
      <TableCell align="center">
        <Button variant="outlined" color="warning" startIcon={<EditIcon />}>
          Edit
        </Button>
      </TableCell>
      <TableCell align="center">
        <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};
