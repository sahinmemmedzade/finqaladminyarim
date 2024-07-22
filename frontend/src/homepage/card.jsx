import React, { useState } from "react";
import "./card.css";
import { AiOutlineEye, AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import classNames from "classnames";

const CardComponent = ({ cards }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const cardsPerPage = 12;

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    const searchInput = document.querySelector('.input-search');
    searchInput.focus();
  };

  // Filter cards based on search query
  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate cards for current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  // Calculate total pages
  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Generate page buttons
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="searchandcards">
      <div className="search-box">
        <button className="btn-search" onClick={handleSearchClick}><FaSearch /></button>
        <input
          type="text"
          className="input-search"
          placeholder="Type to Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="container">
        {currentCards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.title} />
            <div className="card-content">
              <div className="card-header">
                <span className="cardcategory">{card.category}</span>
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <div className="like-dislike">
                <div className="like">
                  <AiOutlineLike />
                  <span>{card.likes}</span>
                </div>
                <div className="dislike">
                  <AiOutlineDislike />
                  <span>{card.dislikes}</span>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="date">
                <AiOutlineEye />
                <span>{card.date}</span>
              </div>
              <div className="views">
                <AiOutlineEye />
                <span>{card.views}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={number === currentPage ? 'active' : ''}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
