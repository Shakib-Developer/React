function AlertButton ({message, children}) {
    console.log(children);
    return(
        <button onClick={() => alert(message)}>{children}</button>
    )
}
const RespondingEvents = () => {
    return (
        <div>

            <AlertButton message="Play on Movie">Play Movie</AlertButton>
            <AlertButton message="Play on Game">Play Game</AlertButton>
            
        </div>
    );
};

export default RespondingEvents;