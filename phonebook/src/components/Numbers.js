import numberService from '../services/numbers'
const Numbers = ({name, number, deletePerson})=>{
    
    
    return(
        <div>
            {name} {number} <button onClick={deletePerson}>delete</button>
        </div> 
        
    )

}
export default Numbers; 