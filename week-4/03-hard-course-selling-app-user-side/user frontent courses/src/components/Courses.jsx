import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate()
  React.useEffect(()=>{
    fetch("http://localhost:3000/users/courses",{
      method: "GET",
      headers: {
        authorization: "random" + " " + (localStorage.getItem("user") || false)
      }
    }).then((resp)=>{
      resp.json().then((data)=>{
        console.log(data)
        setCourses(data.courses)
      })
      console.log(resp)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  function buycourse(ind){
    fetch("http://localhost:3000/users/courses/"+ind,{
      method: "POST",
      headers: {
        authorization: "rand" + " " + (localStorage.getItem("user") || false)
      }
    }).then((resp)=>{
      resp.json().then((data)=>{
        console.log(data)
      })
    })
  }

  return (
    <div>
      <h1>welcome</h1>
      <button onClick={()=>navigate("/courses/purchased")}>go to ur purchased courses</button>
      <h3>all Courses</h3>
      {courses.map((el,ind)=>{
        return (
          <div >
            title:-{(el.title)||(el.username)}
            descriptionid:-{(el.description)||(el.id)}
            <br/>
            <Button variant="contained" onClick={()=>buycourse(ind)}>Contained</Button>
            {/* <button onClick={()=>buycourse(ind)}>purchase this course</button> */}
          </div>
        )
      })}

    </div>
  )
}

export default Courses