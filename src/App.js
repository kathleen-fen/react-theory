import React, {Component} from 'react';

import './App.css';
import Car from './Car/Car'

class App extends Component {
  state = {
    cars:[
      {name: 'Ford', year: 2018},
      {name: 'Audi', year: 2016},
      {name: 'Mazda 1', year: 2010}
    ],
    pageTitle: 'React components'
  }
  changeTitleHandler = (newTitle)=>{
    this.setState({
      pageTitle: newTitle
    })
  }
  handleInput = (event)=>{
    this.setState({
      pageTitle: event.target.value
    })
  }
  render() {
    const divStyle = {
      textAlign: 'center',
      margin: 'auto'
    };
    const cars = this.state.cars;
    return (
      
      <div style= {divStyle}>
        <h1>{this.state.pageTitle}</h1>
        <input type="text"  onChange={this.handleInput}/>
        <button onClick = {this.changeTitleHandler.bind(this,'Changed!')}>Change title</button>
        <Car 
          name = {cars[0].name} 
          year = {cars[0].year}
          onChangeTitle = {this.changeTitleHandler.bind(this,cars[0].name)}/>     
        <Car 
          name = {cars[1].name} 
          year = {cars[1].year}
          onChangeTitle = {()=>this.changeTitleHandler(cars[1].name)} />
        <Car 
          name = {cars[2].name} 
          year = {cars[2].year} 
          onChangeTitle = {()=>this.changeTitleHandler(cars[2].name)}/>
        
      </div>
    );

  }
}

/* function App() {
  const divStyle = {
    textAlign: 'center',
    margin: 'auto'
  };
  return (
    
    <div style= {divStyle}>
      <h1>Hello world!!!</h1>
      <Car name = {'Ford'} year = {2018} />     
      <Car name = "Audi" year = {2016} /> 
      <Car name = {'Mazda'} year = {2010} />
      
    </div>
  ); */
 /*  return React.createElement(
    'div',
    {
      className: 'App'
    },
    React.createElement(
      'h1',
      null,
      'Hello world!'
    )
  ) */
//}

export default App;
