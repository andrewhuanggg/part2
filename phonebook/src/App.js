import {useState,useEffect} from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Numbers from './components/Numbers'
import numberService from './services/numbers'
import Message from './components/Message'
/*
const Numbers = ({persons}) => {
  return persons.map((person)=>{
    return <div>{person.name}</div>
  })
}
*/
//const Numbers = ({name, number})=><div>{name} {number}</div>
//const Numbers = ({persons})=> persons.map((person)=><div>{person.name}</div>)
const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch,setNewSearch] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(()=>{
    numberService
      .getAll()
      .then(initialNumbers => setPersons(initialNumbers))
  },[])

  const addName = (event)=>{
    event.preventDefault()
    if(persons.find((person)=>person.name === newName)){
      const confirm = window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)
      if(confirm === true){
        const target = persons.find((person) => person.name === newName)
        updateNumber(target.id, newNumber)
        setNewName('')
        setNewNumber('')
        
      }
      return;
    }
    const nameObject = {
      name: newName,
      number: newNumber
    }
    numberService
      .create(nameObject)
      .then((returnedName)=>{
        setPersons(persons.concat(returnedName))
        setNewName('')
        setNewNumber('')
        setMessage(`Added ${newName}`)
        setTimeout(()=>{
          setMessage(null)
        },5000)
      })

  }

  const updateNumber = (id, updatedNumber) => {
    const person = persons.find((person)=>person.id === id)
    const changedPerson = {...person, number: updatedNumber}
    numberService
      .update(id, changedPerson)
      .then((returnedPerson) => {
        setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
      })
  }

  const deletePerson = (id, name) => {
    const result = window.confirm(`Delete ${name}?`)
    if(result){
      numberService.remove(id).catch(setMessage(`Information of ${name} has already been removed from server`))
      setPersons(persons.filter(person => person.id !== id))
    }
  }

  const handleNameChange = (event)=>{
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event)=>{
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event)=>{
    setNewSearch(event.target.value)
  }

  const peopleToShow = newSearch ? persons.filter((person)=>person.name.toLowerCase().includes(newSearch.toLowerCase())): persons

  return (
    <div>
      <h2>Phonebook</h2>
        <Message message={message} />
        <Filter value = {newSearch} onChange={handleSearchChange}/>
        
      <h2>add a new</h2>
      <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      
      <h2>Numbers</h2>
      <Persons deletePerson = {deletePerson} peopleToShow={peopleToShow}/>
      
      
    </div>
  )
}


export default App;
