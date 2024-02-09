import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { MenuItem, Button, Grid} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const Period = [
  { label: "1" },
  { label: "2" },
  { label: "3" },
  { label: "4" },
  { label: "5" },
  { label: "6" },
  { label: "7" },
  { label: "8" },
  { label: "9" },
];

const Section = [
  { label: "A" },
  { label: "B" },
];

const Branch = [
  { label: "BE" },
  { label: "B-Tech" },
];

const semester = [
  { label: "odd" },
  { label: "even" },
];

export const MyForm1 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('logoname.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          border: "1px solid",
          borderRadius: "10px",
          p: 3,
          maxWidth: "500px",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        }}
      >
        <h1>TechTalks To Be Delivered Multidisciplinary Lectures</h1>

        <TextField
          id="nameofFaculty"
          label="Name of the Faculty"
          placeholder="Enter the Name"
          fullWidth
          margin="normal"
        />

        <TextField
          id="MuDil Number"
          label="MuDil Number"
          placeholder="Enter the Name"
          fullWidth
          margin="normal"
        />

        <TextField
          id="Lecture Delivered Branch"
          select
          label="Lecture Delivered Branch"
          placeholder="select the Branch"
          fullWidth
          margin="normal"
        >
          {Branch.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="sem"
          select
          label="Semester"
          placeholder="select the semester"
          fullWidth
          margin="normal"
        >
          {semester.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="Section"
          select
          label="Section"
          placeholder="select the Section"
          fullWidth
          margin="normal"
        >
          {Section.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="Date of Lecture Delivered"
          type="date"
          label="Date of Lecture Delivered"
          placeholder="Date of Lecture Delivered"
          fullWidth
          margin="normal"
        />

        <TextField
          id="Period"
          select
          label="Period"
          placeholder="select the Period"
          fullWidth
          margin="normal"
        >
          {Period.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="Topic of Discussion"
          label="Topic of Discussion"
          placeholder="Enter the Topic"
          fullWidth
          margin="normal"
        />

        <TextField
          id="No. of Beneficiaries"
          type="number"
          label="No. of Beneficiaries"
          placeholder="Enter the number"
          fullWidth
          margin="normal"
        />

        <TextField
          id="Details of the Discussion made"
          label="Details of the Discussion made"
          fullWidth
          margin="normal"
        />

        <TextField
          id="Outcome of the Discussion"
          label="Outcome of the Discussion"
          placeholder="Enter the detail"
          fullWidth
          margin="normal"
        />

        <TextField
          id="Outcome of the Activity"
          type="number"
          label="Outcome of the Activity"
          placeholder="Enter the number"
          fullWidth
          margin="normal"
        />

        <TextField
          id="PO and PSO"
          label="PO and PSO"
          placeholder="Enter the Detail"
          fullWidth
          margin="normal"
        />

        <Button
          color="inherit"
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
          fullWidth
          margin="normal"
        >
          Upload file
        </Button>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button variant="contained" color="success" fullWidth>
              Submit
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" color="primary" fullWidth>
              Clear
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MyForm1;
