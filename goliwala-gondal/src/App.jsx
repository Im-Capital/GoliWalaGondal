import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import ExperiencePage from './pages/ExperiencePage';
import GalleryPage from './pages/GalleryPage';
import PartiesPage from './pages/PartiesPage';
import VisitUsPage from './pages/VisitUsPage';
import FAQPage from './pages/FAQPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-near-black">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/parties" element={<PartiesPage />} />
            <Route path="/visit-us" element={<VisitUsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
