import {useState} from 'react';
// import datas from "./data"


// const UState = () => {

//     const [index, setIndex] = useState(0);
//     const [showMore, setShowMore] = useState(false);
    


//     let hasPrev = index > 0;
//     let hasNext = index < datas.length - 1;

//     function handlePrev(){
//         if(hasPrev){
//             setIndex(index - 1);
//         }
//     }

//     function handleNext(){
//         if(hasNext){
//             setIndex(index + 1);
//         }else{
//             setIndex(0);
//         }
//     }

//     function handleMore(){
//         setShowMore(!showMore);
//     }

//     let data = datas[index];

//     return (
//         <div>

//             <button onClick={handlePrev} disabled={!hasPrev}>Prev</button>
//             <button onClick={handleNext}>Next</button>

//             <h2>
//                 <b>{data.name} by <i>{data.artist}</i></b>
//             </h2>

//             <h4>
//                 {index + 1} of {datas.length}
//             </h4>

//             <button onClick={handleMore}>
//                 {showMore ? 'Hide' : 'Show'} <i>Ditails</i>
//             </button>

//             {showMore && <p>{data.description}</p>}

//             <img 
//               src={data.url} 
//               alt={data.alt}
//             />
            
//         </div>
//     );
// };

// export default UState;



// const UState = () => {

//     const [fname, setFname] = useState("");
//     const [lname, setLname] = useState("");

//     const handleFname = (e) => {
//         setFname(e.target.value);
//     }

//     const handleLname = (e) => {
//         setLname(e.target.value);
//     }

//     const handleReset = (e) => {
//         setFname("");
//         setLname("");
//     }

//     return (
//         <div>

//             <form onChange={(e) => e.preventDefault()}>

//                 <input type="text"
//                    placeholder='First Name'
//                    value={fname}
//                    onChange={handleFname}
//                 />

//                 <br />
//                 <br />

//                 <input type="text"
//                    placeholder='Last Name'
//                    value={lname}
//                    onChange={handleLname}
//                 />

//                 <h1>Hello, {fname} {lname} !</h1>

//                 <button onClick={handleReset}>Reset</button>

//             </form>
            
//         </div>
//     );
// };

// export default UState;



const UState = () => {

    const [walk, setwalk] = useState(false);

    function handleClick(){
            setwalk(!walk);
            alert(walk ? 'Stop is next' : 'Walk is next');
    }

    return (
        <div>

            <button onClick={handleClick}>
                Change to {walk ? "Stop" : "Walk"}
            </button>
            <h1 style={{
                color: walk ? "darkgreen" : "darkred"
            }}>
                {walk ? "Walk" : "Stop"}
            </h1>
            
        </div>
    );
    
};



export default UState;