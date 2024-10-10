import React,{useState   } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'; 
import axios from 'axios';
const Todolist = () => {
    const [todo, setTodo]=useState('');
    const [name, setName]=useState('');
    const[db,setDb]=useState([]);
    //data posting
    function dataPost(){
        axios.post( "http://localhost:3000/posts",{todo,name})
        .then(()=>{
            alert("Data posted")
            setTodo('')
            setName('')   
        })
        .catch(()=>{
            alert("Data not posted")
        }) 
    }
    function getData(){
        axios.get( "http://localhost:3000/posts ")
        .then((ref)=>{ 
            setDb(ref.data)
            alert("Data Retired")

        })
        .catch(()=>{
            alert("Data not getted")
        }) 
    }
    function updateData(id,data)
    {
      axios.put(`http://localhost:3000/posts/${id}`,{todo:data,name:data})
      .then(()=>{
        console.log("data updated");
        getData();
      })
    }
    function deleteData(id,data)
    {
      axios.delete(`http://localhost:3000/posts/${id}`,{todo:data,name:data})
      .then(()=>{
        console.log("data deleted");
        getData();
      })
    }
    function newData(id){
      const a=prompt("enter")
      updateData(id,a)
 
    }
    console.log(db)
  return (
    <div>   
       <p>{todo}</p>
         <TextField id="outlined-basic" label="Todo" variant="outlined" value={todo}  onChange={(ref)=>setTodo(ref.target.value)}/>
         <p>{name}</p>
         <TextField id="outlined-basic" label="Name" variant="outlined" value={name}  onChange={(ref)=>setName(ref.target.value)}/>
         <br></br>
         <br></br>
         <Button variant="contained" onClick={dataPost}>Post</Button>
         <Button variant="contained" onClick={getData}>get</Button>
         <div>
          <ul>
              {
                db.map((item)=>(
                <li key={item.id}>{item.todo}<Button onClick={()=>newData(item.id)}>Edit</Button>
                <Button onClick={()=>deleteData(item.id)}>delete</Button></li>
                
              ))}
              </ul>
              <ul>
              {
                db.map((item)=>(
                <li key={item.id}>{item.name}<Button onClick={()=>newData(item.id)}>Edit</Button></li>
              ))
              }
          </ul>
         </div>
   </div>
  )
}
export default Todolist