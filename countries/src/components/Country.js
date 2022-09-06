import CountryInfo from "./CountryInfo"
import {useState} from 'react'
const Country = ({country,countriesToShow})=>{

   const [showComponent, setComponent] = useState(false)



   return(
    <div>
      
      {country.name.common} <button onClick={()=>setComponent(!showComponent)}>show</button>
      {showComponent ? <CountryInfo name = {country.name.common} capital = {country.capital} area = {country.area} languages = {country.languages} flag = {country.flags.png}/>
      : null}
    </div> 
   
   ) 
    
}

export default Country