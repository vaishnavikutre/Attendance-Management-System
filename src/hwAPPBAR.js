import React,{useState} from 'react';
import Loaders from './loaderComp';
import Tables from './tableComp';
import Appbars from './appComp';
//import Style from './stylebutton';


export default function App(props) {
   const [state, setstate] = useState({
                                               'Table':"",
                                               'Loader':"",
                                               'Appbar':""
                                             })
   return (
      <div>
         <center>
            <h1>{state.Table}</h1>
            <h1>{state.Loader}</h1>
            <h1>{state.Appbar}</h1>
         
            <button onClick={()=>setstate({
               'Table':<Tables></Tables>,
            })}>Table</button>
            <button onClick={()=>setstate({
               'Loader':<Loaders></Loaders>,
            })}>Loader</button>
            <button onClick={()=>setstate({
               'Appbar':<Appbars></Appbars>,
            })}>Appbar</button>
            
           <button onClick={()=>setstate({
               'Table':"",
               'Loader':"",
               'Appbar':""
            })}>Reset</button>
            </center>
      </div>
   );
}




// import React,{useState} from 'react';
// import Appbars from './appbarComp';
// //import Card from './cards';


// export default function App(props) {
//    const [state, setstate] = useState(0)
//    return (
//       <div>
//          <center>
//             <Appbars title="Shopping Card">Shopping Cart</Appbars>
            
            
//             <button onClick={()=>setstate(state+1)}>Add item</button>
           
//          </center>  
//       </div>     
//    );
// }


// import React,{useState} from 'react';
// import Appbars from './appComp';
// import Cards from './cards';
// //import Card from './cards';


// export default function App(props) {
//    return (
//       <div>
//          <center>
//             <Appbars title="Shopping Card">Shopping Cart</Appbars>
//             <h1>Cart Items:{state}</h1>
//             <Cards title="Samsung Mobile"></Cards><Cards></Cards>
//             <Cards title="Apple Mobile"></Cards>
//             <Cards title="Nokia Mobile"></Cards>
//          </center>  
//       </div>     
//    );
// }










//my register page
// import React from "react";
// import LoginHeader from './loginHeader';
// //import InputField from './inputField';
// //import Buttons from './Button';
// import Selector from './selector';
// import Bottons from './stylebutton';
// import Style from './nextinputfield';
// import Styless from './usableComponents/password';
// import {useForm} from 'react-hook-form'
// function App(props) {
//    const division = ["A", "B", "C", "D", "E"]
//    const subject = ["Java", "C", "DBMS", "Python"]
//    const branch = ["CSE", "Mech", "BCA"]
//    const semester = ["FIRST", "SECOND", "THIRD", "FOURTH", "FIFTH"]


//    const {register,handleSubmit,errors}=useForm();
//    const afterSubmit=(data)=>{
//       console.log(data)
//       console.log("Submited")
//    }

//    return (
//       <div>
         
//              <form onSubmit ={handleSubmit(afterSubmit)}>
//             <LoginHeader/>,
//                   <div>
//                   <Style title="Full Name" name="username" refValue={register} />,
//                   <Style title="Usn"name="usn" refValue={register} />,
//                   <Style title="Email" name="email" refValue={register}/>,
//                   </div>
//                   <div>
//                      <center>
//                   <Selector title="BRANCH" placeholder="branch" data={branch} name="branch" refValue={register} /><br></br>
//                   <Selector title="division" data={division} name="division" refValue={register}/><br></br>
//                   </center>
//                   </div>
//                   <div>
//                      <center>
//                     <Selector title="Semister" data={semester} name="sem" refValue={register}/><br></br>
//                     <Selector title="SUBJECTS" data={subject} name="sub" refValue={register}/><br></br>
//                     </center>
//                   </div>
               
//                   <div>
//                      <Styless title="Password" name="password" refValue={register} />,
//                     <Styless title="Confirm Password" name="confirmpass" refValue={register} />,
//                     <Bottons type="submit" />
//                    </div>
            
//                    </form>
      
//           </div>

//    );
// }
// export default App;







