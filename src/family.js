import React, {useState} from 'react'
export default function Familys() {
    const [name , setname] = useState({
                                          'My_name':"",
                                          'Father_name':"",
                                          'Mother_name':"",
                                          'Sister_name':"",
                                        })
    return (
        <div>
            <center>
                <h1>My name is:  {name.My_name}</h1>
                <h1>My Father_name is: {name.Father_name}</h1>
                <h1>MY Mother_name is: {name.Mother_name}</h1>
                <h1>My Sister_name is : {name.Sister_name}</h1>
                <button onClick ={() =>setname({'My_name':"VAISHNAVI",
                                            'Father_name':"BALKRISHNA",
                                            'Mother_name':"MILAN",
                                            'Sister_name':"BHAGYASHREE"})}>
                       NAMES
                </button>
                <button onClick={() =>setname({
                                              'My_name':"",
                                              'Father_name':"",
                                              'Mother_name':"",
                                              'Sister_name':""})}>
                      RESET
                                              </button>
 
            </center>
        </div>
    )
}


// import React, {useState} from 'react';
// import Familys from './family';
// function Family(){
//    return(
//    <Familys/>
//    );
// }
// export default Family;



//  import React from "react";
// import LoginHeader from './loginHeader';
// //import InputField from './inputField';
// //import Buttons from './Button';
// import Selector from './selector';
// import Bottons from './stylebutton';
// import Style from './nextinputfield';
// function App(props){
//    return(
//       <div>
//          <LoginHeader/>,
//          <Style title="Full Name"/>,
//          <Style title="Usn"/>,
//          <Style title="Email"/>,
//          <Style title="Password"/>,
//          <Selector title="division" />,
//          <Selector title="BRANCH"/>,
//          <Selector title="SUBJECTS"/>,
//          <Bottons title ="submit"/>
//        </div>

//    );}
// export default App;
// import React, {useState} from 'react';
// import Familys from './family';
// function Family(){
//    return(
//    <Familys/>
//    );
// }
// export default Family;
