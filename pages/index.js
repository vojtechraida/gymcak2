import Link from 'next/link'
import button, {greeting, superGreeting} from './../components/button'

const HomePage = () => {
    return <div>
      Welcome to My page 2.0!
      Go to {" "}
      <Link href="/link"><a>linked page</a></Link>
      
      <button color="red">Tohle je moje tlačítko</button>
      <button />
      <button children="Tohle je super tlačítko" onClick={()=>{console.log("ahoj")}} />
      
      {greeting("Vojta")}
      {superGreeting({name: "Vojta"})}
    
    </div>
}
    

  
export default HomePage