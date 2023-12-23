// import { people } from './ConRenData';
import { recipes } from './ConRenData';
// import { getImageUrl } from './ConRenData';

// export default function List() {
//   const chemists = people.filter(person =>
//     person.profession === 'chemist'
//   );
//   const everyoneElse = people.filter(person =>
//     person.profession !== 'chemist'
//   );
//   return (
//     <div>
//       <h1>Scientists</h1>
//       <h2>Chemists</h2>
//       <ul>
//         {chemists.map(person =>
//           <div key={person.id}>
//             <img
//               src={getImageUrl(person)}
//               alt={person.name}
//             />
//             <p>
//               <b>{person.name}:</b>
//               {' ' + person.profession + ' '}
//               known for {person.accomplishment}
//             </p>
//           </div>
//         )}
//       </ul>
//       <h2>Everyone Else</h2>
//       <ul>
//         {everyoneElse.map(person =>
//           <div key={person.id}>
//             <img
//               src={getImageUrl(person)}
//               alt={person.name}
//             />
//             <p>
//               <b>{person.name}:</b>
//               {' ' + person.profession + ' '}
//               known for {person.accomplishment}
//             </p>
//           </div>
//         )}
//       </ul>
//     </div>
//   );
// }

// Tecniq Way 1 ############# Close [Data Fetch] =======================


// function ListDection({title, people}){
//     return(
//         <div>
//             <h2>{title}</h2>
//             <ul>
//                 {people.map(person => 
//                     <div key={person.id}>
//                         <img src={getImageUrl(person)} />

//                         <p>
//                             <strong>{person.name}.</strong>
//                             {" " + person.profession + " "} her for is {person.accomplishment}
//                         </p>
//                     </div>  
//                 )}
//             </ul>
//         </div>
//     );
// }

// export default function List(){
//     const chemists = people.filter(person => person.profession === "chemist");
//     const nonChemists = people.filter(person => person.profession !== "chemist");

//     return(
//         <div>
//             <h1>Scientists</h1>

//             <ListDection
//                title = "Chemists"
//                people = {chemists} 
//             />

//             <ListDection
//                title = "Non-Chemists"
//                people = {nonChemists} 
//             />
//         </div>
//     );
// }

// Tecniq Way 2 ############# Close [Data Fetch] =======================

// let chemists = [];
// let nonChemists = [];

// people.forEach(person => {
//     if(person.profession === "chemist"){
//         chemists.push(person);
//     }else{
//         nonChemists.push(person);
//     }
// })

// function ListDection({title, people}){
//     return(
//         <div>
//             <h2>{title}</h2>
//             <ul>
//                 {people.map(person => 
//                     <div key={person.id}>
//                         <img src={getImageUrl(person)} />

//                         <p>
//                             <strong>{person.name}.</strong>
//                             {" " + person.profession + " "} her for is {person.accomplishment}
//                         </p>
//                     </div>  
//                 )}
//             </ul>
//         </div>
//     );
// }

// export default function List(){

//     return(
//         <div>
//             <h1>Scientists</h1>

//             <ListDection
//                title = "Chemists"
//                people = {chemists} 
//             />

//             <ListDection
//                title = "Non-Chemists"
//                people = {nonChemists} 
//             />
//         </div>
//     );
// }

// Tecniq Way 3 ############# Close [Data Fetch] =======================


// export default function RecipeList() {
//   return (
//     <div>
//       <div className="recipelist">
//         <h1>Recipes</h1>

//         {recipes.map((recipe) => (
//           <div key={recipe.id}>
//             <h2>{recipe.name}</h2>

//             <ul>
//               {recipe.ingredients.map((ingredient) => (
//                 <h4 key={ingredient}>{ingredient}</h4>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// =============================== Function Coditional Rendering Start ================================

// export default function Item ({ name, isPacked }){
//     if (isPacked){
//       return <li className="item">{name} ✔</li>
//     }
//     else{
//       return <li className="item">{name}</li>
//     }

//   }


// export default function Item ({ name, isPacked }){

//     let nameContent = name;
//     if (isPacked){nameContent = name + "✔";}

//       return(
//         <li className="item">{nameContent}</li>
//       )

//   }

// export default function Item ({ name, isPacked }){
//     return(
//         // <li>
//         //     {isPacked ? name + "✔" : name}
//         // </li>

//         // OR //

//         <li>
//             {name} {isPacked && '✔'}
//         </li>
//     )
 
//  } 


// function UserGreeting() {
//     return <h1>Welcome back!</h1>;
//   }
  
//   function GuestGreeting() {
//     return <h1>Please sign up.</h1>;
//   }

//  export default function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//       return <UserGreeting />;
//     }
//     return <GuestGreeting />;
//   }   // Conditional Function Rendering ============


// ======================== Function (Ternary or If Else) Ways Check Conditions Close ========================


