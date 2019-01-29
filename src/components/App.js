import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import QuoteCard from "./QuoteCard";

// GLOBAL STYLES

const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    background-color: #7cc0ff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
  }

  @media (max-width: 560px) {
    body {
      background-color: #ffffff;
    }
  }
`;

// STYLES

const AppWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 560px) {
    display: block;
  }
`;

// COMPONENT

const App = () => (
  <>
    <GlobalStyles />
    <AppWrapper>
      <QuoteCard />
    </AppWrapper>
  </>
);

export default App;
