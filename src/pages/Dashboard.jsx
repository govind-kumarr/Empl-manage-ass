import { useState } from "react";
import { DashboardHeader } from "../components/DashboardHeader";
import { EmployeesList } from "../components/EmployeesList";
import { RegisterEmployee } from "./RegisterEmployee";

export const Dashboard = () => {
  const [show, setShow] = useState("registerEmployee");
  return (
    <div>
      <DashboardHeader setShow={setShow} />
      {show === "registerEmployee" && <RegisterEmployee />}
      {show === "employeeTable" && <EmployeesList />}
    </div>
  );
};
