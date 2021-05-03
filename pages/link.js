import Link from 'next/link'
import axios from 'axios'

const linkPage = ({title}) => {
  return <div>
    Welcome to linked page! {title}</div>;
} 

export async function getServerSideProps(context) {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/1`)
  const data = res.data
    
   
    
  return {
    props: {title: data.title},
  }
}     

  
export default linkPage