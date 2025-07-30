import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { Impressum } from './components/Impressum';

function App() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-purple-700 via-blue-600 via-green-500 to-orange-500">
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Header />
              <HomePage />
              <Footer />
            </>
          } 
        />
        <Route 
          path="/impressum" 
          element={<Impressum />} 
        />
      </Routes>
    </div>
  );
}

export default App;