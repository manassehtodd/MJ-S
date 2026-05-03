import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Collections from './pages/Collections'
import CollectionDetails from './pages/CollectionsDetails'
import Contact from './pages/Contact'
import { Analytics } from '@vercel/analytics/react';

function App(){
  return(
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/collections/:id" element={<CollectionDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <Analytics />
    </>
  );
}

export default App;