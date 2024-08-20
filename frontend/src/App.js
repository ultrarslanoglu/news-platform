import React, { useState, useEffect } from 'react';

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('/api/news')
      .then(response => response.json())
      .then(data => setNews(data));
  }, []);

  return (
    <div>
      <h1>News Platform</h1>
      <ul>
        {news.map((item, index) => (
          <li key={index}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            <small>{new Date(item.date).toLocaleDateString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
