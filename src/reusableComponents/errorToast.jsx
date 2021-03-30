import React from 'react'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function ErrorToast(props) {
    return (toast.error("something went wrong"),{
        position:"top-right",
        autoClose:4000,
    })
}
