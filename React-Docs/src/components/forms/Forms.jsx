import { useState } from "react";


// const MyForms = () => {
//     const [name, setName] = useState("");

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         alert(`Here your input Name: ${name}`)
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label>Enter Your Name </label>
//                 <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
//             </form>
            
//         </div>
//     );
// };

// export default MyForms; // Submited From and Alert Message =========================


const MyForms = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter Your Name </label>
                <input type="text" name="username" value={inputs.username || ""} onChange={handleChange} /> <br />

                <label>Enter Your Age </label>
                <input type="number" name="age" value={inputs.age || ""} onChange={handleChange} /> <br />

                <input type="submit" />
            </form>
            
        </div>
    );
};

export default MyForms; // Submited From and Alert Message =========================