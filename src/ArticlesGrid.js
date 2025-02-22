import React from 'react';
import styled from 'styled-components';

//// Styled component for the main grid container of articles
const ArticlesGrid = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;
// Style component for container
const ArticleContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-10px);
  }
`;

//Component for Image
const ArticleImage = styled.img`
  width: 100%;
  height: auto;
`;

//Component for text
const ArticleText = styled.div`
  padding: 1rem;
  text-align: left;
`;

//Component for Headline
const ArticleHeadline = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ArticleByline = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 1rem;
`;

const ArticleTeaser = styled.p`
  font-size: 1rem;
  color: #333;
`;


// Data for the Articles
const articles = [
  {
    id: "779",
    byline: { text: "Jennifer Liu" },
    head: "Why inflation could drive the next quitting wave",
    teaser: "The Great Resignation could be spreading to new sectors where even middle- and high-wage workers are seeking big pay raises to ease the sting of inflation.",
    image: "1.jpg"
  },
  {
    id: "038",
    byline: { text: "Stuart McKinnon" },
    head: "New Rio chair plays down Russia, China comparison",
    teaser: "Rio Tinto’s incoming chairman has warned the world would be in a “devastating situation” if relationships with China deteriorated.",
    image: "059237d4a27f2bd1dbc60a9d1d3227df1faa2de7.jpg"
  },
  {
    id: "310",
    byline: { text: "Alex Druce" },
    head: "Groundbreaking move for crypto traders",
    teaser: "A major Aussie crypto exchange is breaking new ground with an offering that it hopes will entrench the likes of Bitcoin in the financial ecosystem.",
    image: "8dc2b01abf9fd280d0957c6d8a5dcf90c081bb1c.jpg"
  },

  {
    id: "001",
    byline:{ text: "Evelyn Cheng"},
    head: "China’s COVID restrictions are hitting big businesses",
    teaser: "Several international corporations warned in the last week the drag from China’s Covid controls will hit their entire business.",
    image: "75257e574a0da626371f94a04633be7afb3cca62.jpg"
 },
 {
    id:"204",
    byline:{
       "text":"Liv Casben"
    },
    head:"Beef recovers but supply pressures remain",
    teaser:"Australia's beef cattle herd will continue to grow but a report says supply chain constraints will impede sector growth.",
    image: "8ab07480538cef0a04a38a7867f708d0f4eba6a0-16x9-x0y0w1280h720.jpg"
 },
 {
    id:"377",
    byline:{
       text:"Cheyanne Enciso"
    },
    head:"Flight Centre launches new premium travel joint venture",
    teaser:"Flight Centre will aim to capitalise on surging post-COVID travel demand by launching a new group with two Sydney-based travel companies targeting premium and business travellers.",
    image: "0c58c11e2890a3286952989feb8940184184f769.jpg"
 },
 {
    id:"525",
    byline:{
       text:"Peter Law"
    },
    head:"‘Brand WA’: Call for State to get jump on global trade links",
    teaser:"WA’s peak business body is urging Mark McGowan to reverse the “reputational damage” caused by two years of closed borders by focusing on international trade in next week’s State Budget.",
    image: "398bebbb679e0eb128c6b1a0966d23550ec0c585-16x9-x0y1150w3072h1728.jpg"
 },
 {
    id:"307",
    byline:{
       text:"Geoffrey Thomas"
    },
    head:"Qantas makes major play for more of FIFO charter market",
    teaser:"Qantas has reached a deal to fully acquire Australian-based operator Alliance Aviation Services, enabling it to better serve the growing resources sector.",
    image: "b1cdf19932267dd7fcffc791b2ca60ff44b808bf.jpg"
 },
 {
    id:"108",
    byline:{
       text:"Neale Prior"
    },
    head:"Chief Justice puts boot into CITIC, Palmer legal plays",
    teaser:"WA’s top judge has blasted the high-cost litigation methods of Clive Palmer and the companies that have made him an iron ore billionaire.",
    image: "c33d85881e6ee98cd272febd72977a4f0fb0974b.jpg"
 },
 {
    id:"596",
    byline:{
       text:"Derek Rose"
    },
    head:"Banks lag but ASX still up 0.6pc ",
    teaser:"Three of the four big banks are down but most of the ASX has gained in morning trade.",
    image: "be302efa52fd296d24e31ad6fa624f9c5dbb6b35-16x9-x0y0w1280h720.jpg"
 },
 {
    id:"509",
    byline:{
       text:"Neale Prior"
    },
    head:"Silk stink as MinRes braces for battle over Wyatt papers",
    teaser:"The legal battle between Mineral Resources and co-founder Steve Wyatt’s rival new venture Destec has descended into an argument between senior barristers about what they are arguing about.",
    image: "7bedab86c49e4d0ab7d58ddeec4043f2817968c2.jpg"
 }
];

// Functional component for rendering each article
const Article = ({ article, isLarge }) => (
  <ArticleContainer className={isLarge ? 'large' : ''}>
    <ArticleImage src={process.env.PUBLIC_URL + '/' + article.image} alt={article.head} />
    <ArticleText>
      <ArticleHeadline>{article.head}</ArticleHeadline>
      <ArticleByline><strong>{article.byline.text}</strong></ArticleByline>
      <ArticleTeaser>{article.teaser}</ArticleTeaser>
    </ArticleText>
  </ArticleContainer>
);

// Functional component for rendering the grid of articles
const Articles = () => (
  <ArticlesGrid>
    {articles.map((article, index) => (
      <Article key={article.id} article={article} isLarge={index === 0} />
    ))}
  </ArticlesGrid>
);

export default Articles;
