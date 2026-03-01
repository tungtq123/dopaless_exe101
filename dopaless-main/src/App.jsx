import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/home/HomePage';
import PlaceholderPage from './pages/PlaceholderPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/gioi-thieu"
          element={
            <PlaceholderPage
              title="Giới Thiệu"
              emoji="🧠"
              description="Tìm hiểu về sứ mệnh của Dopaless và nhóm phát triển."
            />
          }
        />
        <Route
          path="/bai-test"
          element={
            <PlaceholderPage
              title="Bài Test Dopamine"
              emoji="📊"
              description="Bài kiểm tra tâm lý về mức độ lệ thuộc dopamine đang được xây dựng."
            />
          }
        />
        <Route
          path="/tin-tuc"
          element={
            <PlaceholderPage
              title="Tin Tức & Blog"
              emoji="📰"
              description="Các bài viết khoa học và tin tức mới nhất về sức khoẻ số."
            />
          }
        />
        <Route
          path="/lien-he"
          element={
            <PlaceholderPage
              title="Liên Hệ"
              emoji="💌"
              description="Kết nối với đội ngũ Dopaless. Email: hello@dopaless.com"
            />
          }
        />
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
