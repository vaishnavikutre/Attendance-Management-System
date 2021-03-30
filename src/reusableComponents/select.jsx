import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';



export default function SimpleSelect(props) {


    return (
            <TextField
                select
                label={props.label}
                //   helperText="Please select your currency"
                variant="outlined"
                name={props.name}
                value={props.values}
                onChange={props.handleChange}
                error={props.touched && props.error ? true : false}
                onBlur={props.onBlur}
                helperText={props.touched && props.error ? props.error : ""}
            >
               {
                props.data.map((element)=><MenuItem key={element} value={element}>{element}</MenuItem>)

               }
            </TextField>
    );
}
