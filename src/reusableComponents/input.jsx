import React from 'react';
import { Input } from 'antd';
//import React from 'react';



import mysql.connector
import Password from 'antd/lib/input/Password';
 as mysql
conn=mysql.connect(
    host='localhost',
    user='root',
    Password='',
    database='attendence'
)
curs=conn.cursor()


export function TextField(props) {
    

    return (
        <>
        
           
            <Input 
            placeholder="Basic usage" 
            size="large" 
            style={{width:300,margin:5, boader:"2px solid grey"}}/>,
        
        </>
    )
}
export default TextField;
