import React from 'react';
import Image from "next/image";
import {Box , Card , Heading , Text} from "@chakra-ui/react"

const Css = ({data}) => {
  console.log(data.items)
  return (
    
  <>
<Box display="grid" gap="50px" gridTemplateColumns= "repeat(4, 1fr)">
{data.items.map((el)=>(

<Box key={el.id} >
<Card bg={"white"} height={300}>
  <Image src={el.owner.avatar_url} width={100} height={100} alt="avatar" style={{margin:"auto " , marginTop:"-0px", width:'70%'}}/>
  <Heading color='black' textAlign={"center"} fontSize={14}>{el.name}</Heading>
  <Text color='black' textAlign={"center"}>{el.language}</Text>
  <p color="black">{el.owner.stargazers_count}</p>
  <p color="black">{el.owner.forks_count}</p>


{/* <p>{el.full_name}</p> */}
</Card>
</Box>

))}

</Box>
    </>
  )
}

export default Css;


export async function getStaticProps(){
  let response = await fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:css`)
  let d = await response.json();
  return {
    props:{
      data:d,
    
    }
  }
}