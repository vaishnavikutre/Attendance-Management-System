import React from 'react'
import {Redirect} from 'react-router-dom'
export function Homepage(props) { 
    let isValid = localStorage.getItem('IS_LOGGED_IN');
    console.log(isValid);
    if(isValid==='false')
    {
        return (<Redirect to='/'/>);
    }
    else{
        return (
            <>
               <center><h1>Student dashboard</h1></center> 
            </>
        )
    }
   
}
export default Homepage;