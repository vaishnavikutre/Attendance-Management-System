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

 export default function Studentregister(){
   const phoneRegExp = /^[1-9]{1}[0-9]{9}$/;
  const classes = useStyles();
   const schema = yup.object().shape(
     {
       name:  yup.string().required('Name is required'),
       email:  yup.string().required('Email is required').email('invalid email address'),
       mobile_number: yup.string().required('This field is required').matches(phoneRegExp,'invalid phone number'),
       usn:  yup.string().required('USN is required'),
       branch:  yup.string().required('Branch is required'),
       sem:  yup.string().required('Semester is required'),
       division:  yup.string().required('Division is required'),
       batch:  yup.string().required('Batch is required'),
       password:  yup.string().required('Password is required').min(8, 'Password must be atleast 8 characters'),
     }
   )
   const branch = [
     "Computer Science",
     "Electronics and Communication",
     "Civil",
     "Electrical",
   ];
   const division = ["A", "B", "C", "D"];
   const sem = [
     "First",
     "Second",
     "Third",
     "Fourth",
     "Fifth",
     "Sixth",
    "Seven",
     "Eight",
  ];
   const batch = ["2016", "2017", "2018", "2019", "2020"];
   const formik =useFormik(
     {
       initialValues:{
        name: "",
        email: "",
        mobile_number:"",
        usn:"",
        branch:"",
        sem:"",
        division:"",
        batch :"",
        password:"",
        


      },
      validationSchema:schema,
      onSubmit : (data)=>{
        axios({
         
        url:'http://127.0.0.1:5000/registerStudent',
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
    <div className={classes.root}>
      <center>
       <Header
          data="Student Register"
          color="#212121"
          bgColor="#ffc400"
          border="#ffa000"
        ></Header>
      <div>
        <TextField 
          label="name"
          name="name"
          value={formik.values.name}  
          handleChange={formik.handleChange} 
          onBlur={formik.handleBlur}
          error={formik.errors.name}
          touched={formik.touched.name}
        />
        <TextField 
          label="email" 
          name="email" 
          value={formik.values.email} 
          handleChange={formik.handleChange} 
          onBlur={formik.handleBlur} 
          error={formik.errors.email} 
          touched={formik.touched.email}
          />
      </div>
      <div>
        <TextField 
          label="mobile_number" 
          name="mobile_number"
          value={formik.values.mobile_number} 
          handleChange={formik.handleChange } 
          onBlur={formik.handleBlur} 
          error={formik.errors.mobile_number} 
          touched={formik.touched.mobile_number}
        />
        <TextField 
          label="usn" 
          name="usn" 
          value={formik.values.usn} 
          handleChange={formik.handleChange} 
          onBlur={formik.handleBlur} 
          error={formik.errors.usn} 
          touched={formik.touched.usn}
        />
      </div>
      <div>
        <Select 
          label="branch" 
          data={branch} 
          name="branch" 
          value={formik.values.branch} 
          handleChange={formik.handleChange} 
          onBlur={formik.handleBlur}
          error={formik.errors.branch} 
          touched={formik.touched.branch}
        />
        <Select 
          label="sem" 
          data={sem} 
          name="sem" 
          value={formik.values.sem} 
          handleChange={formik.handleChange} 
          onBlur={formik.handleBlur} 
          error={formik.errors.sem} 
          touched={formik.touched.sem}
        />
      </div>
      <div>
        <Select 
          label="division" 
          data={division} 
          name="division" 
          value={formik.values.division} 
          handleChange={formik.handleChange} 
          onBlur={formik.handleBlur} 
          error={formik.errors.division} 
          touched={formik.touched.division}
        />
        <Select 
          label="batch" 
          data={batch} 
          name="batch" 
          value={formik.values.batch} 
          handleChange={formik.handleChange} 
          onBlur={formik.handleBlur} 
          error={formik.errors.batch} 
          touched={formik.touched.batch}
        />
      </div>
      <div>
      <TextField
       label="password"
       name="password"
       handleChange={formik.handleChange}
       value={formik.values.password}
       onBlur={formik.handleBlur}
       error={formik.errors.password}
       touched={formik.touched.password}/>
      </div>
      <div>
        <Button 
          type="Submit" 
          title="Submit" 
          isdisabled={!(formik.dirty && formik.isValid)}
          />
        <Link to='/RegTeacher'><h5>Register as Teacher</h5></Link>
        <Link to='/'><h5>back</h5></Link>
      </div>
      </center>
    </div>
    <ToastContainer/>
    </form>
    
  );
}