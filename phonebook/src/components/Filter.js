const Filter = ({newSearch, onChange}) => {
    
    
    return(
        <div>
            Search name: <input value={newSearch} onChange={onChange}/>
        </div> 

    )
}

export default Filter; 