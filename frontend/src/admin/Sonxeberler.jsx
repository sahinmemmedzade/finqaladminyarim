import React, { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import './SonXeberOptions.css'; // Ensure this file is updated with the latest CSS

const SonXeberOptions = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showAllNews, setShowAllNews] = useState(false);
  const [editNewsId, setEditNewsId] = useState(null);
  const [newsContent, setNewsContent] = useState('');
  
  const handleAddNewsClick = () => {
    setShowAddForm(true);
    setShowAllNews(false);
    setEditNewsId(null); // Clear edit state when adding new news
  };

  const handleAllNewsClick = () => {
    setShowAllNews(true);
    setShowAddForm(false);
    setEditNewsId(null); // Clear edit state when viewing all news
  };

  const handleDeleteNews = (id) => {
    console.log(`Deleting news with id: ${id}`);
    // Implement delete functionality here
  };

  const handleEditClick = (id, content) => {
    setEditNewsId(id);
    setNewsContent(content);
    setShowAddForm(true); // Show the form when editing
    setShowAllNews(false); // Hide the news list while editing
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editNewsId !== null) {
      console.log(`Updating news with id: ${editNewsId} to content: ${newsContent}`);
      // Implement update functionality here
      setEditNewsId(null);
    } else {
      console.log(`Adding new news with content: ${newsContent}`);
      // Implement add functionality here
    }
    setNewsContent('');
    setShowAddForm(false); // Hide the form after submission
  };

  const mockNews = [
    { id: 1, content: 'Content for news 1, which might be quite long and need truncation.' },
    { id: 2, content: 'Content for news 2, which might be quite long and need truncation.' },
    { id: 3, content: 'Content for news 3, which might be quite long and need truncation.' },
  ];

  return (
    <div className="son-xeber-options">
       <h2> SonXeberler</h2>
      <ul>
        <li onClick={handleAddNewsClick}>Son xəbər əlavə et</li>
        <li onClick={handleAllNewsClick}>Butun son xəbərlər</li>
      </ul>

      {showAddForm && (
        <div className="son-xeber-form">
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="news-content" className="news-label">Xəbər</label>
            <textarea
              id="news-content"
              className="news-input"
              rows="6"
              value={newsContent}
              onChange={(e) => setNewsContent(e.target.value)}
            />
            <button type="submit" className="submit-button">Göndər</button>
          </form>
        </div>
      )}

      {showAllNews && !showAddForm && (
        <div className="all-news">
          {mockNews.map(news => (
            <div key={news.id} className="news-item">
              <p className="news-content">
                {news.content.length > 100 ? `${news.content.substring(0, 100)}...` : news.content}
              </p>
              <div className="news-actions">
                <BsThreeDots
                  className="more-options"
                  onClick={() => document.getElementById(`options-${news.id}`).classList.toggle('visible')}
                />
                <div id={`options-${news.id}`} className="options-menu">
                  <button onClick={() => handleEditClick(news.id, news.content)}>Edit</button>
                  <button onClick={() => handleDeleteNews(news.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SonXeberOptions;
