import React from "react";
import { useNavigate } from "react-router-dom";
/// You need to add input boxes to take input for users to create a course.
/// I've added one input so you understand the api to do it.
function CreateCourse() {
    const [title, setTitle] = React.useState("");
    const [desc, setDesc] = React.useState("");
    
    
    
    React.useEffect(() => {
        
        fetch("http://localhost:3000/admin/courses", {
            method: "POST",
            headers: {
                authorization: "some" + " " + localStorage.getItem("admin"),
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                username: title,
                description: desc
            })
        }).then(() => {
            console.log("user succ logged in")
        }).catch((err) => {
            console.log(err);
            document.write("user not found")
        });
    }, [])


    function addcourse(){
        fetch("http://localhost:3000/admin/courses",{
            method: "POST",
            headers: {
                authorization: "some" + " " + localStorage.getItem("admin"),
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                title: title,
                description: desc
            })
        }).then((resp)=>{
            resp.json().then((data)=>{
                console.log(data)
            })
        })
    }

    return <div>
        <h1>Create Course Page</h1>
        <input type={"text"} onChange={e => setTitle(e.target.value)} />
        <input type={"text"} onChange={e => setDesc(e.target.value)} />
        <button onClick={() => addcourse()}>Create Course</button>
    </div>
}
export default CreateCourse;