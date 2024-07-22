import React from 'react';
import NewsTicker from './homepage/newsticker';
import CarouselHome from './homepage/carousel';
import Sidebar from './sidebar.jsx';
import ScrollingList from './homepage/scrollnews';
import CardComponent from './homepage/card.jsx';
import './Home.css';

const Home = () => {
  const cards = [
    // Kart məlumatları
    {
      image: "image1.jpg",
      title: "Title 1",
      description: "Description 1",
      date: "18 İYL, 2024 / 17:00",
      views: "83",
      likes: "1",
      comments: "8",
      category: "CƏMİYYƏT",
      mediaType: "VİDEO",
    },
    // Digər kart məlumatları...
  ];

  return (
    <>
      <NewsTicker />
      <div className='main'>
        <CarouselHome />
        <ScrollingList />
      </div>
      <CardComponent cards={cards} />
    </>
  );
}

export default Home;
