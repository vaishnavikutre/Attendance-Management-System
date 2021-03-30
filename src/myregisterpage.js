// // import React from 'react';
// // import Input from './reusableComponents/input';
// // import "antd/dist/antd.css";
// // import Dropdown from './reusableComponents/dropdownAnt'
// // import Button from './reusableComponents/buttonant'
// import {useForm} from 'react-hook-form';

// export function App(props) {
  

//   const {register,handleSubmit,errors} = useForm();

//    const afterSubmit = (values) =>{
//      console.log("submitted");
//      console.log(values)
//    }
 
//   const branch = [
//     "Computer Science",
//     "Electronics and Communication",
//     "Civil",
//     "Electrical",
//   ];
//   const division = ["A", "B", "C", "D"];
//   const semester = [
//     "First",
//     "Second",
//     "Third",
//     "Fourth",
//     "Fifth",
//     "Sixth",
//     "Seven",
//     "Eight",
//   ];
//   const batches = ["2016", "2017", "2018", "2019", "2020"];

//   return (
//     <>
//       <div>
//         <form onSubmit={handleSubmit(afterSubmit)}>
//           <center>
//             <h1>Student Register</h1>
//             <div>
//               <Input label="Name" name="userName" refValue={register}></Input>
//               <Dropdown label="Branch" data={branch} name="branch" refValue={register}></Dropdown>
//             </div>
//             <div>
//               <Input label="Mobile Number" name="mobile" refValue={register} />
//               <Dropdown label="Division" data={division} name="division" refValue={register} />
//             </div>
//             <div>
//               <Input label="Email" />
//               <Dropdown label="Semester" data={semester} name="semester" refValue={register} />
//             </div>
//             <div>
//               <Input label="USN" name="usn" refValue={register}  />
//               <Dropdown label="Batch" data={batches} refValue={register} name="batch" />
//             </div>
//             <div>
//               <Input label="Password" name="password" refValue={register} />
//               <Input label="Confirm Password" name="confirmPassword" refValue={register} />
//             </div>
//             <div>
//               <Button type="submit" title="Submit" bgColor="orange"></Button>
//             </div>
//           </center>
//         </form>
//       </div>
//     </>
//   );
// }

// export default App;







// import React,{useState} from 'react';
// import Header from "./reusableComponents/header";
// import logo from "./reusableComponents/Beer-and-Wine.jpg";
// import TextField from "./reusableComponents/textField";
// import Button from "./reusableComponents/button";
// import {useFormik} from 'formik'
// import OnClick from './reusableComponents/Onclick';
// //import OnClick from './reusableComponents/Onclick'

// export default function Apps(props){
//   const [state,setState]=useState({OnClick:""})
//   const formik = useFormik(
//     {
//       initialValues:{
//         Age:'',
//       },
//       onSubmit: (data) => {
//         console.log(data)
//       },
  
//     }
//   )

  
    // return(<form onSubmit={formik.handleSubmit}>
//       <div>
//         <center>
        
//         <Header
//         data="THE BEER SHOP"
//         color="#212121"
//         bgColor="#ffc400"
//         border="#ffa000"
//         ></Header>
      
        
          
//           <img src={logo} alt={'img not fount'} hight='300' width='300'></img><br></br>
          
      
//         <div>
//         <TextField label='Name' name="Name" values={formik.values.Name} handleChange={formik.handleChange}></TextField>
//         <TextField label='Age' name="Age" values={formik.values.Age} handleChange={formik.handleChange}></TextField><br></br>
//         </div>
        
        
//          <Button type="submit" title="Submit" 
//           onClick={()=>setState({OnClick:<OnClick name="Age"  values={formik.values.Age} handleChange={formik.handleChange} ></OnClick>})}>Submit</Button><br></br>
//          <p>{state.OnClick}</p>
        
         
       
        
//       </center>
//       </div>
//     </form>
//     );
// }










return (
    <div>
    <form onSubmit={formik.handleSubmit}>
    <center>
      {/* <div
        style={{
          width: 700,
          backgroundColor: "#fafafa",
          padding: 10,
          borderRadius: 10,
        }}
      > */}
        <div>
          <Header
            data="Student Register"
            color="#212121"
            bgColor="#ffc400"
            border="#ffa000"
          ></Header>
        </div>
        <div className={classes.root}>
          <div>
            <TextField label="Name" name="userName"  value={formik.values.userName}  handleChange={formik.handleChange}/>
            <TextField label="Email" name="email" value={formik.values.email} handleChange={formik.handleChange}/>
          </div>
          <div>
            <TextField label="Mobile Number" name="mobile" value={formik.values.mobile} handleChange={formik.handleChange }/>
            <TextField label="USN" name="usn" value={formik.values.usn} handleChange={formik.handleChange} />
          </div>
          <div>
            <Select label="Branch" data={branch} name="branch" value={formik.values.branch} handleChange={formik.handleChange} />
            <Select label="Semester" data={semester} name="semester" value={formik.values.semester} handleChange={formik.handleChange} />
          </div>
          <div>
            <Select label="Division" data={division} name="division" value={formik.values.division} handleChange={formik.handleChange}/>
            <Select label="Batch" data={batches} name="batch" value={formik.values.batch} handleChange={formik.handleChange}/>
          </div>
          <div>
            <TextField label="Password" name="password" value={formik.values.password} handleChange={formik.handleChange} />
            <TextField label="Confirm Password" name="confirmPassword" value={formik.values.confirmPassword} handleChange={formik.handleChange}/>
          </div>
        </div>
        <Button type="submit" title="Submit"  bgColor="orange"/>
      </div>
    </center>
    </form>
    </div>
);
}







