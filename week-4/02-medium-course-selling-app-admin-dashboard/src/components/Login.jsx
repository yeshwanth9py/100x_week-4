import React from "react";
import { useNavigate } from "react-router-dom";

/// File is incomplete. You need to add input boxes to take input for users to login.
function Login() {
    const [email, setEmail] = React.useState("");
    const [pass, setPass] = React.useState("");
    const navigate = useNavigate()
    function login(){
        console.log(email,pass)
        fetch("http://localhost:3000/admin/login",{
            method:"POST",
            headers:{
                "username": email,
                "password": pass,
            },
        }).then((resp)=>{
            console.log(resp)
            resp.json().then((data)=>{
                console.log(data, "must store in localhost");
                localStorage.setItem("admin",data.token)
                navigate("/")
            })
        })
    }


    return <div>
        <h1>Login to admin dashboard</h1>
        <br/>
        Email - <input type={"text"} onChange={e => setEmail(e.target.value)} />
        <br/>
        password - <input type={"text"} onChange={e => setPass(e.target.value)} />
        <button onClick={login}>Login</button>
        <br/>
        New here? <a href="/register">Register</a>
    </div>
}

export default Login;