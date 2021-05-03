import Link from 'next/link'
import Button, {greeting, superGreeting} from './../components/Button'
import Image from './../components/Image'

const HomePage = () => {
   
  const isSquare = false;
  
  return <div>
      Welcome to My page 2.0!
      Go to {" "}
      <Link href="/link"><a>linked page</a></Link>
      
      <Button color="red">Tohle je moje tlačítko</Button>
      <Button />
      <Button children="Tohle je super tlačítko" onClick={()=>{console.log("ahoj")}} />
      
      {greeting("Vojta")}
      {superGreeting({name: "Vojta"})}

      <Image src="https://homoky-files.fra1.digitaloceanspaces.com/2020/nL2ckrgYNz.png" width={300} isSquare />
      
      
    
    </div>
}
    

  
export default HomePage