/ import { makeStyles } from "@material-ui/core/styles";
// import TextField from "./reusableComponents/textField";
// import Select from "./reusableComponents/select";
// import Header from "./reusableComponents/header";
// import Button from "./reusableComponents/button";
//  //import {useForm} from 'react-hook-form';
// import {useFormik} from 'formik';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& .MuiTextField-root": {
//       margin: theme.spacing(2),
//       width: 200,
//     },
//   },
// }));

// export default function TextFieldSizes() {
//   const classes = useStyles();

//  // const {register,handleSubmit,errors} = useForm();

//   const afterSubmit = (values) =>{
//     console.log("submitted");
//     console.log(values)
//   }

//   const branch = [
//     "Computer Science",
//     "Electronics and Communication",
//     "Civil",
//     "Electrical",
//   ];
//   const division = ["A", "B", "C", "D"];
//   const semester = [
//     "First",
//     "Second",
//     "Third",
//     "Fourth",
//     "Fifth",
//     "Sixth",
//     "Seven",
//     "Eight",
//   ];
//   const batches = ["2016", "2017", "2018", "2019", "2020"];

//   // #formik
//   const formik =useFormik(
//     {
//       initialValues:{
//         userName : "",
//         email : "",
//         batch :"",
//            mobile:"",
//           usn:"",
//           branch:"",
//           semester:"",
//           division:"",
//           password:"",
//           confirmPasword:""


//       },
//       onSubmit : (data)=>{
//         console.log(data);
//       }
//     }
//   )
// return(
//   <div>
//     <form onSubmit={formik.handleSubmit}>
//     <center>

//     </center>                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
//   </form>
//   </div>
// );
// }

























import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import TextField from "./reusableComponents/textField";
import Select from "./reusableComponents/select";
import Header from "./reusableComponents/header";
import Button from "./reusableComponents/button";
import {useFormik} from 'formik';
//import * as yup from "yup";
//import axios from "axios"

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: 200,
    },
  },
}));

