import React from 'react';
import { Select } from 'antd';
const { Option } = Select;
 


export default function Dropdownant(props) {
    

    return (
        <>
        <Select placeholder="semester" size="large" style={{width:300,margin:5,boader:"2px solid grey"}}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="tom">Tom</Option>
        </Select>
            
        </>
    )
}