import React, { Component } from 'react';
import './App.css';
import Quote from './Components/Quote';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      quote: '',
      author: '',
      timer: null
    };
    
    this.stopTimer = this.stopTimer.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }

  componentDidMount(){ 
    this.fetchQuote();
    this.startTimer();
  }

  startTimer(){
    let timer;
    timer = setInterval(this.fetchQuote.bind(this),5000);
    this.setState({
      timer: timer
    })
  }

  stopTimer(){
    clearInterval(this.state.timer);
  }

  fetchQuote(){
    let self = this;
    const url = "https://talaikis.com/api/quotes/random/";
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
      self.setState({
        quote: data.quote,
        author: data.author
      })
    });
  }

  render() {
    return (
      <div className="App App-bg">
        <h1 className="text-white">Random Quote Generator</h1>
          <Quote stopTimer={this.stopTimer} startTimer={this.startTimer} quote={this.state.quote} author={this.state.author} />
      </div>
    );
  }
}

export default App;
