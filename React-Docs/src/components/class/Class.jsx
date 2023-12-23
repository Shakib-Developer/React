import React from 'react';


// class Car extends React.Component {
//     constructor(props){
//         super(props)
//     }
//     render() {
//       return <h2>Hello, This is a {this.props.year} Model Car!</h2>;
//     }
//   }
  
//   export default Car; // Props (Class) ===================


// class Car extends React.Component {
//     render() {
//       return <h2>I am a Car! {this.props.ans}</h2>;
//     }
//   }
  
//   class Garage extends React.Component {
//     render() {
//       return (
//         <div>
//         <h1>Who lives in my Garage?</h1>
//         <Car ans="Fuck you bitch" />
//         </div>
//       );
//     }
//   }

//     export default Garage; // Props (Class) =================


// class Car extends React.Component {
//     constructor(props) {
//       super(props);
//     this.state = {brand: "Ford"};
//     }

//     changeBrand = () => {
//         this.setState({brand: "Mazda"})
//     }

//        shouldComponentUpdate() {
//             return true;
//        }  // This Methood decided setState Method Changing....

//     render() {
//       return (
//         <div>
//           <h1>My Car {this.state.brand}</h1>

//           <button type="button" onClick={this.changeBrand}>Change color</button>
//         </div>
//       );
//     }
//   }

//   export default Car; // setState (Class) ===============


// class Car extends React.Component {
//     constructor(props) {
//       super(props);
//     this.state = {brand: "Ford"};
//     }

//     static getDerivedStateFromProps(props, state){
//         return {brand: props.favBrand};
//     }


//     render() {
//       return (
//         <div>
//           <h1>My Car {this.state.brand}</h1>
//         </div>
//       );
//     }
//   }

//   export default Car; // getDerivedStateFromProps (Class) =================


// class Car extends React.Component {
//     constructor(props) {
//       super(props);
//     this.state = {brand: "Ford"};
//     }

//     componentDidMount(){
//         setTimeout(() => {
//             this.setState({brand: "Mazda"})
//         }, 4000);
    
//     }

//     render() {
//       return (
//         <div>
//           <h1>My Car {this.state.brand}</h1>
//         </div>
//       );
//     }
//   }

//   export default Car; // componentDidMount (Class) =================


    
// export default class Toggle extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {isToggleOn: false};
  
//       // This binding is necessary to make `this` work in the callback
//       this.handleClick = this.handleClick.bind(this);
//     }
  
//     handleClick() {
//       this.setState(prevState => ({
//         isToggleOn: !prevState.isToggleOn
//       }));
//     }
  
//     render() {
//       return (
//         <button onClick={this.handleClick}>
//           {this.state.isToggleOn ? 'ON' : 'OFF'}
//         </button>
//       );
//     }
//   }

