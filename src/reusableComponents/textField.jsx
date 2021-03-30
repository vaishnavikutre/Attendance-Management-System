import React from "react";
import TextField from "@material-ui/core/TextField";



export default function BasicTextFields(props) {
  return (
    <TextField
      error={props.touched && props.error ? true : false}
      label={props.label}
      variant="outlined"
      style={{color:"black"}}
      name={props.name}
      helperText={props.touched && props.error ? props.error : ""}
      value={props.values}
      onChange={props.handleChange}
      onBlur={props.onBlur}
       />
  );
}
