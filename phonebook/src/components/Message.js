
const Message = ({message}) => {
    if(message === null){
        return null;
    }
    const added = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10 
    }

    const error = {
        color: 'red',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10 
    }

    if (message.includes('Added') === false){
        return (
            <div style = {error}>{message}</div>
        )
    }
    return(
        <div style = {added}>{message}</div>
    )
}

export default Message; 