import React, { Component } from "react";
import styled from "styled-components";
import { TwitterShareButton, TwitterIcon } from "react-share";
import Spinner from "./Spinner";

// STYLES

const CardWrapper = styled.div`
  max-width: 600px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;

  @media (max-width: 520px) {
    max-width: 600px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
  }
`;

const CardImg = styled.img`
  display: block;
  width: auto;
  max-height: 400px;
  height: 100%;

  @media (max-width: 520px) {
    max-height: 300px;
  }
`;

const CardQuote = styled.blockquote`
  margin-top: 20px;
  font-family: "Gloria Hallelujah";
  font-size: 22px;

  @media (max-width: 520px) {
    font-size: 18px;
  }
`;

const ErrorMsg = styled.p`
  margin-top: 20px;
  font-family: "Gloria Hallelujah";
  font-size: 22px;
  font-weight: bold;
  color: #ea1b1b;
`;

const CardAuthor = styled.cite`
  margin-top: 16px;
  font-size: 20px;
`;

const CardButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;

  @media (max-width: 520px) {
    flex-direction: column;
  }
`;

const CardBtn = styled.button`
  height: 55px;
  padding: 16px 24px;
  border: none;
  font-weight: bold;
  font-size: 20px;
  color: #fff;
  cursor: pointer;

  ${({ fetch }) => "background-color: #00de36;"}; // simulates BEM modifier

  @media (max-width: 520px) {
    width: 250px;
  }
`;

const CardTweet = styled(TwitterShareButton)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  margin-left: 30px;
  padding: 16px 24px;
  background-color: #00aced;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  border: none;
  cursor: pointer;

  @media (max-width: 520px) {
    width: 250px;
    margin-left: 0;
    margin-top: 26px;
    justify-content: center;
  }
`;

// COMPONENT

class QuoteCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      error: false
    };
  }

  getQuote = () => {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => response.json())
      .then(response => this.setState({ data: response[0] }))
      .catch(error => {
        this.setState({
          error: true
        });
      });
  };

  componentDidMount() {
    this.getQuote();
  }

  render() {
    return (
      <CardWrapper>
        {this.state.data ? (
          <>
            <CardImg
              src={require(`../images/${this.state.data.character}.png`)}
              alt={this.state.character}
            />
            <CardQuote>{this.state.data.quote}</CardQuote>
            <CardAuthor>- {this.state.data.character}</CardAuthor>
          </>
        ) : this.state.error ? (
          <ErrorMsg>Server seems to be down, please try again later.</ErrorMsg>
        ) : (
          <Spinner />
        )}

        <CardButtons>
          <CardBtn
            fetch
            onClick={() => {
              this.getQuote();
            }}
          >
            GET ANOTHER ONE
          </CardBtn>

          <CardTweet
            title={`"${this.state.quote} " - ${this.state.character}`}
            hashtags={["simpsons"]}
            url={window.location.href}
          >
            <TwitterIcon size={32} />
            TWEET
          </CardTweet>
        </CardButtons>
      </CardWrapper>
    );
  }
}

export default QuoteCard;
