import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Outlet } from 'react-router-dom';
import './App.css';
import SignupForm from './auth/signup';
import Home from './Home';
import Login from './auth/login';
import ResendPassword from './auth/ResendPassword';
import NewsTicker from './homepage/newsticker';
import BottomDiv from './homepage/advertisiment';
import Sidebar from './sidebar.jsx';
import Footer from './footer.jsx';
import AboutUs from './About.jsx';
import CarouselHome from './homepage/carousel.jsx';
import Menu from './homepage/menu.jsx';
import Article from './article/Article.jsx';
import AdComponent from './anouncement.jsx';
import CardPagination from './pages/sport.jsx';
import ErrorPage from './error.jsx';
import LoadingPage from './loadingpage.jsx';
import AdminPanel from './admin/admin.jsx';

function Layout() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== '/adminim' && <Menu />}
      {location.pathname !== '/adminim' && <Sidebar className="Sidebar" />}
      <Outlet /> {/* Marşrut komponentlərinin yeri */}
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500); // 2 saniyə yükləmə vaxtı
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/article' element={<Article />} />
          <Route path='/adminim' element={<AdminPanel />} />
          <Route path='/anouncement' element={<AdComponent />} />
          <Route path='/newstricker' element={<NewsTicker />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resend-password" element={<ResendPassword />} />
          {/* Digər marşrutlar */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
