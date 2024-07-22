import React from 'react';
import './ScrollingList.css'; // Create this CSS file for styling

const data = [
  { time: '23:00', views: '22215', text: 'Azerbaycanda ata qızı ilə cinsi münasibətdə olan oğlını qətlə yetirdi - Hadisə yerindən GÖRÜNTÜLƏR', icon: '🖼️' },
  { time: '15:35', views: '15129', text: 'İnternetin bahalaşmasına şirkətdən CAVAB', icon: '🔔' },
  { time: '19:12', views: '12043', text: 'Azerbaycanda iş adamı oğlunu HƏBS ETDİRDİ', icon: '🔔' },
  { time: '14:24', views: '10043', text: 'Bakıda avtomobil piyada keçidinə düşüb', icon: '🔔' },
  { time: '23:00', views: '22215', text: 'Azerbaycanda ata qızı ilə cinsi münasibətdə olan oğlını qətlə yetirdi - Hadisə yerindən GÖRÜNTÜLƏR', icon: '🖼️' },
  { time: '15:35', views: '15129', text: 'İnternetin bahalaşmasına şirkətdən CAVAB', icon: '🔔' },
  { time: '19:12', views: '12043', text: 'Azerbaycanda iş adamı oğlunu HƏBS ETDİRDİ', icon: '🔔' },
  { time: '14:24', views: '10043', text: 'Bakıda avtomobil piyada keçidinə düşüb', icon: '🔔' }, { time: '23:00', views: '22215', text: 'Azerbaycanda ata qızı ilə cinsi münasibətdə olan oğlını qətlə yetirdi - Hadisə yerindən GÖRÜNTÜLƏR', icon: '🖼️' },
  { time: '15:35', views: '15129', text: 'İnternetin bahalaşmasına şirkətdən CAVAB', icon: '🔔' },
  { time: '19:12', views: '12043', text: 'Azerbaycanda iş adamı oğlunu HƏBS ETDİRDİ', icon: '🔔' },
  { time: '14:24', views: '10043', text: 'Bakıda avtomobil piyada keçidinə düşüb', icon: '🔔' },
  // Add more items as needed
];

const ScrollingList = () => {
  return (
    <div className="scrolling-list">
      {data.map((item, index) => (
        <div key={index} className="list-item">
          <div className="item-header">
            <span className="time">{item.time}</span>
            <span className="views">{item.views}</span>
            <span className="icon">{item.icon}</span>
          </div>
          <div className="item-text">{item.text}</div>
        </div>
      ))}
    </div>
  );
};

export default ScrollingList;
