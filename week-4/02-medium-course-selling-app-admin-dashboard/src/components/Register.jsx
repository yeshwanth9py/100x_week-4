import React from "react";
import {useNavigate} from "react-router-dom";



/// File is incomplete. You need to add input boxes to take input for users to register.
function Register() {
    const [email, setEmail] = React.useState("");
    const [pass, setPass] = React.useState("");
    const navigate = useNavigate();
    // noobda tricks
    // function pressenter(e){
    //     // console.log(e);
    //     if(e.key == "Enter"){
    //         console.log(e.target.value)
    //         fetch("http://localhost:3000/admin/signup",{
    //             method:"POST",
    //             headers: {
    //                 'Content-Type': 'application/json', // Set the Content-Type to indicate JSON data
    //             },
    //             body: JSON.stringify({
    //                 username: e.target.value,
    //                 password: "dummy"
    //             })
    //         }).then((resp)=>{
    //             console.log("sucecssgully posted")
    //         }).catch(()=>{
    //             console.log("error in fetching")
    //         })
    //     }

    // }
    // directly i called a function inside a component(that too or fetch) which is fine in react
    function submitDetails(){
        fetch("http://localhost:3000/admin/signup",{
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                username: email,
                password: pass
            })
        }).then((resp)=>{
            resp.json().then((data)=>{
                console.log(data)
                navigate("/")
            })
        }).catch((err)=>{
            console.log("some error occured")
        })
    }
    
    return <div>
        <h1>Register to the website</h1>
        <br/>
        email/username:-<input type={"text"} onChange={e => setEmail(e.target.value)} />
        <br/>
        <br/>
        password:-<input type="text" onChange={e => setPass(e.target.value)}/>{/* onKeyDown={pressenter} */}
        {/* in jsx both onChange and onInput work in the same way */}
        <br/>
        <button onClick={submitDetails}>submit</button>
        <br/>
        Already a user? <a href="/login">Login</a>
    </div>
}

export default Register;