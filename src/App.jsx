import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ArtistsPage from './pages/ArtistsPage';
import ArtistDetailPage from './pages/ArtistDetailPage';
import ReleasesPage from './pages/ReleasesPage';
import ReleaseDetailPage from './pages/ReleaseDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SubmissionPage from './pages/SubmissionPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
            <HomePage />
          </Layout>
        } />
        <Route path="/artists" element={
          <Layout>
            <ArtistsPage />
          </Layout>
        } />
        <Route path="/artists/:id" element={
          <Layout>
            <ArtistDetailPage />
          </Layout>
        } />
        <Route path="/releases" element={
          <Layout>
            <ReleasesPage />
          </Layout>
        } />
        <Route path="/releases/:id" element={
          <Layout>
            <ReleaseDetailPage />
          </Layout>
        } />
        <Route path="/about" element={
          <Layout>
            <AboutPage />
          </Layout>
        } />
        <Route path="/contact" element={
          <Layout>
            <ContactPage />
          </Layout>
        } />
        <Route path="/submit" element={
          <Layout>
            <SubmissionPage />
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;

