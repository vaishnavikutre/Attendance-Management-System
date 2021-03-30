import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Select from "../reusableComponents/select";
import TextField from "../reusableComponents/textField";
import Button from "../reusableComponents/button";
import Header from "../reusableComponents/header";
import {useFormik} from 'formik';
import * as yup from "yup";
import axios from "axios";
import SuccessToast from '../reusableComponents/successToast';
import {ToastContainer} from 'react-toastify';
import {Link} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
      root: {
        "& .MuiTextField-root": {
          margin: theme.spacing(2),
          width: 200,
        },
      },
    }));

export default function Login(){
  
  localStorage.setItem('IS_LOGGED_IN','false')
  console.log(localStorage.getItem('IS_LOGGED_IN'));
  const userType = [
   "student",
   "teacher",
   "admin"
  ];

  const schema = yup.object().shape(
    {
      username : yup.string().required('Name is required'),
      password : yup.string().required('Password is required'),
      userType : yup.string().required('userType is required'),
    }
  )
  const formik = useFormik(
    {
      initialValues:{
        username:"",
        password:"",
        userType:""
      },
      validationSchema:schema,
      onSubmit:(data)=>{
        axios({
        url:'http://127.0.0.1:5000/login',
        method:'post',
        headers:{'Content-Type':'application/json'},
        data:data
      }).then((res)=>{
       console.log(res)
       if(res.data.status===1)
       {
         localStorage.setItem('IS_LOGGED_IN','true')
         console.log(localStorage.getItem('IS_LOGGED_IN'));
       }
       else{
         localStorage.setItem('IS_LOGGED_IN','false')
       }
       //SuccessToast("Successfully Sing In");
      }).catch((error)=>{
        console.log(error);
        localStorage.setItem('IS_LOGGED_IN','false')
      })
      }
    }

  )

  const classes = useStyles();
  return(
    console.log(formik),
    <div>
   <center>
     <form onSubmit={formik.handleSubmit}>
    <Header
      data="Sign In"
      color="white"
      bgColor="#673ab7"
      border="#651fff"/>,
     <div className={classes.root}>
      <div>
      <TextField
        label="username"
        name="username"
        handleChange={formik.handleChange}
        values={formik.values.username}
        onBlur={formik.handleBlur}
        error={formik.errors.username}
        touched={formik.touched.username}
        />,
      </div>
      <div>
      <TextField
        label="password"
        name="password"
        handleChange={formik.handleChange}
        values={formik.values.password}
        onBlur={formik.handleBlur}
        error={formik.errors.password}
        touched={formik.touched.password}
        />,
      </div>
      <Select label="userType" 
        data={userType} 
        name="userType"
        handleChange={formik.handleChange}
        values={formik.values.userType}
        onBlur={formik.handleBlur}
        error={formik.errors.userType}
        touched={formik.touched.userType}/> 
      
      <Button 
       type="Submit" 
       title="Submit"
       isdisabled={!(formik.dirty && formik.isValid)}/> 

      <Link to='/RegStudent'><h5>Not registered?Sign Up</h5></Link>


     </div>
     </form>
   </center>
   <ToastContainer/>
   </div>
  );

}