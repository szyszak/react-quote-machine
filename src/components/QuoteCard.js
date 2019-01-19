import React, { Component } from 'react';
import { TwitterShareButton, TwitterIcon } from 'react-share';
import Spinner from './Spinner';
import './QuoteCard.scss';

class QuoteCard extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  getQuote = () => {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(response => response.json())
      .then(response => this.setState(response[0]));
  }

  componentDidMount() {
    this.getQuote();
  }

  render() {
    return(
      <div className="card">
        { this.state.character ?
          <> 
            <img src={ require(`../images/${this.state.character}.png`) } alt={ this.state.character } className="card__img" /> 
            <blockquote className="card__quote" >{ this.state.quote }</blockquote>
            <cite className="card__author" >- { this.state.character }</cite>
          </>
          : 
          <Spinner /> }
        

        <div className="buttons">
          <button className="card__btn card__btn--fetch" onClick={ () => { this.getQuote() } } >GET ANOTHER ONE</button>

          <TwitterShareButton 
            className="card__btn card__btn--tweet"
            title={ `"${ this.state.quote} " - ${ this.state.character }` } 
            hashtags={[ 'simpsons' ]} 
            url={ window.location.href } 
            >
            <TwitterIcon size={ 32 } />
            TWEET
          </TwitterShareButton>
        </div>
      </div>
    );
  }
}

export default QuoteCard;