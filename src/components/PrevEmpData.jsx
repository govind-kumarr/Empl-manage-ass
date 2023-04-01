import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getPrevEmpData } from "../functions/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const tableHeadStyles = {};
export const PrevEmpData = ({ emp_id }) => {
  const [prevEmp, setPrevEmp] = useState([]);
  const { token } = useSelector((state) => state);
  useEffect(() => {
    getPrevEmpData(emp_id, token, setPrevEmp);
  }, []);
  return (
    <Table>
      <TableHead>
        <TableRow
          sx={{
            padding: "0rem",
            border: "1px solid red",
          }}
        >
          <TableCell
            sx={{
              fontSize: "large",
              backgroundColor: "var(--first-color)",
              border: "1px solid white",
              color: "white",
            }}
          >
            Sr. No
          </TableCell>
          <TableCell
            sx={{
              fontSize: "large",
              backgroundColor: "var(--first-color)",
              border: "1px solid white",
              color: "white",
            }}
          >
            Company Name
          </TableCell>
          <TableCell
            sx={{
              fontSize: "large",
              backgroundColor: "var(--first-color)",
              border: "1px solid white",
              color: "white",
            }}
          >
            Designation
          </TableCell>
          <TableCell
            sx={{
              fontSize: "large",
              backgroundColor: "var(--first-color)",
              border: "1px solid white",
              color: "white",
            }}
          >
            Role
          </TableCell>
          <TableCell
            sx={{
              fontSize: "large",
              backgroundColor: "var(--first-color)",
              border: "1px solid white",
              color: "white",
            }}
          >
            From
          </TableCell>
          <TableCell
            sx={{
              fontSize: "large",
              backgroundColor: "var(--first-color)",
              border: "1px solid white",
              color: "white",
            }}
          >
            To
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {prevEmp.length > 0 &&
          prevEmp.map((data, ind) => {
            const { _id, company_name, from, to, designation, role } = data;
            return (
              <TableRow key={_id}>
                <TableCell
                  sx={{ fontSize: "larger", textTransform: "capitalize" }}
                >
                  {ind + 1}
                </TableCell>
                <TableCell
                  sx={{ fontSize: "larger", textTransform: "capitalize" }}
                >
                  {company_name}
                </TableCell>
                <TableCell
                  sx={{ fontSize: "larger", textTransform: "capitalize" }}
                >
                  {designation}
                </TableCell>
                <TableCell
                  sx={{ fontSize: "larger", textTransform: "capitalize" }}
                >
                  {role}
                </TableCell>
                <TableCell
                  sx={{ fontSize: "larger", textTransform: "capitalize" }}
                >
                  {from}
                </TableCell>
                <TableCell
                  sx={{ fontSize: "larger", textTransform: "capitalize" }}
                >
                  {to}
                </TableCell>
              </TableRow>
            );
          })}
      </TableBody>
    </Table>
  );
};
