const box={
width:"400px",
height:"300px",
backgroundColor:"yellow",
borderRadius:"2600px",
margin:"40px",
 paddingTop:"10px",
 paddingLeft:"10px"

}
const box1={
    width:"300px",
    height:"200px",
    backgroundColor:"blue",
    borderRadius:"10px",
    margin:"40px",
    paddingTop:"20px"
    
    }
    const box2={
        width:"200px",
        height:"100px",
        backgroundColor:"red",
         borderRadius:"100px",
       margin:"40px",
       paddingTop:"10px"
        
        }
            



const Home=()=>{
    return(
        <>
        <div style={box}>
        <div style={box1}>
        <div style={box2}>
            <h1 align="center">cybrom</h1>


        </div>
        </div>
        </div>


        </>
    )
}
export default Home;

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// const Home=()=>{
//     return(
//         <>
//         <h1>welcome</h1>
//         <Container>
//       <Row>
//         <Col className="bg-primary">1 of 1</Col>
//         <Col className="bg-success">1 of 1</Col>
//       </Row>
//       <Row>
//         <Col md={6} >welcome</Col>
//       </Row>
//       <Row>
//         <Col md={5} className="bg-red">welcome</Col>
//       </Row>
//       <Row>
//         <Col>1 of 1</Col>
//       </Row>
//     </Container>
//         </>
//     )
// }
// export default Home;