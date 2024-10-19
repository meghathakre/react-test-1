import axios from "axios";
import { Link,Outlet } from "react-router-dom";

const Layout=()=>{
    return(
    <>
    
    <div style={{backgroundColor:"lightblue"}} >
<Link to="home"style={{padding:"10px"}}> Home </Link>
<Link to="About" style={{padding:"10px"}}>About </Link>
<Link to="Service"style={{padding:"10px"}}>Service </Link>
<Link to="Placement"style={{padding:"10px"}} >Placement </Link>
<Link to="Gallery" style={{padding:"10px"}}>Gallery</Link>
<Link to="Contact "style={{padding:"10px"}}>Contact </Link>

<hr size="4" color="red"/>
<Outlet />
<hr size="4 "color="red"/>
www.mycompany.com
</div>
    </>
    )
}
export default Layout;