import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "../reusableComponents/textField";
import Select from "../reusableComponents/select";
import Header from "../reusableComponents/header";
import Button from "../reusableComponents/button";
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
export default function Teacher(){
  const classes = useStyles();
  const phoneRegExp = /^[1-9]{1}[0-9]{9}$/;

  const schema = yup.object().shape(
    {
      name: yup.string().required('Name is required'),
      email:  yup.string().required('Email is required').email('invalid email address'),
      mobile_number: yup.string().required('This field is required').matches(phoneRegExp,'invalid phone number'),
      branch: yup.string().required('branch is required'),
      subject: yup.string().required('subject is required'),
      password: yup.string().required('Password is required').min(8, 'Password must be atleast 8 characters'),
    })
  const branch = [
        "Computer Science",
        "Electronics and Communication",
        "Civil",
        "Electrical",
      ];
  const subject = [
    "Python",
    "Automata",
    "English",
    "Civ",
    "Unix"
  ];
const formik = useFormik(
  {
    initialValues:{
      Name: "",
      Email: "",
      MobileNumber: "",
      branch: "",
      subject: "",
      Password: "",
    },
    validationSchema:schema,
    onSubmit:(data)=>{

       axios({
        //baseURL: 'http://api.my-awesome-app.com'  
        url:'http://127.0.0.1:5000/registerTeacher',
        method:'post',
        header:{'Content-Type':'application/json'},
        data:data
      }).then((response)=>{
       console.log(response);
       SuccessToast("Successfully registered Student");
      }).catch((error)=>{
        console.log(error);
      })
    }
  }

)
  return(
    console.log(formik),
    <form onSubmit={formik.handleSubmit}>
    <div>
      <center>
    <Header
    data="Teacher Register"
    color="#212121"
    bgColor="#ffc400"
    border="#ffa000"/>,
     <div className={classes.root}>
    <div>
       <TextField
       label="name"
       name="name"
       handleChange={formik.handleChange}
       value={formik.values.name}
       onBlur={formik.handleBlur}
       error={formik.errors.name}
       touched={formik.touched.name}/>,
       <TextField
       label="email"
       name="email"
       handleChange={formik.handleChange}
       value={formik.values.email}
       onBlur={formik.handleBlur}
       error={formik.errors.email}
       touched={formik.touched.email}/>,
       
    </div>
    <div>
      <TextField
         label="mobile_number"
         name="mobile_number"
         handleChange={formik.handleChange}
         value={formik.values.MobileNumber}
         onBlur={formik.handleBlur}
         error={formik.errors.mobile_number}
         touched={formik.touched.mobile_number}/>,
      <Select
        label="branch" 
        data={branch} 
        name="branch"
        handleChange={formik.handleChange}
        value={formik.values.branch}
        onBlur={formik.handleBlur}
        error={formik.errors.branch}
        touched={formik.touched.branch}/>
    </div>
    <div>
      <Select label="subject" 
       data={subject} 
       name="subject"
       handleChange={formik.handleChange}
       value={formik.values.subject}
       onBlur={formik.handleBlur}
       error={formik.errors.subject}
       touched={formik.touched.subject}/> 
      <TextField
       label="password"
       name="password"
       handleChange={formik.handleChange}
       value={formik.values.password}
       onBlur={formik.handleBlur}
       error={formik.errors.password}
       touched={formik.touched.password}/>
     
    </div>
      <Button 
        type="Submit" 
        title="Submit"
        isdisabled={!(formik.dirty && formik.isValid)}
        /> 
        <Link to='/RegStudent'><h5>back to Student_login</h5></Link>
        
        </div>
    </center>
    </div> 
    <ToastContainer/>
    </form>
  );

}