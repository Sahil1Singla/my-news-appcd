import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import ArticlesGrid from './ArticlesGrid';
import GlobalStyle from './GlobalStyle';

// Styled component for the main application container
const AppContainer = styled.div`
  text-align: center;
`;


// Main App component that renders the entire application
const App = () => (
  <AppContainer>
      {/* component for global CSS styles */}
    <GlobalStyle />
    
    {/* Component to render a grid of articles */}
    <ArticlesGrid />
  </AppContainer>
);

export default App;
