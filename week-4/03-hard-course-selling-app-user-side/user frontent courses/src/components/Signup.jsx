import React,{useState} from 'react'
import {Button, TextField} from '@mui/material';
import {useNavigate} from "react-router-dom"

const Signup = () => {
  const [name, setName] = useState("")
  const [pass, setPass] = useState("")
  const navigate = useNavigate();

  function submitdetails(){
    fetch("http://localhost:3000/users/signup",{
      method: "POST",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify({
        username: name,
        password: pass
      })
    }).then((resp)=>{
      resp.json().then((data)=>{
        console.log("umma token",data)
        localStorage.setItem("user", data.token)
        navigate("/courses")
      })
    })
  }

  return (
    <div>
      signup:-
      username:-<TextField id="filled-basic" label="Filled" variant="filled" onChange={(e)=>setName(e.target.value)}/>
      {/* <input type="text" onChange={(e)=>setName(e.target.value)}/> */}
      Password:-<TextField id="filled-basic" label="Filled" variant="filled" type="text" onChange={(e)=>setPass(e.target.value)}/>
       {/* <input type="text" onChange={(e)=>setPass(e.target.value)}/> */}
      {/* <button onClick={submitdetails}>submit</button> */}
      <Button variant="contained" onClick={submitdetails}>Contained</Button>
    </div>
  )
}

export default Signup