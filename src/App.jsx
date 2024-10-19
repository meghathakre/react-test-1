
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Placement from "./Placement";
import Gallery from "./Gallery";
import Contact from "./Contact";
const App=()=>{
    return( 
        <>
        <BrowserRouter>
        <Routes>
<Route path="/" element={<Layout/>}>
<Route path="Home" element={<Home/>}/>
<Route path="About" element={<About/>}/>
<Route path="Service" element={<Service/>}/>
<Route path="Placement" element={<Placement/>}/>
<Route path="Gallery" element={<Gallery/>}/>
<Route path="Contact" element={<Contact/>}/>



</Route>
</Routes>
</BrowserRouter>
</>
)
}
export default App;

