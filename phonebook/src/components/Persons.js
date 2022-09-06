import Numbers from './Numbers'
const Persons = ({peopleToShow, deletePerson}) => {

    
    return(
        peopleToShow.map((person)=>
            <Numbers key={person.id} deletePerson = {()=>deletePerson(person.id, person.name)} name={person.name} number={person.number}/>
        )
    )
}
export default Persons; 