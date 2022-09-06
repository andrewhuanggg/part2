import {useState,useEffect} from 'react'
import axios from 'axios'
import Country from './components/Country'
import CountryInfo from './components/CountryInfo'

const App = ()=>{
  const[countries, setCountries] = useState([])
  const [newSearch, setNewSearch] = useState('') 
  
  //GET request to API endpoint
  useEffect(()=>{
    axios
    .get('https://restcountries.com/v3.1/all')
    .then((response)=>{
      setCountries(response.data)
      console.log(response.data)
    })
  },[])

  const handleSearchChange = (event) => setNewSearch(event.target.value)
  const countriesToShow = countries.filter((country)=>country.name.common.toLowerCase().includes((newSearch.toLowerCase())))
  
  //console.log(countriesToShow)
  return(
    <div>
      <form>
        <div>
          find countries <input value={newSearch} onChange={handleSearchChange}/>
        </div>
      </form>
      {countriesToShow.length > 10 && newSearch ? <div>Too many matches, specify another filter</div>:
       countriesToShow.length < 10 && countriesToShow.length > 1 ? countriesToShow.map((country,i)=><Country key= {i} countriesToShow={countriesToShow} country={country}/>):
       countriesToShow.length === 1 ? countriesToShow.map((country)=>
       <CountryInfo name = {country.name.common} capital = {country.capital} area = {country.area} languages = {country.languages} flag = {country.flags.png}/>)
      :<div>No results found.</div>}
      
      
    </div>
  )
}



export default App;
