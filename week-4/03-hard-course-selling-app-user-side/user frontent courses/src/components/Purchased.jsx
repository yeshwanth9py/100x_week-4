import React, { useEffect, useState } from 'react'

const Purchased = () => {
  const [purc, setPc] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/users/purchasedCourses", {
      method: "GET",
      headers: {
        authorization: "rand" + " " + (localStorage.getItem("user") || false)
      }
    }).then((resp) => {
      resp.json().then((data) => {
        console.log("skibidi toilet", data.purchasedCourses);
        setPc(data.purchasedCourses);
      })
    })
  })
  return (
    <>
      Purchased courses
      <div>courses in which u have wasted money are:-</div>
      {
        purc.map((el, ind) => {
          return <div>{ind+1}:-courseid: {el.id}</div>
        })
      }
    </>

  )
}

export default Purchased