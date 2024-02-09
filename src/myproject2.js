import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { MenuItem, Button, Grid} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";




const myform2=()=>{
    return ( 
    
    <>
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
<h1>FACULTY GUEST TALK IN OTHER INSTITUTIONS </h1>

<TextField
          id="nameofFaculty"
          label="Name of the Faculty"
          placeholder="Enter the Name"
          fullWidth
          margin="normal"
        />

<TextField
          id="date"
          label="Date"
         type="date"
          fullWidth
          margin="normal"
        />

<TextField
          id="topicOftheGuestTalk"
          label="Topic of The Guest Talk"
          placeholder="Enter the Topic"
          fullWidth
          margin="normal"
        />


<TextField
          id="NameOftheInstitution"
          label="Name Of The Institution"
          placeholder="Enter the Name"
          fullWidth
          margin="normal"
        />
        <TextField
          id="PlaceOftheInstitution"
          label="Place Of The Institution"
          placeholder="Enter the Place"
          fullWidth
          margin="normal"
        />

<TextField
          id="NofBeneficiaries"
          label="No of Beneficiaries"
          placeholder="Enter the Number"
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


    </>

    );

}


export default myform2;