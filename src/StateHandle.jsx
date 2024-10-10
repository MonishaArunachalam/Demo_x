import React,{useState} from 'react'
import Photo from './Photo.jpg'
const StateHandle = () => {
    const [like, setLike] = useState(0)
    const [image,setImage]=useState(Photo)
    const changer=function(){
      setImage(asta)
    }
    const [name, setName]=useState("welcome")
   function decrement(){
   if (like==0){
    setLike(0)
   }
   else{
     setLike(like-1)
   }

   }
   function change(){
    setName("Moni")
   }
   function old(){
    setName("welcome")
   }

  return (
    <div>
        <h1 onMouseEnter={change} onMouseLeave={old}>{name}</h1>
        <img src={image} alt='image' onMouseEnter={changer}/>
        <p>{like}</p>
        <button onClick={()=>setLike(like+1)}>Like</button>
        <button onClick={decrement}>Dislike</button>
    </div>
  )
 }

 
export default StateHandle
