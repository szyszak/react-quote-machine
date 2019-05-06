import React from "react";
import styled from "styled-components";

// STYLES

const SpinnerDots = styled.div`
  margin-bottom: 50px;
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  color: #00aced;
  font-size: 10px;
  position: relative;
  animation: load 1.8s infinite ease-in-out;
  animation-delay: -0.16s;

  ::before,
  ::after {
    content: "";
    position: absolute;
    top: 0;
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    animation-fill-mode: both;
    animation: load 1.8s infinite ease-in-out;
  }

  ::before {
    left: -3.5em;
    animation-delay: -0.32s;
  }

  ::after {
    left: 3.5em;
  }

  @keyframes load {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
`;

const SpinnerText = styled.p`
  font-family: "Gloria Hallelujah";
  font-size: 21px;
`;

// COMPONENT

const Spinner = () => {
  return (
    <>
      <SpinnerDots />
      <SpinnerText>SOMETHING IS LOADING...</SpinnerText>
    </>
  );
};

export default Spinner;
