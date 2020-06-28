import React, { Component } from 'react';
import './QuoteCard.css'; 
import PropTypes from 'prop-types'; 
import axios from 'axios';

const samplequote = {
  quote:	"Why are you pleople avoiding me? Does my withered face remind you of the grim specter of death?",
  character:	"Abe Simpson",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FAbrahamSimpson.png?1497567511593",
}


class QuoteCard extends Component {
  constructor(props){
    super(props); 
    this.state = {
      quote: samplequote
    };
  }

  getQuote = () => {
    // Send the request
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(response => response.data)
      .then(data => {
        this.setState({
          quote: data[0],
        });
    });
  }

  render() {
    const { quote } = this.state; 
    return (
      <figure className="QuoteCard">
        <img src={quote.image} alt={quote.character} />
        <figcaption>
          <blockquote>{quote.quote}</blockquote>
          <p>{quote.character}</p>
          <button type="button" onClick={this.getQuote}>Click for more Simpson Quotes</button>
        </figcaption>
      </figure>
    );
  }
}

export default QuoteCard; 