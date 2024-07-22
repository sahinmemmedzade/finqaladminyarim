import React, { useState } from 'react';
import './ReklamOptions.css';

const ReklamOptions = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showAllAds, setShowAllAds] = useState(false);

  const handleAddReklamClick = () => {
    setShowAddForm(!showAddForm);
    setShowAllAds(false);
  };

  const handleAllAdsClick = () => {
    setShowAllAds(!showAllAds);
    setShowAddForm(false);
  };

  const handleDeleteAd = (id) => {
    console.log(`Deleting ad with id: ${id}`);
    // Implement delete functionality here
  };

  const mockAds = [
    { id: 1, src: 'https://via.placeholder.com/150', alt: 'Ad 1' },
    { id: 2, src: 'https://via.placeholder.com/150', alt: 'Ad 2' },
    { id: 3, src: 'https://via.placeholder.com/150', alt: 'Ad 3' },
  ];

  return (
    <div className="reklam-options">
      <h2>Reklam</h2>
      <ul>
        <li onClick={handleAddReklamClick}>Reklam əlavə et</li>
        <li onClick={handleAllAdsClick}>Butun reklamlar</li>
      </ul>
      
      {showAddForm && (
        <div className="reklam-form">
          <h3>Fayl əlavə et</h3>
          <form>
            <label htmlFor="file-upload" className="custom-file-upload">
              Fayl seçin
            </label>
            <input id="file-upload" type="file" />
            <button type="submit" className="submit-button">Göndər</button>
          </form>
        </div>
      )}

      {showAllAds && (
        <div className="all-ads">
          {mockAds.map(ad => (
            <div key={ad.id} className="ad-item">
              <img src={ad.src} alt={ad.alt} className="ad-image" />
              <button className="delete-button" onClick={() => handleDeleteAd(ad.id)}>
                Sil
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReklamOptions;
