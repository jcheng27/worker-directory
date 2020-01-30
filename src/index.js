import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';

//import Hello from './Hello';
//import Card from './Card';
//import CardList from './CardList';
//import {robots} from './robots';
import 'tachyons'
import * as serviceWorker from './serviceWorker';




ReactDOM.render(
	//Need App.JS to connect Robots and SearchBox
	< App />, document.getElementById('root')

	//This was ok when we didn't need a bridge between Robots and SearchBox
	//<CardList robots = {robots} />, document.getElementById('root')

);


// ReactDOM.render(<div> 
// 	<Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/> 
// 	<Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
// 	<Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
// 	</div>
// 	);

//ReactDOM.render(<Hello greeting = {'Jethro Cheng HQO'} /> , document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<h1>Hello World!</h1>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
