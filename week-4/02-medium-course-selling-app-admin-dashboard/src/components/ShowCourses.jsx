import React from "react";

function ShowCourses() {
    const [courses, setCourses] = React.useState([]);

    // Add code to fetch courses from the server
    // and set it in the courses state variable.
    React.useEffect(()=>{
        fetch("http://localhost:3000/admin/courses",{
            method: "GET",
            headers:{
                authorization: "random"+" "+(localStorage.getItem("admin") || false)
            }
        }).then((resp)=>{
            resp.json().then((data)=>{
                console.log("data",data.courses)
                setCourses(data.courses);
            })
        }).catch((err)=>{
            console.log('error')
        })      
    },[])
    return <div>
        <h1>Create Course Page</h1>
        {courses.map(c => <Course title={c.title} />)}
    </div>
}

function Course(props) {
    return <div>
        <h1>{props.title}</h1>
    </div>
}

export default ShowCourses;