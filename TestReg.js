import React from "react";
import { Formik,Field } from "formik";
import * as Yup from 'yup';
import { Input } from "@material-ui/core";
import MyGoolgeLogin from "../GoogleLogin/GoolgeLogin";
import Facebook from "../GoogleLogin/FacebookLogin";
import { useState } from "react";
import store from "../../Store";
import { apiregister } from "../../services/AuthApi";



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
    email: "",
   password: "",
    confirm_password: "" 
  }
  const registrationSchema = (values) => {
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
  }
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

  const [user, setUser] = useState({
    email: "",
    password: "",
    // confirm_password: ""
  });
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
      
      // validationSchema={Schema}
      validate={registrationSchema}
      onSubmit={(values, { setSubmitting }) => {
        // store.dispatch({
        //   type: "ADD_DETAILS",
        //   payload: { 
        //     email: values.email,
        //     password: values.password,
        //   },
        // });
        console.log(
          store.dispatch({
            type: "ADD_DETAILS",
            payload: { 
              email: values.email,
              password: values.password,
            },
          })
        )
        const email = values.email;
const password = values.password
       const ruser = {email, password }  
       apiregister(ruser)
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
        <form className="TestForm" onSubmit={handleSubmit} >
          <div className="fb_login">
         <div className="fb">
           <Facebook />
         </div>
         <div className="ggl">
           <MyGoolgeLogin />
         </div>
         </div>
         <div className="OR_1">
         <h6>
           OR
         </h6>
       </div>
          <input
            className="Tes_inp"
           id="email"
         
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          
          />
          {/* <Field
          className="Tes_inp"
          id="email"
         type="email"
           name="email"
        
         /> */}
          <br />
       <span style={{color: "red"}}>{ errors.email}</span>
          <br />
          <input
          className="Tes_inp"
          id="password"
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {/* <Field
            className="Tes_inp"
            id="password"
              type="password"
              name="password"
          /> */}
          <br />
          {/* <p style={{color:"red"}}>{errors.password }</p> */}
          <span style={{color:"red"}}>{errors.password }</span>
          <br />
          <input
          className="Tes_inp"
          id="password_confirm"
              type="confirm_password"
              name="confirm_password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.confirm_password}
            />
            {/* <Field
             className="Tes_inp"
             id="password_confirm"
                 type="confirm_password"
                 name="confirm_password"
            /> */}
            <br/>
            <span class="error" style={{ color: "red" }}>
              {errors.confirm_password}
            </span>
            <br/>
          <button className="btn_4" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
 )
  
      };

export default TestReg;