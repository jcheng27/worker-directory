import React, { Component } from 'react';
import './Hello.css';


class Hello extends Component {
  render () {
    return (
      //tachyons f1 tc
      <div className='f1 tc'>
        <h1>Hello extends component</h1>
        <p>using class</p>
        <p>{this.props.greeting}</p>
      </div>
    )
  }
}

// const Hello = (props) => {
//     return (
//       //tachyons f1 tc
//       <div className='f1 tc'>
//         <h1>Hello extends component</h1>
//         <p>Using const</p>
//         <p>{props.greeting}</p>
//       </div>
//     );
//   }


export default Hello;
