import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {
  Container,
  Paper,
  Button,
  FormControlLabel,
  Radio,
  FormLabel,
  FormControl,
  RadioGroup,
  Stack,
  Select,
  MenuItem,
  InputLabel,
  Checkbox,
  FormGroup
} from "@material-ui/core";
import Calendar from './Calendar'
import Dropdown from './Dropdown'
import Dropdown2 from './Dropdown2'

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
  const [typeOfSchool, setTypeOfSchool] = useState("");

  const [symptonScreening, setSymptonScreening] = useState("");
  const [parents, setParents] = useState("");
  const [performance, setPerformance] = useState("");
  const [dailyScreening, setDailyScreening] = useState("");
  const [reportingSystem, setReportingSystem] = useState("");
  const [healthChecks, setHealthChecks] = useState("");

  const [question10A, setQuestion10A] = useState('');
  const [question10b, setQuestion10B] = useState('');
  const handleChange = (event) => {
    setQuestion10A(event.target.value);
  };

  // const handleChange = (event) => {
  //   setQuestion10B(event.target.value); };

  const [completedforminfo, setCompletedFormInfo] = useState([]); //this is the array that will hold the data from the form

  const classes = useStyles(); //this is the class that will be used to style the form

  const handleClick = (e) => {
    //this is the function that will be used to handle the click event
    e.preventDefault();
    const form = { name, email };
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

  useEffect(() => {
    fetch("http://localhost:8080/form/getAll")
      .then((res) => res.json())
      .then((result) => {
        setCompletedFormInfo(result);
      });
  }, []);

  return (
    <Container>

      <Paper elevation={3} style={paperStyle}>
        <h4 style={{ textAlign: "center" }}>
          Section 1. District/Private School Leadership Level to Complete. For
          Private schools, this part can be completed to encompass all school
          levels (ie. Elementary, middle, high school)
        </h4>
        <h4 style={{ color: "firebrick", textAlign: "left" }}>
          1. District/School Point of Contact
        </h4>

        <form className={classes.root} noValidate autoComplete="off">
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
          <h4 style={{ color: "firebrick", textAlign: "left" }}>2. Completion Date:</h4>

          <form className={classes.root} noValidate autoComplete="off">
            {/* <TextField
    id="outlined-basic"
    label="Enter the Date you are Filling out the Form"
    variant="outlined"
    fullWidth
    value={name}
    onChange={(e) => setName(e.target.value)}
  /> */}
  <h4 style={{textAlign: "left" }}><Calendar /></h4>
  <br></br>
  <br></br>
  
  
          </form>

        </form>
    </Paper>
        
    <Paper elevation={3} style={paperStyle}>
        <h4 style={{ color: "firebrick", textAlign: "left" }}>
          3. School district or Private School:
        </h4>

        <form className={classes.root} noValidate autoComplete="off">
          {/* <TextField
            id="outlined-basic"
            label="Enter the Name of the School District"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          /> */}
          <Dropdown />
        </form>



        <h4 style={{ color: "firebrick", textAlign: "left" }}>4. School location:</h4>

        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="County"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
       
        </form>

        {/* <Button variant="contained" color="primary" onClick={handleClick}>
          Next
        </Button> */}

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
        <h4 style={{ color: "firebrick", textalign: "left" }}>
          5. What type of School? (Check One):
        </h4>

        <form className={classes.root} noValidate autoComplete="off"></form>
        <FormControl>
          <RadioGroup row aria-labelledby="question5" name="questionFive">
            <FormControlLabel
              value="publicSchool"
              control={<Radio />}
              label="Public"
            />
            <FormControlLabel
              value="privateSchool"
              control={<Radio />}
              label="Private"
            />
            <FormControlLabel
              value="charterSchool"
              control={<Radio />}
              label="Charter"
            />
            <FormControlLabel
              value="otherSchool"
              control={<Radio />}
              label="Other (e.g alternative, GED"
            />
          </RadioGroup>
        </FormControl>
        <h4 style={{ color: "firebrick", textalign: "left" }}>
          6. Are the following measures related to COVID-19 symptom screening being conducted
          for students?

        </h4>
        <h4 style={{ color: "firebrick", textalign: "left" }}>
          Parents, Guardians, or caregivers to complete daily at-home symptom screening before
          students come to school

        </h4>
        <form className={classes.root} noValidate autoComplete="off"></form>
        <FormControl>

          <RadioGroup row aria-labelledby="question6a" name="questionSixA">
            <FormControlLabel
              value="atHomeStudentScreeningYes"
              control={<Radio />}
              label="Yes, required"
            />
            <FormControlLabel
              value="atHomeStudentScreeningOptional"
              control={<Radio />}
              label="Yes, optional"
            />
            <FormControlLabel
              value="atHomeStudentScreeningNo"
              control={<Radio />}
              label="No, not conducted"
            />
            <FormControlLabel
              value="atHomeStudentScreeningUnknown"
              control={<Radio />}
              label="Don't know "
            />
          </RadioGroup>
        </FormControl>
        <h4 style={{ color: "firebrick", textalign: "left" }}>
          Parents, guardians, or caregivers to use a reporting system (e.g.,
          app) to verify completion of daily symptom screening
        </h4>
        <FormControl>

          <RadioGroup row aria-labelledby="question6b" name="questionSixB">
            <FormControlLabel
              value="reportingSystemStudentYes"
              control={<Radio />}
              label="Yes, required"
            />
            <FormControlLabel
              value="reportingSystemStudentOptional"
              control={<Radio />}
              label="Yes, optional"
            />
            <FormControlLabel
              value="reportingSystemStudentNo"
              control={<Radio />}
              label="No, not conducted"
            />
            <FormControlLabel
              value="reportingSystemStudentUnknown"
              control={<Radio />}
              label="Don't know "
            />
          </RadioGroup>
        </FormControl>

        <h4 style={{ color: "firebrick", textalign: "left" }}>
          Parents, guardians, or caregivers to use a reporting system (e.g.,
          app) to verify completion of daily symptom screening
        </h4>
        <FormControl>

          <RadioGroup row aria-labelledby="question6c" name="questionSixC">
            <FormControlLabel
              value="onSiteStudentScreeningYes"
              control={<Radio />}
              label="Yes, required"
            />
            <FormControlLabel
              value="onSiteStudentScreeningOptional"
              control={<Radio />}
              label="Yes, optional"
            />
            <FormControlLabel
              value="onSiteStudentScreeningNo"
              control={<Radio />}
              label="No, not conducted"
            />
            <FormControlLabel
              value="onSiteStudentScreeningUnknown"
              control={<Radio />}
              label="Don't know "
            />
          </RadioGroup>
        </FormControl>

        <h4 style={{ color: "firebrick", textalign: "left" }}>
          7. Are the following measures related to COVID-19 symptom screening being conducted for faculty and staff?
        </h4>
        <h4 style={{ color: "firebrick", textalign: "left" }}>
          Faculty and staff to complete daily at-home symptom screening before coming to school:
        </h4>
        <FormControl>

          <RadioGroup row aria-labelledby="question7a" name="questionSevenA">
            <FormControlLabel
              value="atHomeFacultyScreeningYes"
              control={<Radio />}
              label="Yes, required"
            />
            <FormControlLabel
              value="atHomeFacultyScreeningOptional"
              control={<Radio />}
              label="Yes, optional"
            />
            <FormControlLabel
              value="atHomeFacultyScreeningNo"
              control={<Radio />}
              label="No, not conducted"
            />
            <FormControlLabel
              value="atHomeFacultyScreeningUnknown"
              control={<Radio />}
              label="Don't know "
            />
          </RadioGroup>
        </FormControl>
        <h4 style={{ color: "firebrick", textalign: "left" }}>
          Faculty and staff use a reporting system (ege., app) to verify completion of daily symptom screening:
        </h4>
        <FormControl>

          <RadioGroup row aria-labelledby="question7b" name="questionSevenB">
            <FormControlLabel
              value="reportingSystemFacultyYes"
              control={<Radio />}
              label="Yes, required"
            />
            <FormControlLabel
              value="reportingSystemFacultyOptional"
              control={<Radio />}
              label="Yes, optional"
            />
            <FormControlLabel
              value="reportingSystemFacultyNo"
              control={<Radio />}
              label="No, not conducted"
            />
            <FormControlLabel
              value="reportingSystemFacultyUnknown"
              control={<Radio />}
              label="Don't know "
            />
          </RadioGroup>
        </FormControl>
        <h4 style={{ color: "firebrick", textalign: "left" }}>
          Performance of Daily on-site health checks (e.g., temperature or symptom screen) for faculty and staff:
        </h4>
        <FormControl>

          <RadioGroup row aria-labelledby="question7c" name="questionSevenC">
            <FormControlLabel
              value="onSiteFacultyScreeningYes"
              control={<Radio />}
              label="Yes, required"
            />
            <FormControlLabel
              value="onSiteFacultyScreeningOptional"
              control={<Radio />}
              label="Yes, optional"
            />
            <FormControlLabel
              value="onSiteFacultyScreeningNo"
              control={<Radio />}
              label="No, not conducted"
            />
            <FormControlLabel
              value="onSiteFacultyScreeningUnknown"
              control={<Radio />}
              label="Don't know "
            />
          </RadioGroup>
        </FormControl>



        <h4 style={{ color: "firebrick", textalign: "left" }}>
          8. What is the plan for responding to a symptomatic student, faculty, or staff member? (choose all that apply)
        </h4>
        <FormControl>

          <RadioGroup aria-labelledby="question8" name="question8">
            <FormControlLabel
              value="question8Selection1"
              control={<Radio />}
              label="COVID Point of Contact/Cordinator"
            />
            <FormControlLabel
              value="question8Selection2"
              control={<Radio />}
              label="Identified isolation area"
            />
            <FormControlLabel
              value="question8Selection3"
              control={<Radio />}
              label="Procedusres for removing symptomatic person from campus (e.g., parent pick up, staff transportation"
            />
            <FormControlLabel
              value="question8Selection4"
              control={<Radio />}
              label="Cleaning Procedusres of rooms and items after sick student/staff is removed"
            />
            <FormControlLabel
              value="question8Selection5"
              control={<Radio />}
              label="Instructions/policies for primary care/testing"
            />
            <FormControlLabel
              value="question8Selection6"
              control={<Radio />}
              label="Instructions/policies for home isolation"

            />
            <FormControlLabel
              value="question8Selection7"
              control={<Radio />}
              label="Established protocols for working with local health department in comfirmed positive case identified"

            />
            <FormControlLabel
              value="question8Selection8"
              control={<Radio />}
              label="Established strategies for notifying parents of contacts"

            /><FormControlLabel
              value="question8Selection9"
              control={<Radio />}
              label="Other"

            /><FormControlLabel
              value="question8Selection10"
              control={<Radio />}
              label="None of these"

            /><FormControlLabel
              value="question8Selection11"
              control={<Radio />}
              label="Don't know"

            />
          </RadioGroup>
        </FormControl>
      </Paper>


      <Paper elevation={3} style={paperStyle}>
        <h4 style={{ color: "firebrick", textalign: "left" }}>
          9. If there is a confirmed case of COVID-19, which of the following elements does the response plan include? (choose all that apply)
        </h4>
        <FormControl>

          <RadioGroup aria-labelledby="question9" name="questionNine">
            <FormControlLabel
              value="question9Selection1"
              control={<Radio />}
              label="A reporting system for COVID-19 positive cases within the last 14 days"
            />
            <FormControlLabel
              value="question9Selection2"
              control={<Radio />}
              label="Notifying staff, families, and the public of school closures and any restrictions in place to limit
              COVID-19 exposure"
            /><FormControlLabel
              value="question9Selection3"
              control={<Radio />}
              label="Interviews with the positive case"
            /><FormControlLabel
              value="question9Selection4"
              control={<Radio />}
              label="Identifying and notifying close contacts of the positive case"
            /><FormControlLabel
              value="question9Selection5"
              control={<Radio />}
              label="Flexible leave policies for staff and faculty"
            /><FormControlLabel
              value="question9Selection6"
              control={<Radio />}
              label="Policies for returning to school after COVID-19 illness"
            /><FormControlLabel
              value="question9Selection7"
              control={<Radio />}
              label="Cleaning and disinfection of relevant areas"
            /><FormControlLabel
              value="question9Selection8"
              control={<Radio />}
              label="None of these"
            /><FormControlLabel
              value="question9Selection9"
              control={<Radio />}
              label="Don't know"
            />
          </RadioGroup>
        </FormControl>
      </Paper>


      <Paper elevation={3} style={paperStyle}>
        <h4 style={{ color: "firebrick", textalign: "left" }}>
          10. Is there a system for students, teachers, and staff to self-report to school administration if any of the following are true?
        </h4>
        <FormControl fullWidth>
          <InputLabel id="question10-label">a. Have symptoms of Covid-19</InputLabel>
          <Select
            labelId="question10A-label"
            id="question10A"
            value={question10A}
            label="a. Have symptoms of Covid-19"
            onChange={handleChange}
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
            <MenuItem value="Don't Know">Don't Know</MenuItem>
          </Select>
          {/* <InputLabel id="question10-label">b. Have been diagnosed with Covid-19</InputLabel>
        <Select
          labelId="question10b-label"
          id="question10B"
          value={question10B}
          label="b. Have been diagnosed with Covid-19"
          onChange={handleChange}
        >
          <MenuItem value="Yes">Yes</MenuItem>
          <MenuItem value="No">No</MenuItem>
          <MenuItem value="Don't Know">Don't Know</MenuItem>
        </Select> */}
          {/* <InputLabel id="question10-label">c. Have you been exposed to someone with COVID-19 within the last 14 Days</InputLabel>
        <Select
          labelId="question10c-label"
          id="question10C"
          value={question10C}
          label="c. Have you been exposed to someone with COVID-19 within the last 14 Days"
          onChange={handleChange}
        >
          <MenuItem value="Yes">Yes</MenuItem>
          <MenuItem value="No">No</MenuItem>
          <MenuItem value="Don't Know">Don't Know</MenuItem>
        </Select> */}
        </FormControl>
      </Paper>
      <Paper elevation={3} style={paperStyle}>
        <h4 style={{ color: "firebrick", textalign: "left" }}>
          11. Which Personal protective equipment does school staff/nurses have access to in caring for children or staff with COVID-19 symptoms?
          This includes surgical masks or N95s, gloves, face shields or goggles, and/or gowns
        </h4>

        <form className={classes.root} noValidate autoComplete="off"></form>
        <FormControl>
          <RadioGroup row aria-labelledby="question11" name="questionEleven">
            <FormControlLabel
              value="n95"
              control={<Radio />}
              label="N95"
            />
            <FormControlLabel
              value="surgicalMask"
              control={<Radio />}
              label="Surgical Mask"
            />
            <FormControlLabel
              value="eyeProtection"
              control={<Radio />}
              label="Eye Protection (eg. Faceshield or goggles"
            />
            <FormControlLabel
              value="gowns"
              control={<Radio />}
              label="Gowns"
            />
            <FormControlLabel
              value="disposableGloves"
              control={<Radio />}
              label="Disposable Gloves"
            /><FormControlLabel
              value="other"
              control={<Radio />}
              label="Other"
            /><FormControlLabel
              value="unknown"
              control={<Radio />}
              label="Don't Know"
            />
          </RadioGroup>
        </FormControl>
      </Paper>
      <Paper elevation={3} style={paperStyle}>
        <h4 style={{ color: "firebrick", textalign: "left" }}>
          12. Is testing for COVID-19 available at your school through the rapid antigen test?
        </h4>

        <form className={classes.root} noValidate autoComplete="off"></form>
        <FormControl>
          <RadioGroup row aria-labelledby="question12" name="questionTwelve">
            <FormControlLabel
              value="yes"
              control={<Radio />}
              label="Yes"
            />
            <FormControlLabel
              value="no"
              control={<Radio />}
              label="No"
            />

          </RadioGroup>
        </FormControl>
        <h4 style={{ color: "firebrick", textalign: "left" }}>
          13. What plans are in place for cunducting or referring students, faculty, or staff to testing for SARS-CoV-2, the virus that causes COVID19?
        </h4>
        <form className={classes.root} noValidate autoComplete="off"></form>
        <FormGroup row >
          <FormControlLabel control={<Checkbox value="question13Selectiona1" />} label="Refer to health department" />
          <FormControlLabel control={<Checkbox value="question13Selectiona2" />} label="Refer to primary care" />
          <FormControlLabel control={<Checkbox value="question13Selectiona3" />} label="Rapid antigen testing at school" />
          <FormControlLabel control={<Checkbox value="question13Selection1" />} label="Referral to testing" />
          <FormControlLabel control={<Checkbox value="question13Selection1" />} label="None of these Things" />
          <FormControlLabel control={<Checkbox value="question13Selection1" />} label="Other, specify" />
        </FormGroup>
        <FormGroup row >
          <FormControlLabel control={<Checkbox value="question13Selectiona1" />} label="Refer to health department" />
          <FormControlLabel control={<Checkbox value="question13Selectiona2" />} label="Refer to primary care" />
          <FormControlLabel control={<Checkbox value="question13Selectiona3" />} label="Rapid antigen testing at school" />
          <FormControlLabel control={<Checkbox value="question13Selection1" />} label="Referral to testing" />
          <FormControlLabel control={<Checkbox value="question13Selection1" />} label="None of these Things" />
          <FormControlLabel control={<Checkbox value="question13Selection1" />} label="Other, specify" />
        </FormGroup>
      </Paper>
    </Container>
  );
}