export default function TextFieldSizes() {
  const classes = useStyles();
//   const phoneRegExp = /^[0][1-9]{1}[0-9]{9}$/;

//  const {register,handleSubmit,errors} = useForm();

  //   const schema = yup.object().shape({
  //   name : yup.string().required('Name is required field'),
  //   email : yup.string().required('This field is required').email('Invalid email address'),
  //   batch : yup.string().required('This field is required'),
  //   mobile : yup.string().required('This field is required').matches(phoneRegExp,'invalid phone number'),
  //   usn : yup.string().required("This field is required"),
  //   branch : yup.string().required("This field is required"),
  //   semester : yup.string().required("This field is required"),
  //   division : yup.string().required("This field is required"),
  //   password : yup.string().required("This field is required").min(8, "passwoed must be atleast 8 character"),
  //   confirmPasword : yup.string().required("This field is required"),


  // })

  const Branch = [
    "Computer Science",
    "Electronics and Communication",
    "Civil",
    "Electrical",
  ];
  const Division = ["A", "B", "C", "D"];
  const Semester = [
    "First",
    "Second",
    "Third",
    "Fourth",
    "Fifth",
    "Sixth",
    "Seven",
    "Eight",
  ];
  const Batch = ["2016", "2017", "2018", "2019", "2020"];

  // #formik
  const formik =useFormik(
    {
      initialValues:{
        Name : "",
        Email : "",
        batch :"",
        MobileNumber:"",
        USN:"",
        Branch:"",
        Semester:"",
        Division:"",
        Password:"",
        ConfirmPasword:""


      },
      //validationSchema:schema,
      onSubmit : (data)=>{
        console.log(data);
      }
    }
  )
  return(
    console.log(formik),
    <div>
      <form onSubmit={formik.handleSubmit}>
      <center>
      <div>
        <Header
          data="Student Register"
          color="#212121"
          bgColor="#ffc400"
          border="#ffa000"
        ></Header>
      <div className={classes.root}>
      <div>
        <TextField 
          label="Name"
          name="Name"
          values={formik.values.Name}  
          onChange={formik.handleChange} 
          // onBlur={formik.handleBlur}
          // error={formik.errors.Name}
          // touched={formik.touched.Name}
        />
        <TextField 
          label="Email" 
          name="Email" 
          values={formik.values.Email} 
          onChange={formik.handleChange} 
          //onBlur={formik.handleBlur} 
         // error={formik.errors.Email} 
          //touched={formik.touched.Email}
          />
      </div>
      <div>
        <TextField 
          label="MobileNumber" 
          name="MobileNumber"
          values={formik.values.MobileNumber} 
          // onChange={formik.handleChange } 
          // onBlur={formik.handleBlur} 
          // error={formik.errors.MobileNumber} 
          // touched={formik.touched.MobileNumber}
        />
        <TextField 
          label="USN" 
          name="USN" 
          values={formik.values.USN} 
          // onChange={formik.handleChange} 
          // onBlur={formik.handleBlur} 
          // error={formik.errors.USN} 
          // touched={formik.touched.USN}
        />
      </div>
      <div>
        <Select 
          label="Branch" 
          data={Branch} 
          name="Branch" 
          values={formik.values.Branch} 
          // onChange={formik.handleChange} 
          // onBlur={formik.handleBlur}
          // error={formik.errors.Branch} 
          // touched={formik.touched.Branch}
        />
        <Select 
          label="Semester" 
          data={Semester} 
          name="Semester" 
          values={formik.values.Semester} 
          // onChange={formik.handleChange} 
          // onBlur={formik.handleBlur} 
          // error={formik.errors.Semester} 
          // touched={formik.touched.Semester}
        />
      </div>
      <div>
        <Select 
          label="Division" 
          data={Division} 
          name="Division" 
          values={formik.values.Division} 
          // onChange={formik.handleChange} 
          // onBlur={formik.handleBlur} 
          // error={formik.errors.Division} 
          // touched={formik.touched.Division}
        />
        <Select 
          label="Batch" 
          data={Batch} 
          name="Batch" 
          values={formik.values.Batch} 
          onChange={formik.handleChange} 
          // onBlur={formik.handleBlur} 
          // error={formik.errors.Batch} 
          // touched={formik.touched.Batch}
        />
      </div>
      <div>
        <TextField 
          label="Password" 
          name="Password" 
          values={formik.values.Password} 
          onChange={formik.handleChange} 
          // onBlur={formik.handleBlur} 
          // error={formik.errors.Password} 
          // touched={formik.touched.Password}
        />
        <TextField 
          label="ConfirmPassword" 
          name="ConfirmPassword"
          values={formik.values.ConfirmPassword} 
          onChange={formik.handleChange} 
          // onBlur={formik.handleBlur} 
          // error={formik.errors.ConfirmPassword} 
          // touched={formik.touched.ConfirmPassword}
        />
      </div>
      </div>
        <Button 
          type="Submit" 
          title="Submit" 
          bgColor="orange" 
          name="Submit" />
      </div>

    </center>
    </form>
    </div>
      
  );
  }



  //api
  app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'



@app.route('/register',methods=['POST'])
def Register():
   data=request.get_json()
   print(data)
   return "200ok"

@app.route('/registerStudent',methods=['POST'])
def registerStudent():
   data=request.get_json()
   name=data['name']
   usn=data['usn']
   division=data['division']
   sem=data['sem']
   branch=data['branch']
   mobile_number=data['mobile_number']
   password=data['password']
   batch=data['batch']
   email=data['email']
   sqlQuery="insert into student (name,usn,division,sem,branch,mobile_number,email,password,batch) values(%s,%s,%s,%s,%s,%s,%s,%s,%s)"
   values=(name,usn,division,sem,branch,mobile_number,email,password,batch) 
   curs.execute(sqlQuery,values)
   conn.commit()
   return jsonify({"message":"success"})


@app.route('/registerTeacher',methods=['POST'])
def registerTeacher():
    data=request.get_json()
   
    print(data)
    name=data['name']
    email=data['email']
    mobile_number=data['mobile_number']
    branch=data['branch']
    subject=data['subject']
    password=data['password']
    sqlQuery="insert into teacher (name,email,mobile_number,branch,subject,password) values(%s,%s,%s,%s,%s,%s)"
    values=(name,email,mobile_number,branch,subject,password) 
    curs.execute(sqlQuery,values)
    conn.commit()
    return jsonify({"message":"success",})

@app.route('/login', methods=['POST'])
def login():
    user = request.get_json()['username']
    password = request.get_json()['password']
    userType = request.get_json()['userType']
    if userType == 'admin':
        sqlQuery = "select * from admin where name=%s and password=%s"
        values=(user,password)
        curs.execute(sqlQuery,values)
        if (curs.rowcount>0):
           return jsonify({"message":"valid user"})
        else:
            return jsonify({"message":"invalid username or password"})
    elif userType == 'student':
        sqlQuery = "select * from student where name =%s and password=%s"
        values=(user,password)
        curs.execute(sqlQuery,values)
        if (curs.rowcount>0):
           return jsonify({"message":"valid Student"})
        else:
            return jsonify({"message":"invalid username or password"})
    else:
        sqlQuery = "select * from teacher where name=%s and password=%s"
        values=(user,password)
        curs.execute(sqlQuery,values)
        if (curs.rowcount>0):
           return jsonify({"message":"valid Faculty"})
        else:
            return jsonify({"message":"invalid username or password"})

            
    return jsonify({"message":"success"})
if __name__ == '__main__':
    app.run(port=5000,debug=True)

