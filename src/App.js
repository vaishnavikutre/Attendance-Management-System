 import React from 'react'

 import StudentReg from './pages/studentregister'
 import TeacherReg from './pages/teacherReg'
 import Login from './pages/loginas'
 import StudentDash from './pages/studentDash'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
 function App() {
   //browserRouter wraps all the routers
   //route helps you to display any comp based on url
   //Link helps you to link filesnsame as 'a' tag
   //Switch stops matching all urls

   //localstorage or cookies or sessions
   return (
     <>
              <Router>
                <Switch>
                  <Route exact path='/' component={Login}/>
                  <Route exact path='/RegStudent' component={StudentReg}/>
                  <Route exact path='/RegTeacher' component={TeacherReg}/>
                  <Route exact path='/StudentDashboard' component={StudentDash}/>
                  
                </Switch>
              </Router>
     </>
   );
 }
 
 export default App
 