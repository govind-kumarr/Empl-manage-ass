import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteEmployee } from "../Redux/appSlice";

export const EmployeeRow = ({ employee, index }) => {
  const { _id, emp_id, name, designation, date_of_joining } = employee;
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteEmployee(_id));
  };
  return (
    <Employee index={index}>
      <td>{emp_id}</td>
      <td>{name}</td>
      <td>{date_of_joining}</td>
      <td>{designation}</td>
      <td>
        <button className="btn show_btn">show details</button>
      </td>
      <td>
        <button className="btn edit_btn">edit</button>
      </td>
      <td>
        <button className="btn delete_btn" onClick={handleDelete}>
          delete
        </button>
      </td>
    </Employee>
  );
};
const Employee = styled.tr`
  background-color: ${({ index }) =>
    index % 2 == 0 ? "var(--fourth-color)" : "var(--fourth-color-lite)"};
`;
