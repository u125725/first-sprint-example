import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import {
  Container,
  Paper,
  Button,
  FormControlLabel,
  Radio,
  
  FormControl,
  RadioGroup,
  
  Select,
  MenuItem,
  InputLabel,
  Checkbox,
  FormGroup,
} from "@material-ui/core";
import Calendar from "./Calendar";
import Dropdown from "./Dropdown";
import CheckBox from "./CheckBox";
import { textAlign } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Form() {
  const paperStyle = { padding: "50px 20px", width: 1300, margin: "20px auto" };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [completionDate, setCompletionDate] = useState("");
  const [schoolDistrict, setSchoolDistrict] = useState("");
  const [city, setCity] = useState("");
  const [county, setCounty] = useState("");
  const [schoolDistricts, setSchoolDistricts] = useState([]);
  const [typeOfSchool, setTypeOfSchool] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [question6a, setQuestion6a] = useState("");
  const [question6b, setQuestion6b] = useState("");
  const [question6c, setQuestion6c] = useState("");
  const [question7a, setQuestion7a] = useState("");
  const [question7b, setQuestion7b] = useState("");
  const [question7c, setQuestion7c] = useState("");
  const [question8a, setQuestion8a] = useState("");
  const [question8b, setQuestion8b] = useState("");
  const [question8c, setQuestion8c] = useState("");
  const [question8d, setQuestion8d] = useState("");
  const [question8e, setQuestion8e] = useState("");
  const [question8f, setQuestion8f] = useState("");
  const [question8g, setQuestion8g] = useState("");
  const [question8h, setQuestion8h] = useState("");
  const [question8i, setQuestion8i] = useState("");
  const [question8j, setQuestion8j] = useState("");
  const [question8k, setQuestion8k] = useState("");
  const [question9a, setQuestion9a] = useState("");
  const [question9b, setQuestion9b] = useState("");
  const [question9c, setQuestion9c] = useState("");
  const [question9d, setQuestion9d] = useState("");
  const [question9e, setQuestion9e] = useState("");
  const [question9f, setQuestion9f] = useState("");
  const [question9g, setQuestion9g] = useState("");
  const [question9h, setQuestion9h] = useState("");
  const [question9i, setQuestion9i] = useState("");
  const [question10A, setQuestion10A] = useState("");
  const [question10b, setQuestion10B] = useState("");
  const [question10c, setQuestion10C] = useState("");
  const [question10d, setQuestion10D] = useState("");
  const [question11a, setQuestion11a] = useState("");
  const [question11b, setQuestion11b] = useState("");
  const [question11c, setQuestion11c] = useState("");
  const [question11d, setQuestion11d] = useState("");
  const [question11e, setQuestion11e] = useState("");
  const [question11f, setQuestion11f] = useState("");
  const [question11g, setQuestion11g] = useState("");
  const [question12a, setQuestion12A] = useState("");
  const [question12b, setQuestion12B] = useState("");
  const [question12c, setQuestion12C] = useState("");
  const [question12d, setQuestion12D] = useState("");

  const [question13a1, setQuestion13A1] = useState("");
  const [question13a2, setQuestion13A2] = useState("");
  const [question13a3, setQuestion13A3] = useState("");
  const [question13a4, setQuestion13A4] = useState("");
  const [question13a5, setQuestion13A5] = useState("");

  const [question13b1, setQuestion13B1] = useState("");
  const [question13b2, setQuestion13B2] = useState("");
  const [question13b3, setQuestion13B3] = useState("");
  const [question13b4, setQuestion13B4] = useState("");
  const [question13b5, setQuestion13B5] = useState("");
  const [question13b6, setQuestion13B6] = useState("");
  const [question14, setQuestion14] = useState("");
  const [question14a, setQuestion14A] = useState("");
  const [question14b, setQuestion14B] = useState("");
  const [question14c, setQuestion14C] = useState("");
  const [question14d, setQuestion14D] = useState("");
  
  
  const [question15a, setQuestion15A] = useState("");
  const [question15b, setQuestion15B] = useState("");
  const [question15c, setQuestion15C] = useState("");
  const [question15d, setQuestion15D] = useState("");
  const [question15e, setQuestion15E] = useState("");
  const [question15f, setQuestion15F] = useState("");
  const [question15g, setQuestion15G] = useState("");
  const [question15h, setQuestion15H] = useState("");
  const [question15i, setQuestion15I] = useState("");
  const [question16, setQuestion16] = useState("");
  

  // const handleChange = (event) => {
  //   setQuestion10B(event.target.value); };

  const [completedforminfo, setCompletedFormInfo] = useState([]); //this is the array that will hold the data from the form

  const classes = useStyles(); //this is the class that will be used to style the form

  const handleClick = (e) => {
    //this is the function that will be used to handle the click event
    e.preventDefault();
    const form = {
      name,
      email,
      startDate,
      schoolDistricts,
      city,
      county,
      typeOfSchool,
      question6a,
      question6b,
      question6c,
      question7a,
      question7b,
      question7c,
      question8a,
      question8b,
      question8c,
      question8d,
      question8e,
      question8f,
      question8g,
      question8h,
      question8i,
      question8j,
      question8k,
      question9a,
      question9b,
      question9c,
      question9d,
      question9e,
      question9f,
      question9g,
      question9h,
      question9i,
      question10A,
      question10b,
      question10c,
      question10d,
      question11a,
      question11b,
      question11c,
      question11d,
      question11e,
      question11f,
      question11g,
      question12a,
      question12b,
      question12c,
      question12d,
      question13a1,
      question13a2,
      question13a3,
      question13a4,
      question13a5,
      question13b1,
      question13b2,
      question13b3,
      question13b4,
      question13b5,
      question13b6,
      question14,
      question14a,
      question14b,
      question14c,
      question14d,
      
     
      question15a,
      question15b,
      question15c,
      question15d,
      question15e,
      question15f,
      question15g,
      question15h,
      question15i,
      question16,
    };
    console.log(form);
    fetch("http://localhost:8080/form/add", {
      // this is a url that we could post the data to or to a data feild in the database
      method: "POST",
      headers: { "Content-Type": "application/json" }, // this is the type of data that we are sending
      body: JSON.stringify(form), // this is the data that we are sending
    }).then(() => {
      console.log("New Form added");
    });
  };

  // useEffect(() => {
  //   fetch("http://localhost:8080/form/getAll")
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setCompletedFormInfo(result);
  //     });
  // }, []);

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        
        <h4 style={{ textAlign: "Left" }}>
          Section 1. District/Private School Leadership Level to Complete. 
          <br/>
          For Private schools, this part can be completed to encompass all school
          levels (ie. Elementary, middle, high school)
        </h4>
        <h4 style={{ color: "firebrick", textAlign: "left" }}>
          1. District/School Point of Contact
        </h4>

       
          <TextField
            id="outlined-basic"
            label="Enter the District/School Point of Contact"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Enter a Valid Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <Grid container spacing={1}>
            <Grid item xs={2}>
          <h4 style={{ color: "firebrick", textAlign: "left" }}>
            2. Completion Date:
          </h4>
        </Grid>
        <Grid item xs={10}>
         
            <h4 style={{ textAlign: "left" }}>
              <Calendar />
            </h4>
            </Grid>
          </Grid>
           
         
      
        <h4 style={{ color: "firebrick", textAlign: "left" }}>
          3. School district or Private School:
        </h4>

        <form className={classes.root} noValidate autoComplete="off">
          <Dropdown
            value="Hazelwood West"
            value="Hazelwood Central"
            value="Hazelwood East"
            value="Pattonville"
            value="Ferguson"
            value="Riverview Gardens"
            value="Parkway North"
            value="Ritenour"
            value="Normandy"
            value="Parkway Central"
            value="Ladue"
            value="University City"
            value="Rockwood"
            value="Clayton"
            value="Parkway South"
            value="Kirkwood"
            value="Webster Groves"
            value="Brentwood"
            value="Maplewood Richmond Heights"
            value="Valley Park"
            value="Affton"
            value="Bayless"
            value="Lindberg"
            value="Hancock Place"
            value="Mehlville"
            onChange={(e) => setSchoolDistricts(e.target.value)}
          />
        </form>

        <h4 style={{ color: "firebrick", textAlign: "left" }}>
          4. School location:
        </h4>

        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            fullWidth
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="County"
            variant="outlined"
            fullWidth
            value={county}
            onChange={(e) => setCounty(e.target.value)}
          />
        </form>

        <Button variant="contained" color="teal" onClick={handleClick}>
          Submit
        </Button>

        {/* </Paper>
    <h4>Data</h4>

    <Paper elevation={3} style={paperStyle}>

      {completedforminfo.map(form=>(                    //this is the map function that will be used to display the data from the database
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={form.id}> 
         Id:{form.id}<br/>
         Name:{form.name}<br/>
         Email:{form.email}

        </Paper>
      ))
} */}
      </Paper>

      <Paper elevation={3} style={paperStyle}>
      
       <Grid container  alignContent={'left'} >
          <h4 style={{ color: "firebrick", textalign: "left" }}>
            5. What type of School?:
          </h4>
</Grid>

          <form className={classes.root} noValidate autoComplete="off"></form>
          <FormControl fullWidth>
          <InputLabel id="Type of school-label">
           Select the type of School
          </InputLabel>
          <Select
            labelId="Type of School-label"
            id="Type of School"
            value={typeOfSchool}
            label="Type of School"
            onChange={(e) => setTypeOfSchool(e.target.value)}
          >
            <MenuItem value="Public">Public</MenuItem>
            <MenuItem value="Private">Private</MenuItem>
            <MenuItem value="Charter">Charter</MenuItem>
            <MenuItem value="Other(e.g alternative, GED">Other(e.g alternative, GED</MenuItem>
          </Select>
        </FormControl>
        
        <br />
        <br />
        <br />
        
        <Grid container alignContent={'left'}>
        
          <h4 style={{ color: "firebrick", textalign: "left" }}>
            6. Are the following measures related to COVID-19 symptom screening
            being conducted for students?
          </h4>
          <br />
        <br />
        <br />
          </Grid>
       
          
          <h5 style={{ color: "firebrick", textalign: "centered" }}>
            Parents, Guardians, or caregivers to complete daily at-home symptom
            screening before students come to school
          </h5>
         
          <form className={classes.root} noValidate autoComplete="off"></form>
        <FormControl>

          <RadioGroup row aria-labelledby="question6a" name="questionSixA">
            <FormControlLabel
               value="Yes"
               control={<Radio />}
               label="Yes, required"
                onChange={(e) => setQuestion6a(e.target.value)}
            />
            <FormControlLabel
             value="Yes, optional"
             control={<Radio />}
             label="Yes, optional"
              onChange={(e) => setQuestion6a(e.target.value)}
            />
            <FormControlLabel
               value="No, not conducted"
               control={<Radio />}
               label="No, not conducted"
                onChange={(e) => setQuestion6a(e.target.value)}
            />
            <FormControlLabel
             value="Don't know"
             control={<Radio />}
             label="Don't know "
              onChange={(e) => setQuestion6a(e.target.value)}
            />
          </RadioGroup>
        </FormControl>
        <br />
        <br />
        <br />
        
        
          <h5 style={{ color: "firebrick", textalign: "centered" }}>
            Parents, guardians, or caregivers to use a reporting system (e.g.,
            app) to verify completion of daily symptom screening
          </h5>
          <FormControl>
            <RadioGroup row aria-labelledby="question6b" name="questionSixB">
              <FormControlLabel
                value="Yes"
                control={<Radio />}
                label="Yes, required"
                onChange={(e) => setQuestion6b(e.target.value)}
              />
              <FormControlLabel
                value="Yes, optional"
                control={<Radio />}
                label="Yes, optional"
                onChange={(e) => setQuestion6b(e.target.value)}
              />
              <FormControlLabel
                value="No, not conducted"
                control={<Radio />}
                label="No, not conducted"
                onChange={(e) => setQuestion6b(e.target.value)}
              />
              <FormControlLabel
                value="Don't know"
                control={<Radio />}
                label="Don't know "
                onChange={(e) => setQuestion6b(e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <br />
        <br />
        <br />
          <h5 style={{ color: "firebrick", textalign: "centered" }}>
            Parents, guardians, or caregivers to use a reporting system (e.g.,
            app) to verify completion of daily symptom screening
          </h5>
          <FormControl>
            <RadioGroup row aria-labelledby="question6c" name="questionSixC">
              <FormControlLabel
                value="Yes, required"
                control={<Radio />}
                label="Yes, required"
                onChange={(e) => setQuestion6c(e.target.value)}
              />
              <FormControlLabel
                value="Yes, optional"
                control={<Radio />}
                label="Yes, optional"
                onChange={(e) => setQuestion6c(e.target.value)}
              />
              <FormControlLabel
                value="No, not conducted"
                control={<Radio />}
                label="No, not conducted"
                onChange={(e) => setQuestion6c(e.target.value)}
              />
              <FormControlLabel
                value="Don't know"
                control={<Radio />}
                label="Don't know "
                onChange={(e) => setQuestion6c(e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <br />
        <br />
        <br />
          <h4 style={{ color: "firebrick", textAlign: "left" }}>
            7. Are the following measures related to COVID-19 symptom screening
            being conducted for faculty and staff?
          </h4>
          <br />
      
        
            
              
          <h5 style={{ color: "firebrick" }}>
            Faculty and staff to complete daily at-home symptom screening before
            coming to school:
          </h5>
         
         
         
             
          <FormControl>
            <RadioGroup row aria-labelledby="question7a" name="questionSevenA">
              <FormControlLabel
                value="Yes"
                control={<Radio />}
                label="Yes, required"
                onChange={(e) => setQuestion7a(e.target.value)}
              />
              <FormControlLabel
                value="Yes, optional"
                control={<Radio />}
                label="Yes, optional"
                onChange={(e) => setQuestion7a(e.target.value)}
              />
              <FormControlLabel
                value="No, Not Conducted"
                control={<Radio />}
                label="No, not conducted"
                onChange={(e) => setQuestion7a(e.target.value)}
              />
              <FormControlLabel
                value="Don't know"
                control={<Radio />}
                label="Don't know "
                onChange={(e) => setQuestion7a(e.target.value)}
              />
            </RadioGroup>
          </FormControl>
        
        <br />
        <br />
        <br />
        
         
          <h5 style={{ color: "firebrick" }}>
            Faculty and staff use a reporting system (eg., app) to verify
            completion of daily symptom screening:
          </h5>
          <FormControl>
            <RadioGroup row aria-labelledby="question7b" name="questionSevenB">
              <FormControlLabel
                value="Yes, required"
                control={<Radio />}
                label="Yes, required"
                onChange={(e) => setQuestion7b(e.target.value)}
              />
              <FormControlLabel
                value="Yes, optional"
                control={<Radio />}
                label="Yes, optional"
                onChange={(e) => setQuestion7b(e.target.value)}
              />
              <FormControlLabel
                value="No, Not Conducted"
                control={<Radio />}
                label="No, not conducted"
                onChange={(e) => setQuestion7b(e.target.value)}
              />
              <FormControlLabel
                value="Don't know"
                control={<Radio />}
                label="Don't know "
                onChange={(e) => setQuestion7b(e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          <br />
        <br />
        <br />
        
          <h5 style={{ color: "firebrick" }}>
            Performance of Daily on-site health checks (e.g., temperature or
            symptom screen) for faculty and staff:
          </h5>
          <FormControl>
            <RadioGroup row aria-labelledby="question7c" name="questionSevenC">
              <FormControlLabel
                value="Yes, required"
                control={<Radio />}
                label="Yes, required"
                onChange={(e) => setQuestion7c(e.target.value)}
              />
              <FormControlLabel
                value="Yes, optional"
                control={<Radio />}
                label="Yes, optional"
                onChange={(e) => setQuestion7c(e.target.value)}
              />
              <FormControlLabel
                value="No, not conducted"
                control={<Radio />}
                label="No, not conducted"
                onChange={(e) => setQuestion7c(e.target.value)}
              />
              <FormControlLabel
                value="Don't know"
                control={<Radio />}
                label="Don't know "
                onChange={(e) => setQuestion7c(e.target.value)}
              />
            </RadioGroup>
          </FormControl>
      </Paper>
      <Paper elevation={3} style={paperStyle}>
        
              <Grid container alignContent={'left'}>
        <h4 style={{ color: "firebrick", textalign: "left" }}>
          8. What is the plan for responding to a symptomatic student, faculty,
          or staff member? (choose all that apply)
        </h4>
        </Grid>
        <FormGroup textAlign="left">
          <form className={classes.root} noValidate autoComplete="off"></form>
          <FormControlLabel
            control={<Checkbox value="COVID Point of Contact/Cordinator" />}
            label="COVID Point of Contact/Cordinator"
            onChange={(e) => setQuestion8a(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="Identified isolation area" />}
            label="Identified isolation area"
            onChange={(e) => setQuestion8b(e.target.value)}
          />
          <FormControlLabel
            control={
              <Checkbox value="Procedures for removing symptomatic person from campus (e.g., parent pick up, staff)" />
            }
            label="Procedures for removing symptomatic person from campus (e.g., parent pick up, staff"
            onChange={(e) => setQuestion8c(e.target.value)}
          />
          <FormControlLabel
            control={
              <Checkbox value="Cleaning procedures of rooms and items after sick student/staff is removed" />
            }
            label="Cleaning procedures of rooms and items after sick student/staff is removed"
            onChange={(e) => setQuestion8d(e.target.value)}
          />
          <FormControlLabel
            control={
              <Checkbox value="Instructions/policies for primary care/testing" />
            }
            label="Instructions/policies for primary care/testing"
            onChange={(e) => setQuestion8e(e.target.value)}
          />
          <FormControlLabel
            control={
              <Checkbox value="Instructions/policies for home isolation" />
            }
            label="Instructions/policies for home isolation"
            onChange={(e) => setQuestion8f(e.target.value)}
          />
          <FormControlLabel
            control={
              <Checkbox value="Established protocols for working with local health department in confirmed positive case identified" />
            }
            label="Established protocols for working with local health department in confirmed positive case identified"
            onChange={(e) => setQuestion8g(e.target.value)}
          />
          <FormControlLabel
            control={
              <Checkbox value="Established strategies for notifying parents of contacts" />
            }
            label="Established strategies for notifying parents of contacts"
            onChange={(e) => setQuestion8h(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="Other" />}
            label="Other"
            onChange={(e) => setQuestion8i(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="None of the these" />}
            label="None of the these"
            onChange={(e) => setQuestion8j(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="Don't know" />}
            label="Don't know"
            onChange={(e) => setQuestion8k(e.target.value)}
          />
        </FormGroup>
      </Paper>

      <Paper elevation={3} style={paperStyle}>
        <FormGroup textAlign="left">
          <Grid container alignContent={'left'}>
          <h4 style={{ color: "firebrick", textalign: "left" }}>
            9. If there is a confirmed case of COVID-19, which of the following
            elements does the response plan include? (choose all that apply)
          </h4>
          </Grid>
          <FormControl>
            <FormControlLabel
              control={
                <Checkbox value="A reporting system for COVID-19 positive cases within the last 14 days " />
              }
              label="A reporting system for COVID-19 positive cases within the last 14 days"
              onChange={(e) => setQuestion9a(e.target.value)}
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="Notifying staff, families, and the public of school closures and any restrictions in place to limit
                COVID-19 exposure"
                />
              }
              label="Notifying staff, families, and the public of school closures and any restrictions in place to limit
              COVID-19 exposure"
              onChange={(e) => setQuestion9b(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="Interiew with the positive case" />}
              label="Interviews with the positive case"
              onChange={(e) => setQuestion9c(e.target.value)}
            />
            <FormControlLabel
              control={
                <Checkbox value="Identifying and notifying close contacts of the positive case" />
              }
              label="Identifying and notifying close contacts of the positive case"
              onChange={(e) => setQuestion9d(e.target.value)}
            />
            <FormControlLabel
              control={
                <Checkbox value="Flexible leave policies for staff and faculty" />
              }
              label="Flexible leave policies for staff and faculty"
              onChange={(e) => setQuestion9e(e.target.value)}
            />
            <FormControlLabel
              control={
                <Checkbox value="Policies for returning to school after COVID-19 illness" />
              }
              label="Policies for returning to school after COVID-19 illness"
              onChange={(e) => setQuestion9f(e.target.value)}
            />
            <FormControlLabel
              control={
                <Checkbox value="Cleaning and disinfection of relevant areas" />
              }
              label="Cleaning and disinfection of relevant areas"
              onChange={(e) => setQuestion9g(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="None of these" />}
              label="None of these"
              onChange={(e) => setQuestion9h(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="Don't know" />}
              label="Don't know"
              onChange={(e) => setQuestion9i(e.target.value)}
            />
          </FormControl>
        </FormGroup>
      </Paper>

      <Paper elevation={3} style={paperStyle}>
      <Grid container alignContent={'left'}>
        <h4 style={{ color: "firebrick", textalign: "left" }}>
         
          10. Is there a system for students, teachers, and staff to self-report
          to school administration if any of the following are true?
        </h4>
        </Grid>
        <FormControl fullWidth>
          <InputLabel id="question10-label">
            a. Have symptoms of Covid-19
          </InputLabel>
          <Select
            labelId="question10A-label"
            id="question10A"
            value={question10A}
            label="a. Have symptoms of Covid-19"
            onChange={(e) => setQuestion10A(e.target.value)}
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
            <MenuItem value="Don't Know">Don't Know</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="question10-label">
            b. Have been diagnosed with Covid-19
          </InputLabel>
          <Select
            labelId="question10b-label"
            id="question10b"
            value={question10b}
            label="b. Have been diagnosed with Covid-19"
            onChange={(e) => setQuestion10B(e.target.value)}
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
            <MenuItem value="Don't Know">Don't Know</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="question10-label">
            c. Are waiting for COVID-19 test results
          </InputLabel>
          <Select
            labelId="question10c-label"
            id="question10c"
            value={question10c}
            label="c. Are waiting for COVID-19 test results"
            onChange={(e) => setQuestion10C(e.target.value)}
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
            <MenuItem value="Don't Know">Don't Know</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="question10-label">
            d. Have been exposed to someone with COVID-19 with the last 14 days
          </InputLabel>
          <Select
            labelId="question10d-label"
            id="question10d"
            value={question10d}
            label="d. Have been exposed to someone with COVID-19 with the last 14 days"
            onChange={(e) => setQuestion10D(e.target.value)}
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
            <MenuItem value="Don't Know">Don't Know</MenuItem>
          </Select>
        </FormControl>
      </Paper>
      <Paper elevation={3} style={paperStyle}>
    
        
       
          <h4 style={{ color: "firebrick", textAlign: "left" }}>
            11. Which personal protective equipment does school staff/nurses
            have access to in caring for children or staff with COVID-19
            symptoms? 
            <br/>
            This includes surgical masks or N95s, gloves, face shields
            or goggles, and/or gowns
          </h4>
     
        <FormGroup textAlign="left">
          <form className={classes.root} noValidate autoComplete="off"></form>
          <FormControl>
            <FormControlLabel
              control={<Checkbox value="N95" />}
              label="N95"
              onChange={(e) => setQuestion11a(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="Surgical Mask" />}
              label="Surgical Mask"
              onChange={(e) => setQuestion11b(e.target.value)}
            />
            <FormControlLabel
              control={
                <Checkbox value="Eye Protection (eg.Faceshield or googles)" />
              }
              label="Eye Protection (eg.Faceshield or googles)"
              onChange={(e) => setQuestion11c(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="Gowns" />}
              label="Gowns"
              onChange={(e) => setQuestion11d(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="Disposable Gloves" />}
              label="Disposable Gloves"
              onChange={(e) => setQuestion11e(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="Other" />}
              label="Other"
              onChange={(e) => setQuestion11f(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="Don't Know" />}
              label="Don't Know"
              onChange={(e) => setQuestion11g(e.target.value)}
            />
          </FormControl>
        </FormGroup>
      </Paper>
      <Paper elevation={3} style={paperStyle}>
        <Grid container alignContent={'left'}>
        <h4 style={{ color: "firebrick", textAlign: "left" }}>
          12. Is testing for COVID-19 available at your school through the rapid
          antigen test?
        </h4>
        </Grid>
        <Grid container alignContent={'left'}>
        <form className={classes.root} noValidate autoComplete="off"></form>
        <FormControl>
          <Grid container alignContent={'left'}>
          <RadioGroup row aria-labelledby="question12a" name="question12a">
            <FormControlLabel
              value="yes"
              control={<Radio />}
              label="Yes"
              onChange={(e) => setQuestion12A(e.target.value)}
            />
            <FormControlLabel
              value="no"
              control={<Radio />}
              label="No"
              onChange={(e) => setQuestion12A(e.target.value)}
            />
          </RadioGroup>
          </Grid>
        
        </FormControl>
        </Grid>
        <br/>
        
<h5 style={{ color: "firebrick", textAlign: "left" }}>
          If yes, who can have testing?
</h5>
<FormGroup textAlign="left" row>
  <form className={classes.root} noValidate autoComplete="off"></form>
  <FormControlLabel
    control={<Checkbox value="Student" />}
    label="Student"
    onChange={(e) => setQuestion12B(e.target.value)}
  />
  <FormControlLabel
    control={<Checkbox value="Teacher" />}
    label="Teacher"
    onChange={(e) => setQuestion12B(e.target.value)}
  />
  <FormControlLabel
    control={<Checkbox value="Staff" />}
    label="Staff"
    onChange={(e) => setQuestion12B(e.target.value)}
  />
  </FormGroup>

      </Paper>
      <Paper elevation={3} style={paperStyle}>
        
          <h4 style={{ color: "firebrick", textAlign: "left" }}>
            13.What plans are in place for cunducting or referring students,
            faculty, or staff to testing for SARS-COV-2, the virus that causes
            COVID-19?
          </h4>
          <br/>
       
              <Grid container>
                <Grid item xs={7}>
          <body style={{ color: "firebrick", textAlign: "left" }}>
            a. For a symptomatic person (check all that apply)
          </body>
        
          <form className={classes.root} noValidate autoComplete="off"></form>
              </Grid>
              <Grid item xs={8}>
                <FormGroup >
          <FormControlLabel
            control={<Checkbox value="Refer to health department" />}
            label="Refer to health department"
            onChange={(e) => setQuestion13A1(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="Refer to primary care" />}
            label="Refer to primary care"
            onChange={(e) => setQuestion13A2(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="Rapid antigen testing at school" />}
            label="Rapid antigen testing at school"
            onChange={(e) => setQuestion13A3(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="None of these things" />}
            label="None of these things"
            onChange={(e) => setQuestion13A4(e.target.value)}
          />

          <FormControlLabel
            control={<Checkbox value="Other, specify" />}
            label="Other, specify"
            onChange={(e) => setQuestion13A5(e.target.value)}
          />
          </FormGroup>
       </Grid>
        </Grid>
       <br/>
       <br/><br/>
      <Grid container>
        <FormGroup textAlign="left">
          <Grid item xs={12}>
          <body style={{ color: "firebrick", textAlign: "left" }}>
            b. For close contacts (without symptoms) of a
            person with  confirmed
            or probable COVID-19 (check all that apply)
          </body>
          </Grid>
        </FormGroup>

        <br></br>
        <Grid item xs={6}>
        <FormGroup >
          <FormControlLabel
            control={<Checkbox value="Refer to the health department" />}
            label="Refer to health department"
            onChange={(e) => setQuestion13B1(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="Refer to primary care" />}
            label="Refer to primary care"
            onChange={(e) => setQuestion13B2(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="Rapid antigen testing at school" />}
            label="Rapid antigen testing at school"
            onChange={(e) => setQuestion13B3(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="Referral to testing" />}
            label="Referral to testing"
            onChange={(e) => setQuestion13B4(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="None of these things" />}
            label="None of these things"
            onChange={(e) => setQuestion13B5(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="Other, specify" />}
            label="Other, specify"
            onChange={(e) => setQuestion13B6(e.target.value)}
          />
        </FormGroup>
        </Grid>
        </Grid>
      </Paper>
      <Paper elevation={3} style={paperStyle}>
        <FormGroup textAlign="left" row>
         
          <h4 style={{ color: "firebrick", textAlign: "left" }}>
            14. Did your school adopt, in some form, the Missouri quarantining
            policy if both the case and cotact are appropriately masked the
            contact does not have to quarantine.
          </h4>
         
          
          <form className={classes.root} noValidate autoComplete="off"></form>
         
          <FormControl>
           
            <RadioGroup row aria-labelledby="question14" name="question14">
              <FormControlLabel
                value="yes"
                control={<Radio />}
                label="Yes"
                onChange={(e) => setQuestion14(e.target.value)}
              />

              <FormControlLabel
                value="no"
                control={<Radio />}
                label="No"
                onChange={(e) => setQuestion14(e.target.value)}
              />
            </RadioGroup>
          </FormControl>
        </FormGroup>
        <br/>
          <h5 style={{ color: "firebrick", textAlign:'left' }}>
            a. If yes, is the contact allowed to do school-based extracurricular
            activities (eg. band, sports, etc)?
          </h5>
          <form className={classes.root} noValidate autoComplete="off"></form>
          <FormGroup alignContent="left">
          <FormControl>
            <RadioGroup row aria-labelledby="question14a" name="question14a">
              <FormControlLabel
                value="yes"
                control={<Radio />}
                label="Yes"
                onChange={(e) => setQuestion14A(e.target.value)}
              />
              <FormControlLabel
                value="no"
                control={<Radio />}
                label="No"
                onChange={(e) => setQuestion14A(e.target.value)}
              />
            </RadioGroup>
          </FormControl>
          </FormGroup>
          <br/>
          <h5 style={{ color: "firebrick", textAlign:'left' }}>
            b. If yes, is the contact allowed to do other community activities
            (eg. church, sports, etc) outisde of school?
          </h5>
          <form className={classes.root} noValidate autoComplete="off"></form>
          <FormGroup alignContent="left">
          <FormControl>
            <RadioGroup row aria-labelledby="question14b" name="question14b">
              <FormControlLabel
                value="yes"
                control={<Radio />}
                label="Yes"
                onChange={(e) => setQuestion14B(e.target.value)}
              />
              <FormControlLabel
                value="no"
                control={<Radio />}
                label="No"
                onChange={(e) => setQuestion14B(e.target.value)}
              />
            </RadioGroup>
          </FormControl>
        </FormGroup>
     

      <FormGroup textAlign="left" row>
        <h5 style={{ color: "firebrick" }}>
          c. If yes, when was the alternative quarantining policy adopted?
        </h5>
      </FormGroup>
      <h4 style={{textAlign: "left" }}><Calendar /></h4>
      <FormGroup textAlign="left" >
        <h5 style={{ color: "firebrick", textAlign:"left" }}>
          d. Upload or provide a web link to the policy
        </h5>

        <form className={classes.root} noValidate autoComplete="off">
          <TextField 
          id="outlined-basic"
          label="Link"
          variant="outlined"
          fullWidth
          value={question14d}
          onChange={(e) => setQuestion14D(e.target.value)}
        />
        </form>
        <Button variant ="contained"
          >
        Upload
        </Button>


      </FormGroup>
       </Paper>
      <Paper elevation={3} style={paperStyle}>
        <FormGroup textAlign="left">
          <Grid container alignContent={'left'}>
          <h4 style={{ color: "firebrick" }}>
            15. What actions is the school taking regarding bus transportation
            to increase distance between students while riding? (check all that
            apply)
          </h4>
          </Grid>
          <FormControlLabel
            control={<Checkbox />}
            value="Create distance between children by skipping rows on buses"
            label="Create distance between children by skipping rows on buses"
            onChange={(e) => setQuestion15A(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox />}
            value="Create distance between children by assigning one child per seat/row on buses"
            label="Create distance between children by assigning one child per seat/row on buses"
            onChange={(e) => setQuestion15B(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox />}
            value="Create distance between children by assigning one child per seat/row on buses"
            label="Create distance between children by assigning one child per seat/row on buses"
            onChange={(e) => setQuestion15C(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox />}
            value="Seating families together"
            label="Seating families together"
            onChange={(e) => setQuestion15D(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox />}
            value="Assigned seats for students"
            label="Assigned seats for students"
            onChange={(e) => setQuestion15E(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox />}
            value="Increasing ventalation on the bus (eg open windows)"
            label="Increasing ventalation on the bus (eg open windows)"
            onChange={(e) => setQuestion15F(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox />}
            value="Using barriers such as plexiglass"
            label="Using barriers such as plexiglass"
            onChange={(e) => setQuestion15G(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox />}
            value="Other"
            label="Other"
            onChange={(e) => setQuestion15H(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox />}
            value="Non measures taken"
            label="Non measures taken"
            onChange={(e) => setQuestion15I(e.target.value)}
          />
        </FormGroup>
     
        <FormGroup textAlign="left">
          <h4 style={{ color: "firebrick", textAlign: "left" }}>
            16. On the buses, the majority of students are what distance apart?
          </h4>
          <RadioGroup row aria-labelledby="question16" name="question16">
              <FormControlLabel
                value="Less than 3 feet"
                control={<Radio />}
                label="Less than 3 feet"
                onChange={(e) => setQuestion16(e.target.value)}
              />
              <FormControlLabel
                value="3 to 6 feet"
                control={<Radio />}
                label="3 to 6 feet"
                onChange={(e) => setQuestion16(e.target.value)}
              />
              <FormControlLabel
                value="6 feet or greater"
                control={<Radio />}
                label="6 feet or greater"
                onChange={(e) => setQuestion16(e.target.value)}
              />
            </RadioGroup>
        </FormGroup>
       
       
        <Button variant="contained" color="teal" onClick={handleClick}>
          Submit
        </Button>
      </Paper>

     
      
   
                
    </Container>
  );
}
