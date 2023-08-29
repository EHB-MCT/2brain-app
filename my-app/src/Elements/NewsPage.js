import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/NewsPage.css';


function App() {
    document.body.style = 'background: #f8f9fa;';
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Replace with your backend API endpoint
        const response = await axios.get('http://localhost:3001/api/ai-news', {
          headers: {
            'X-API-KEY': '6c918738b950405b9128758f12b5f957'
          }
        });
        setArticles(response.data.slice(0, 12));
       // Keep only the first 6 articles
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchArticles();
  }, []);

  console.log(articles, "articls") 

  return (
    <div className="App news-page">
      <h1 className="news-title">Latest AI News</h1>
      <p className="community-guide">Discover and stay updated on the latest news around AI and technology</p>
      <div className="news-container">
        {articles.map((article, index) => (
          <div className="news-card" key={index}>
          <div className="news-info">
            <span className="news-author">{article.author || 'Unknown'}</span>
            <span className="news-date">{new Date(article.publishedAt).toLocaleDateString()}</span>
          </div>
          <div className="news-image-wrapper">
            <img className="news-image" src={article.urlToImage || 'https://i.insider.com/64c15a6b42834d00193e4337?width=1200&format=jpeg'} alt={article.title} />
          </div>
          <h2 className="news-card-title">{article.title}</h2>
          <p className="news-card-description">{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            <button className="read-more-button">Read More</button>
          </a>
        </div>
        
        ))}
      </div>
    </div>
  );
}


export default App;
