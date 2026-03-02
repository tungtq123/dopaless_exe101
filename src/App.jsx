import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import TestPage from './pages/testpage/TestPage';
import PlaceholderPage from './pages/PlaceholderPage';
import NewsPage from './pages/news/NewsPage';
import NewsDetailPage from './pages/news/NewsDetailPage';
import ContactPage from './pages/contact/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gioi-thieu" element={<AboutPage />} />
        <Route path="/bai-test" element={<TestPage />} />
        <Route path="/tin-tuc" element={<NewsPage />} />
        <Route path="/tin-tuc/:id" element={<NewsDetailPage />} />
        <Route path="/lien-he" element={<ContactPage />} />
        {/* 404 fallback */}
        <Route
          path="*"
          element={
            <PlaceholderPage
              title="404 – Không tìm thấy trang"
              emoji="🔍"
              description="Trang bạn đang tìm kiếm không tồn tại."
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
