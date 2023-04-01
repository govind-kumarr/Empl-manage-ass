import { Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

export const EmployeePageHeader = () => {
  const navigate = useNavigate();
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
        onClick={() => navigate("/dashboard")}
      >
        Back
      </Button>
      <Button variant="contained" startIcon={<EditIcon />}>
        Add Prev Employment
      </Button>
      <Button variant="contained" startIcon={<EditIcon />}>
        Edit Employee
      </Button>
      <Button variant="contained" startIcon={<EditIcon />}>
        Edit Prev Employment
      </Button>
    </Box>
  );
};
