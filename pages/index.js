import Image from "next/image";
import {Box ,Card , Text , Heading} from "@chakra-ui/react"


export default function Home({data}) {
  console.log(data.items)
  return (
    <>
<Box display="grid" gap="10px" gridTemplateColumns= "repeat(4, 1fr)" mt={5}>

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

export async function getStaticProps(){
  let response = await fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:all`)
  let d = await response.json();
  return {
    props:{
      data:d,
    }
  }
}