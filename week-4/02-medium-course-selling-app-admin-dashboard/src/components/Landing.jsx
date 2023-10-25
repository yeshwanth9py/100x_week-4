
import React from "react";
import {useNavigate} from "react-router-dom"
/// This is the landing page. You need to add a link to the login page here.
/// Maybe also check from the backend if the user is already logged in and then show them a logout button
/// Logging a user out is as simple as deleting the token from the local storage.
function Landing() {
    const navigate= useNavigate();
    const [token, setToken] = React.useState(localStorage.getItem("admin") || false)
    React.useEffect(() => {
        fetch("http://localhost:3000/admin/courses", {
            method: "GET",
            headers: {
                authorization: "some" + " " + token
            }
        }).then(() => {
            console.log(token, "user succ logged in")
        }).catch(() => {
            console.log("user not found")
        });
    }, [])
    return <div>
        <h1>Welcome to course selling website!</h1>
        {!token && (<>
            <a href="/register">Register</a>
            <br />
            <a href="/login">Login</a>
        </>)}
        {token && <div>
            <button onClick={()=>{
                navigate("/courses")
            }}>Got to courses page</button>
            <button onClick={() => {
                localStorage.removeItem("admin")
                setToken(false)
            }}>signout</button>
        </div>}
    </div>
}

export default Landing;