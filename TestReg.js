import React from "react";
import { Formik } from "formik";
import * as Yup from 'yup';
import { Input } from "@material-ui/core";



const Schema = Yup.object().shape({
  password: Yup.string().required("This field is required"),
  changepassword: Yup.string().when("password", {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Both password need to be the same"
    )
  })
});
const TestReg = () => (
 
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
    
      initialValues={{ email: "", password: "", confirm_password: "" }}
      validationSchema={Schema}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          document.getElementById("email").style.borderColor = "red"
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        if (!values.password) {
          errors.password = "Required";
          document.getElementById("password").style.borderColor = "red"
        }
        else if(values.password.length  > 20){
        
          errors.password = "password must be 20 characters or less"
        }
        // else if(values.password  != strongRegex ){
        //   errors.password = "Password is not strong enough"
        // }
       else if(!/\d/.test(values.password)){
         errors.password = "strong password"
       }
       if(values.confirm_password != values.password){
       
         errors.confirm_password = "password is not matching"
         document.getElementById("password_confirm").style.borderColor = "red"

       }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
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
          <input
          id="email"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          
          />
          <br />
       <span style={{color: "red"}}>{ errors.email}</span>
          <br />
          <input
          id="password"
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <br />
          {/* <p style={{color:"red"}}>{errors.password }</p> */}
          <span style={{color:"red"}}>{errors.password }</span>
          <br />
          <input
          id="password_confirm"
              type="confirm_password"
              name="confirm_password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.confirm_password}
            />
            <br/>
            <span class="error" style={{ color: "red" }}>
              {errors.confirm_password}
            </span>
            <br/>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
  
);

export default TestReg;