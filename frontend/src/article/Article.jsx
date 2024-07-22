import React, { useState, useEffect } from 'react';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { FaFacebookF, FaTelegramPlane, FaTwitter, FaCopy, FaPrint, FaFacebook, FaWhatsapp, FaInstagram, FaTelegram } from 'react-icons/fa';
import './Article.css';

const Article = () => {
  const getInitialFontSize = () => {
    if (window.innerWidth <= 700) {
      return 12; // Font size for small screens
    } else if (window.innerWidth <= 1000) {
      return 14; // Font size for medium screens
    } else {
      return 16; // Font size for large screens
    }
  };

  const [fontSize, setFontSize] = useState(getInitialFontSize);

  useEffect(() => {
    const handleResize = () => {
      setFontSize(getInitialFontSize());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const increaseFontSize = () => {
    setFontSize(prevSize => prevSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize(prevSize => Math.max(12, prevSize - 2)); // Ensure font size doesn't go below 12
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(articleUrl);
    alert("URL copied to clipboard!");
  };

  const handlePrint = () => {
    window.print();
  };

  const articleUrl = "https://oxu.az/913632";

  return (
    <div className="article-container" style={{ fontSize: `${fontSize}px` }}>
      <div className='articleimg'>
        <img src="https://images.oxu.az/2024/07/20/taq8RodsU4jm79zHWjUnwNSQvFXei3D3Fg4iZ2t4:1200.jpg" alt=""/>
      </div>
      <h1>Abşeronda mağazadan 100 min manatlıq oğurluq: Hissə-hissə talayıb satdılar</h1>
      <div className="reaction-section">
        <div className="like-dislike">
          <div className="like">
            <AiOutlineLike />
            <span>16</span>
          </div>
          <div className="dislike">
            <AiOutlineDislike />
            <span>2</span>
          </div>
        </div>
        <div className="font-size-buttons">
          <button className="font-size-button" onClick={decreaseFontSize}>A-</button>
          <button className="font-size-button" onClick={increaseFontSize}>A+</button>
        </div>
      </div>
      <p>Abşeron rayonunun Xırdalan şəhərində oğurluq hadisəsi qeydə alınıb.</p>
      <p><strong>Oxu.Az</strong> xəbər verir ki, bu barədə Daxili İşlər Nazirliyindən bildirilib.</p>
      <p>
        Qeyd olunub ki, ərazidə yerləşən mağazalardan birinin sahibi ona məxsus anbardan 100 min manat dəyərində elektrik əşyalarının oğurlanması barədə polisə müraciət edib.
      </p>
      <p>
        Abşeron Rayon Polis İdarəsinin əməkdaşlarının keçirdikləri tədbirlə hadisəni törədən Faiq Cəbiyev və Namiq Xanmməmmədov saxlanılıblar. Araşdırmalarla müəyyən edilib ki, qabaqcadan əlbir olan F.Cəbiyev və N.Xanmməmmədov işlədikləri mağazanın deposundan elektrik açarları, mis şinləri və elektrik naqillərini hissə-hissə talayıb satıblar.
      </p>
      <p>
        Faktla bağlı Abşeron RPİ-nin İstintaq Şöbəsində Cinayət Məcəlləsinin müvafiq maddəsi ilə cinayət işi başlanılıb. Araşdırmalar davam etdirilir.
      </p>
      <div className="article-actions">
        <p>Xəbər xoşunuza gəlib? Sosial şəbəkələrdə paylaşın</p>
        <div className="social-buttons">
          <ul>
            <div className='socialmedia'>
              <div className='socialmediafooter'>
                <li className='facebook'><a href="https://www.facebook.com/oxu.azz" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
                <li className='twitter'><a href="https://x.com/oxuaz" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
                <li className='telegram'><a href="https://t.me/oxuaze" target="_blank" rel="noopener noreferrer"><FaTelegram /></a></li>
                <li className='whatsapp'><a href="https://wa.me/oxuaze" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a></li>
                <li className='instagram'><a href="https://www.instagram.com/oxuaz/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
              </div>
            </div>
          </ul>
          <button className="social-button copy" onClick={handleCopy}>
            <FaCopy />
          </button>
          <button className="social-button print" onClick={handlePrint}>
            <FaPrint />
          </button>
        </div>
        <a href={articleUrl} className="article-url">{articleUrl}</a>
      </div>
      <div className="comments-section">
        <h3>Rəylər</h3>
        <p>0 şərh</p>
        <input type="text" placeholder="Şərh əlavə edin..." />
      </div>
    </div>
  );
};

export default Article;
