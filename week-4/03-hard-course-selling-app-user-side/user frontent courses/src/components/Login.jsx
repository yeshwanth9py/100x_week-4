import React, {useState} from 'react'
import {Button, TextField} from '@mui/material';
import {useNavigate} from "react-router-dom"


const Login = () => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const navigate = useNavigate();

  function logino(){
    fetch("http://localhost:3000/users/login",{
      method: "POST",
      headers: {
        username: user,
        password: pass
      }
    }).then((resp)=>{
      resp.json().then((data)=>{
        console.log(data)
        localStorage.setItem("user", data.token);
        navigate("/courses")
      })
    })
  }

  return (
    <div>
      Login:-
      username:-<TextField id="outlined-basic" label="Outlined" variant="outlined" type="text" onChange={(e)=>setUser(e.target.value)}/>
      {/* username:-<input type="text" onChange={(e)=>setUser(e.target.value)}/> */}
      {/* password:-<input type="text" onChange={(e)=>setPass(e.target.value)}/> */}
      password:-<TextField id="outlined-basic" label="Outlined" variant="outlined" type="text" onChange={(e)=>setUser(e.target.value)}/>
      <Button variant="contained" onClick={logino}>Contained</Button>
      {/* <button onClick={logino}>login</button> */}
    </div>
  )
}

export default Login