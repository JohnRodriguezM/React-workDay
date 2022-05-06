import {useFetch} from './useFetch'
import {useEffect} from 'react'
const UsoUseFetch = () => {
  let url = 'https://jsonplaceholder.typicode.com/users'
// destructuring del hook
let {data,isPending,error} = useFetch(url)

  return (
    <div>UsoUseFetch
    <h3>{JSON.stringify(isPending)}</h3>
    <h3><mark>{JSON.stringify(error)}</mark></h3>
    <h3>
    {data.map((el,i) => {
        return (
            <li key = {i}>{el.name}</li>
        )
    })} 
    </h3>
    </div>
    
  )
}

export default UsoUseFetch