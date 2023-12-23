// import { useState, useEffect } from "react";

// function UEffect() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   }, [count]);

//   return <h1>I have rendered {count} times!</h1>;
// }

// export default UEffect;


// function UEffect() {
//   const [count, setCount] = useState(0);
//   const [calculate, setCalculate] = useState(0);

//   useEffect(() => {
//     setCalculate(() => count * 2);
//   }, [count]);

//   return (
//     <>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount((c) => c + 1)}>+</button>
//       <p>Calculation: {calculate}</p>
//     </>
//   );
// }

// export default UEffect;



