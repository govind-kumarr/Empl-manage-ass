import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getEmployee } from "../Redux/appSlice";
import { EmployeeRow } from "./EmployeeRow";

export const EmployeesList = () => {
  const dispatch = useDispatch();

  const { employees, isLoading, isError } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getEmployee());
  }, []);

  // console.log(employees, "Employees loaded");
  return (
    <EmployeeList>
      <h1 className="section_heading">All Employees</h1>
      <section className="section_employees">
        <table className="employees_table">
          <thead>
            <tr>
              <th>Employee Id</th>
              <th>Employee Name</th>
              <th>Date of Joining</th>
              <th>Designation</th>
              <th>show</th>
              <th>edit</th>
              <th>delete</th>
            </tr>
          </thead>

          <tbody className="table_body">
            {employees.length > 0 &&
              employees.map((employee, index) => (
                <EmployeeRow
                  key={employee._id}
                  employee={employee}
                  index={index}
                />
              ))}
          </tbody>
        </table>
      </section>
    </EmployeeList>
  );
};

const EmployeeList = styled.div`
  .section_heading {
    margin: auto;
    text-align: center;
  }
  .section_employees {
    max-width: 1200px;
    padding: 1rem 1rem;
    margin: auto;
  }

  .employees_table {
    width: 100%;
    margin: auto;
    padding: 1rem 1rem;

    border: 1px solid #000;
    border-collapse: collapse;
  }

  .employees_table th {
    text-transform: uppercase;
    padding: 10px;
  }

  .employees_table td {
    border: 1px solid #000;
    width: 10%;
    text-align: center;
  }
  .show_btn {
    background-color: var(--first-color);
  }
  .edit_btn {
    background: var(--second-color);
  }

  .delete_btn {
    background: red;
  }

  .btn {
    text-transform: uppercase;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }

  .btn:hover {
    opacity: 0.8;
  }

  .table_body tr td {
    /* background: var(--fourth-color); */
    padding: 1rem;
    margin: 1rem;
    border: 3px solid var(--third-color);
    color: var(--second-color);
    font-weight: bolder;
  }
`;
