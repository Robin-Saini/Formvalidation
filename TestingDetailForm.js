import { Form, Button } from "react-bootstrap";
import React from "react";
import { Formik,Field } from "formik";
import * as Yup from 'yup';
import { Input } from "@material-ui/core";
import MyGoolgeLogin from "../GoogleLogin/GoolgeLogin";
import Facebook from "../GoogleLogin/FacebookLogin";
import { useState } from "react";
import store from "../../Store";
import { basicuserdata } from "../../services/AuthApi";
import FormCalendar from "../Calendar/Calender";
import TextField from '@material-ui/core/TextField';



// const Schema = Yup.object().shape({
//   password: Yup.string().required("This field is required"),
//   changepassword: Yup.string().when("password", {
//     is: val => (val && val.length > 0 ? true : false),
//     then: Yup.string().oneOf(
//       [Yup.ref("password")],
//       "Both password need to be the same"
//     )
//   })
// });
const TestReg = () => {
  const intialData = {
    pan: "",
    email: "",
    firstname: "",
    middlename: "",
    lastname: "",
    fathername: "",
    mobilenumber: "",
    gender: "",
    aadharnum: "",
    bday: "",
  }
  const basicRegistrationSchema = (values) => {
    const errors = {};
    if (!values.pan) {
       document.getElementById("pan").style.borderColor = "red"
      errors.pan = "Required";
    } else if (
      // !/^[A-Z0-9._%+-]+[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      values.pan.length > 10
    ) {
      errors.pan = "Invalid Pan Card Number Format";
    }
    if (!values.email) {
      document.getElementById("email").style.borderColor = "red"
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.firstname) {
      document.getElementById("firstname").style.borderColor = "red"
      errors.firstname = "Required";
      // document.getElementById("password").style.borderColor = "red"
    }
    else if(values.firstname.length  < 3){
    
      errors.firstname = "firstname must be 3 characters or more"
    }
    if (!values.middlename) {
      document.getElementById("middlename").style.borderColor = "red"
      errors.middlename = "Required";
      // document.getElementById("password").style.borderColor = "red"
    }
    else if(values.middlename.length  < 3){
    
      errors.firstname = "middlename must be 3 characters or more"
    }
    if (!values.lastname) {
      document.getElementById("lastname").style.borderColor = "red"
      errors.lastname = "Required";
       
    }
    else if(values.lastname.length  < 3){
      document.getElementById("lastname").style.borderColor = "red"
      errors.lastname = "lastname must be 3 characters or more"
    }
    if (!values.fathername) {
      document.getElementById("fathername").style.borderColor = "red"
      errors.fathername = "Required";
      
    }
    else if(values.fathername.length  < 3){
    
      errors.fathername = "fahtername must be 3 characters or more"
    }
    if (!values.aadharnum) {
      document.getElementById("aadharnum").style.borderColor = "red"
      errors.aadharnum = "Required";
      // document.getElementById("password").style.borderColor = "red"
    }
    else if(values.aadharnum.length  <= 12){
    
      errors.aadharnum = "Aadhar number must be 3 characters or more"
    }
    if (!values.mobilenumber) {
     document.getElementById("mobilenum").style.borderColor = "red"
      errors.mobilenumber = "Required";
      // document.getElementById("password").style.borderColor = "red"
    }
    else if(values.mobilenumber.length  > 10){
    
      errors.mobilenumber = "Aadhar number must be 3 characters or more"
    }
    if (!values.gender) {
      // document.getElementById("mobilenum").style.borderColor = "red"
       errors.gender = "Please Select One";
       // document.getElementById("password").style.borderColor = "red"
     }
     if(!values.bday){
       errors.bday = "Select Your Birthday"
     }
    // else if(values.password  != strongRegex ){
    //   errors.password = "Password is not strong enough"
    // }
  //  else if(!/\d/.test(values.password)){
  //    errors.password = "strong password"
  //  }
  //  if(values.confirm_password != values.password){
   
  //    errors.confirm_password = "password is not matching"
  //    document.getElementById("password_confirm").style.borderColor = "red"

  //  }
    return errors;
  }
  // console.log(intialData)
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUser({
  //     ...user, 
  //     [name]: value,
  //   });
  // // };
  // const onSubmitHandler = (e) => {
  //   e.preventDefault();
 
  //    store.dispatch({
  //      type: "ADD_DETAILS",
  //      payload: { 
  //        email: values.email,
  //        password: values.password,
  //      },
  //    });



// const Email = user.email;
// const Password = user.password
//      const ruser = {Email, Password }  
//      apiregister(user)
    //  if (Email && Password) {
    //    axios.post(process.env.REACT_APP_REGISTER_API_URL,ruser)
    //    //`${process.env.REACT_APP_REGISTER_API_URL}`,
    //      .then((res) => console.log(res));
    //  } else {
    //    alert("invalid input");
    //  }
  // };

 
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUser({
  //     ...user, 
  //     [name]: value,
  //   });
  // };
 return(
  <div>
    <Formik
    
      initialValues={intialData}
      validate={basicRegistrationSchema}
      onSubmit={(values, { setSubmitting }) => {
    const pan = values.pan;
    const email = values.email;
    const fathername = values.fathername
    const firsname = values.firstname;
    const middlename = values.middlename;
    const lastname = values.lastname;
    const mobilenum = values.mobilenumber;
    const aadharnum = values.aadharnum;
    const gender = values.gender;
    const bday = values.bday
    const basic = {pan,email,firsname,middlename,lastname,mobilenum,aadharnum ,fathername,gender,bday}
 
    basicuserdata(basic)
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
      
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="pan">
          <Form.Control
          // id="pan"
            type="pan"
            placeholder="PAN"
            name="pan"
            // value={values.pan}
            value={values.pan}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Group>
        <span style={{color:'red'}}>{errors.pan}</span>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          {/* <FormCalendar /> */}
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Control
            type="Email"
            placeholder="Email"
            name="email"
           value={values.email}
           onBlur={handleBlur}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
        <div style={{
          margin: 'auto',
          display: 'block',
          width: 'fit-content'
        }}>
  
          <TextField
            id="date"
            name="bday"
            value={values.bday}
            onChange={handleChange}
            label="Choose your birthdate"
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        </Form.Group>
        <span style={{color: "red"}}>{errors.bday}</span>
        <span style={{color:'red'}}>{errors.email}</span>
        <Form.Group className="mb-3" controlId="firstname">
          <Form.Control
            type="FirstName"
            placeholder="First Name"
            name="firstname"
            value={values.firstname}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </Form.Group>
        <span style={{color:'red'}}>{errors.firstname}</span>
        <Form.Group className="mb-3" controlId="middlename">
          <Form.Control
            type="MiddleName"
            placeholder="Middle Name"
            name="middlename"
            value={values.middlename}
            onBlur={handleBlur}
            onChange={handleChange}
          />
       </Form.Group>
       <span style={{color:'red'}}>{errors.middlename}</span>
        <Form.Group className="mb-3" controlId="lastname">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control
            type="LastName"
            placeholder="Last Name"
            name="lastname"
            value={values.lastname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Group>
        <span style={{color:'red'}}>{errors.lastname}</span>
        {/* <select className="mb-4" name="cars" id="cars">
          <optgroup label="Select">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </optgroup>
        </select> */}
        <Form.Group className="mb-3">
        <select
          className="w-100"
          name="gender"
          value={values.gender}
          onChange={handleChange}
          onBlur={handleBlur}
          // value={gender}
          // onChange={(e) => selectGender(e.target.value)}
        >
          
          <option value="" disabled>
            --Please choose an option--
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>  
        </select>
        <span style={{color: "red"}} >{errors.gender}</span>
        </Form.Group>
        <Form.Group className="mb-3" controlId="fathername">
          <Form.Control
            type="Father's Name"
            placeholder="Father's Name"
            value={values.fathername}
            name="fathername"
            onBlur={handleBlur}
            onChange={handleChange}
          />
          
        </Form.Group>
        <span style={{color:'red'}}>{errors.fathername}</span>
        <Form.Group className="mb-3" controlId="mobilenum">
          <Form.Control
            type="Number"
            placeholder="Mobile Number"
            name="mobilenumber"
            value={values.mobilenumber}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Group>
        <span style={{color:'red'}}>{errors.mobilenumber}</span>
        <Form.Group className="mb-3" controlId="aadharnum">
          <Form.Control
            type="Number"
            placeholder="12 digit Aadhar Number"
            name="aadharnum"
            maxlength="12"
            value={values.aadharnum}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Group>
        <span style={{color:'red'}}>{errors.aadharnum}</span>
{/* <button className="btn_1">Cancel</button> */}
        {/* <button className="btn_1" type="submit" >
          Submit
        </button> */}
    <button className="btn_4" type="submit" disabled={isSubmitting}>
            Submit
          </button>
      {/* type="submit" */}
      </form>
      )}
    </Formik>
  </div>
 )
  
      };

export default TestReg;
// export default BasicDetailForm;