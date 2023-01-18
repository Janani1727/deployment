import React from 'react';
import Link from 'next/link';


const Navbar = () =>{
  return (
    <div style={{backgroundColor:"black", color:"white" , height:"45px" , justifyContent:'center' , textAlign:"center",paddingTop:"10px"}}>
  <Link href="/" style={{margin:"25px",fontSize:"20px"}}>Home</Link>
<Link href="/html" style={{margin:"25px",fontSize:"20px"}} >HTML</Link>
<Link href="/css" style={{margin:"25px",fontSize:"20px"}}>CSS</Link>
<Link href="/javascript" style={{margin:"25px",fontSize:"20px"}} >JAVASCRIPT</Link>


</div>
  )
}

export default Navbar;