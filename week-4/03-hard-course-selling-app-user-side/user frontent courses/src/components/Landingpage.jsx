import React from 'react'
import {Button} from '@mui/material';
import Signup from './Signup'
import Login from './Login'
import {useNavigate} from "react-router-dom"

const Landingpage = () => {
  const navigate = useNavigate()
  return (
    <div>
      Landingpage
      <br />
      {/* <button onClick={()=>navigate("/signup")}>signup</button> */}
      <Button variant="contained" onClick={()=>navigate("/signup")}>signup</Button>
      {/* <button onClick={()=>navigate("/login")}>login</button> */}
      <Button variant="outlined" onClick={()=>navigate("/login")}>login</Button>
      {/* <button onClick={()=>navigate("/courses")}>got to all courses</button> */}
      <Button variant="contained" onClick={()=>navigate("/courses")}>got to all courses</Button>
    </div>
  )
}

export default Landingpage