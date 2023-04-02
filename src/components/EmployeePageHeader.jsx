import { Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

export const EmployeePageHeader = ({ emp_id, employee }) => {
  const navigate = useNavigate();
  // console.log(employee, "employee page header");
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        padding: "1rem",
        border: "3px solid #1565c0",
        margin: "1rem",
      }}
    >
      <Button
        startIcon={<ArrowBackIcon />}
        variant="contained"
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
      <Button
        variant="contained"
        startIcon={<EditIcon />}
        onClick={() => navigate(`/employee/addPrevEmp/${emp_id}`)}
      >
        Add Prev Employment
      </Button>
      <Button
        variant="contained"
        startIcon={<EditIcon />}
        onClick={() =>
          navigate(`/employee/edit/${emp_id}`, { state: employee })
        }
      >
        Edit Employee
      </Button>
      <Button variant="contained" startIcon={<EditIcon />}>
        Edit Prev Employment
      </Button>
    </Box>
  );
};
