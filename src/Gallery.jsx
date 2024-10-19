import { useState } from "react";
import Button from 'react-bootstrap/Button';
const Gallery=()=>{
  const[cnt,setCnt] =useState(0);
  const mydec=()=>{
    if(cnt<=0)
    {
alert("no negative decrement")
    }
    else{
      setCnt(cnt-15)
    }
  }
  
  return(
    <>
    
    <h1>my counter programme </h1>
    <h2>count :{cnt}</h2>
    <button onClick={()=>{setCnt(cnt+15)}}>increment</button>
    <button onClick={()=>{setCnt(cnt-15)}}>decreament</button><br /><br />
    <Button variant="primary" onClick={()=>{setCnt(cnt+15)}}>incre</Button>
      <Button variant="secondary" onClick={mydec}>dec</Button>
      <Button variant="success" onClick={()=>{setCnt(0)}}>Reset</Button>

    
    </>
  )
}
export default Gallery;


