import React, { useState } from 'react';
import { FaAd, FaNewspaper, FaThList, FaPhoneAlt, FaVideo, FaFileAlt, FaRegNewspaper } from 'react-icons/fa';
import './admin.css';
import { MdLiveTv, MdOutlineRateReview } from 'react-icons/md';
import ReklamOptions from './ReklamEmeliyyatlari';
import SonXeberOptions from './Sonxeberler';
import KateqoriyaOptions from './Kateoqriya';
import ElaqeyeOptions from './Elaqe';

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className='admin'>
      <div className="admin-panel">
        <h1>O</h1>
        <div onClick={() => handleSectionClick('reklam')}>
          <FaAd className="icon" title='Reklam'/>
          <h3>Reklam</h3>
        </div>
        <div onClick={() => handleSectionClick('sonxeberler')}>
          <FaNewspaper className="icon" title='Sonxeberler' />
          <h3>Sonxeberler</h3>
        </div>
        <div onClick={() => handleSectionClick('kateqoriya')}>
          <FaThList className="icon" title='Kateqoriya' />
          <h3>Kateqoriya</h3>
        </div>
        <div onClick={() => handleSectionClick('elaqeye')}>
          <FaPhoneAlt className="icon" title='Elaqe' />
          <h3>Elaqe</h3>
        </div>
        <div title='Canli video'>
          <MdLiveTv className="icon" title='Canli video' />
          <h3>Canli video</h3>
        </div>
        <div>
          <FaFileAlt className="icon" title='Xeberler'/>
          <h3>Xeberler</h3>
        </div>
        <div>
          <FaRegNewspaper className="icon" title='KoseXeberleri' />
          <h3>KoseXeberleri</h3>
        </div>
        <div>
          <MdOutlineRateReview className="icon" title='Yorumlar'/>
          <h3>Yorumlar</h3>
        </div>
        <div>
          <FaVideo className="icon" title='Video' />
          <h3>Video</h3>
        </div>
      </div>

      <div className='options'>
        {activeSection === 'reklam' && <ReklamOptions />}
        {activeSection === 'sonxeberler' && <SonXeberOptions />}
        {activeSection === 'kateqoriya' && <KateqoriyaOptions />}
        {activeSection === 'elaqeye' && <ElaqeyeOptions />}
        {/* Add other sections here as needed */}
      </div>
    </div>
  );
}

export default AdminPanel;
