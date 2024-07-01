import React from 'react';
import styled from 'styled-components';


// Styled component for the container of each article
const ArticleContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-10px);
  }

  &.large {
    grid-column: span 2;
  }
`;

// Styled component for the article image
const ArticleImage = styled.img`
  width: 100%;
  height: auto;
`;
// For Text
const ArticleText = styled.div`
  padding: 1rem;
  text-align: left;
`;

//For Header
const ArticleHeadline = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 0.5rem;
`;

//For Byline
const ArticleByline = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin: 0 0 1rem;
`;

const ArticleTeaser = styled.p`
  font-size: 1rem;
  color: #333;
`;



// Functional component to render each individual article
const Article = ({ article, isLarge }) => (
  <ArticleContainer className={isLarge ? 'large' : ''}>
    <ArticleImage src={`https://example.com/${article.image}`} alt={article.head} />
    <ArticleText>
      <ArticleHeadline>{article.head}</ArticleHeadline>
      <ArticleByline><strong>{article.byline.text}</strong></ArticleByline>
      <ArticleTeaser>{article.teaser}</ArticleTeaser>
    </ArticleText>
  </ArticleContainer>
);

export default Article;
