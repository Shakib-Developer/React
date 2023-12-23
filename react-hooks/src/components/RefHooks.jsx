import { useRef } from "react";


// const RefHooks = () => {

//     let UseRef = useRef();

//     let txtChange = () => {
//         UseRef.current.src = "https://placehold.co/600x400?text=Hello+World";
//         UseRef.current.setAttribute('width' , '500px');
//         UseRef.current.setAttribute('height' , '500px');

//     }

//     return (
//         <div>

//             <img ref={UseRef} src="https://placehold.co/600x400" />
//             <button onClick={txtChange}>TxtChange</button>
            
//         </div>
//     )
// };

// export default RefHooks;

// ==========================================================================

// const RefHooks = () => {

//     let name, email = useRef();

//     let inputValue = () => {
//       let names = name.value;
//       let emails = email.value;

//       alert(names + " " + emails)

//     }

//     return (
//         <div>

//             <input ref={(x) => name = x} type="text" placeholder="Name" /> <br />
//             <input ref={(y) => email = y} type="email" placeholder="Email" /> <br />
//             <button onClick={inputValue}>Value</button>
            
//         </div>
//     )
// };

// export default RefHooks;

// ==========================================================================

// const RefHooks = () => {

//     let number = useRef(0);

//     let increamentNum = () => {
//       number.current++;
//       console.log(number.current);

//     }

//     return (
//         <div>

//             <button onClick={increamentNum}>IncNumber</button>
            
//         </div>
//     )
// };

// export default RefHooks;

// ==========================================================================

// const RefHooks = () => {

//     let ApiData = useRef(null);
//     let pTag = useRef();

//     let fetchData = async () => {
//         const respon = await fetch("https://dummyjson.com/products");
//         ApiData.current = await respon.json();
//     }

//     let showData = () => {
//         pTag.current.innerText = JSON.stringify(ApiData.current);
//     }

//     return (
//         <div>
//             <h3 ref={pTag}></h3>
//             <button onClick={fetchData}>API Data</button>
//             <button onClick={showData}>Show Data</button>
            
//         </div>
//     )
// };

// export default RefHooks;


