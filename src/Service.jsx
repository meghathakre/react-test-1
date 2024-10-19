
 import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

const Service=()=>{ 
    const [mydata,setMydata]=useState([]);
    const loadData=()=>{
        let api="http://localhost:3000/student";
        axios.get(api).then((res)=>{
            console.log(res.data);
            setMydata(res.data)
        });
    }
    useEffect(()=>{
        loadData();
    },[])
    const ans=mydata.map((key)=>{


return(
    <>
    <tr>
        <td>{key.id}</td>
        <td>{key.name}</td>
        <td>{key.designation}</td>
        <td>{key.department}</td>
        <td>{key.sallery}</td>
    </tr>
   </>
)    
})
return(

<>
<Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th> Name</th>
          <th>designation</th>
          <th>department</th>
          <th>sallery</th>
          </tr>
 </thead>
 <tbody>
    {ans}
 </tbody>
 </Table>
 </>
)
}
export default Service;
