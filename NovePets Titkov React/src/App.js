import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import IndexPage from './pages/IndexPage';
import AboutPage from './pages/AboutPage';
import PetsPage from './pages/PetsPage';
import ContactPage from './pages/ContactPage';



function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="pets" element={<PetsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
