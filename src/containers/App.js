import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import {robots} from '../robots';
import Scroll from '../components/Scroll';

class App extends Component {
  constructor() {
    super()
    this.state = {
      // robots: robots,
      // [] because we aren't calling from the array anymore
      robots: [],
      searchfield: ''
    }
 }

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> {
      return response.json();
    })
    .then (TypicodeUsers => {
      this.setState({robots: TypicodeUsers})
    });

  console.log('The app was mounted');
}

onSearchChange = (event) => {
  this.setState({searchfield: event.target.value})
}

render() {

    { /*const {robots, searchfield} = this.state */ }
    const filteredRobots = this.state.robots.filter(individual => {
      return individual.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })

    return (
      <div className='tc'> 
        <h1 className='f1'>User Directory</h1>
        <SearchBox dynamicSearch={this.onSearchChange}/>
        <p></p>

      {/*Scroll also returns something*/}
        <Scroll>
           <CardList robots = {filteredRobots} /> 
        </Scroll>
        <p>Number of unfiltered users is: {this.state.robots.length}</p>
      </div>
    )
  }
}


// class App extends React.Component {
//   render() {
//     return (
//           <div className="App">
//             <header className="App-header">
//               <img src={logo} className="App-logo" alt="logo" />
//               <p>
//                 Edit <code>src/App.js</code> and save to reload.
//               </p>
//               <a
//                 className="App-link"
//                 href="https://reactjs.org"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Learn React
//               </a>
//             </header>
//           </div>
//     )
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
