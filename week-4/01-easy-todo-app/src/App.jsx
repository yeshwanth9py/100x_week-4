import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  console.log("rendered");
  const [todos, setTodos] = useState([])
  // fetch all todos from server
  useEffect(()=>{
    fetch("http://localhost:3000/todos", {
    method: "GET"
  }).then((response) => {
    response.json().then((data) => {
      console.log(data);
      setTodos(data)
    })
  }).catch((err)=>{
    console.log(err)
  })
  //why cant i declare a setInterval outside useEffect -- --
  //                                                     -
  // setInterval(()=>{
  //   fetch("http://localhost:3000/todos", {
  //   method: "GET"
  // }).then((response) => {
  //   response.json().then((data) => {
  //     console.log(data);
  //     setTodos(data)
  //   })
  // }).catch((err)=>{
  //   console.log(err)
  // },3000)
  // })

  },[])

  
  return (
    <>
      <div>
        <h1>Easy Todo App</h1>
        <input type="text" onKeyDown={(event)=>{
          if(event.key == "Enter"){
            console.log(event.target.value)
            const newtods = todos.slice();
            console.log(newtods)
            const newobj = {
              title: event.target.value,
              description: "no desc"
            }
            fetch("http://localhost:3000/todos",{
              method:"POST",
              body: JSON.stringify(newobj),
              headers: {
                'Content-Type': 'application/json', // Set the Content-Type to indicate JSON data
              },
            }
            )
            const newtodods = [...todos]
            newtodods.push(newobj);
            setTodos(newtodods);
          //
          }         
          
        }}/>
        {todos.map((el,ind)=>{
          return <Todo setState={setTodos} state={todos} title={el.title} description={el.description} ind={ind}/>
        })}
      </div>
    </>
  )
}
function delete_id(id,setTodos,todos){
  console.log(id,todos,setTodos)
  // const newTodos = [...todos]
  //u can not modify given todos directly like newtodos = todos and then modifying newtodos wont work
  const newTodos = todos.filter((todo, index) => index !== id);
  // newTodos.splice(id,1);
  console.log(newTodos)
  setTodos(newTodos);
  fetch("http://localhost:3000/todos/"+id, {
    method: "DELETE"
  })

}

function Todo(props) {
  // Add a delete button here so user can delete a TODO.
  return <div>
    {props.title}
    {/* {props.description} */}
    <button onClick={()=>delete_id(props.ind,props.setState,props.state)}>delete</button>
  </div>
}

export default App
