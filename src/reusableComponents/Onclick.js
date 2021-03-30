import React from 'react'

export default function OnClick(props){
  return(
<h2
 style={{color: 'black'}}
  onChange={props.onChange}>
      {
          props.values>=18 ? "enjoy ur drink" : "ur to small"
      }
 </h2>

  )
}