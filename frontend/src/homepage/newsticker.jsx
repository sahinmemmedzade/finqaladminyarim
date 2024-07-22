import React, { useState, useEffect } from 'react';
import './NewsTicker.css';

const newsItems = [
  { id: 1, title: 'Salam' },
  { id: 2, title: 'Necəsən' },
  { id: 3, title: 'Sağ ol' },
  { id: 4, title: 'Sən' },
  { id: 5, title: 'Sən Necəsən' },
  { id: 6, title: 'Salam' },
  { id: 7, title: 'Necəsən' },
  { id: 8, title: 'Sağ ol' },
  { id: 9, title: 'Sən' },
  { id: 10, title: 'Sən Necəsən' },
  { id: 11, title: 'Salam' },
  { id: 12, title: 'Necəsən' },
  { id: 13, title: 'Sağ ol' },
  { id: 14, title: 'Sən' },
  { id: 15, title: 'Sən Necəsən' },
  { id: 16, title: 'Salam' },
  { id: 17, title: 'Necəsən' },
  { id: 18, title: 'Sağ ol' },
  { id: 19, title: 'Sən' },
  { id: 20, title: 'Sən Necəsən' },
  { id: 21, title: 'Salam' },
  { id: 22, title: 'Necəsən' },
  { id: 23, title: 'Sağ ol' },
  { id: 24, title: 'Sən' },
  { id: 25, title: 'Sən Necəsən' },
  { id: 26, title: 'Salam' },
  { id: 27, title: 'Necəsən' },
  { id: 28, title: 'Sağ ol' },
  { id: 29, title: 'Sən' },
  { id: 30, title: 'Sən Necəsən' },
  { id: 31, title: 'Salam' },
  { id: 32, title: 'Necəsən' },
  { id: 33, title: 'Sağ ol' },
  { id: 34, title: 'Sən' },
  { id: 35, title: 'Sən Necəsən' },
  { id: 36, title: 'Salam' },
  { id: 37, title: 'Necəsən' },
  { id: 38, title: 'Sağ ol' },
  { id: 39, title: 'Sən' },
  { id: 40, title: 'Sən Necəsən' },
  { id: 41, title: 'Salam' },
  { id: 42, title: 'Necəsən' },
  { id: 43, title: 'Sağ ol' },
  { id: 44, title: 'Sən' },
  { id: 45, title: 'Sən Necəsən' },
  { id: 46, title: 'Salam' },
  { id: 47, title: 'Necəsən' },
  { id: 48, title: 'Sağ ol' },
  { id: 49, title: 'Sən' },
  { id: 50, title: 'Sən Necəsən' },
];

const NewsTicker = () => {
  return (
    <div className="news-ticker">
    
      <div className="news-items">
        {newsItems.map((item, index) => (
          <div key={index} className="news-item">
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;
