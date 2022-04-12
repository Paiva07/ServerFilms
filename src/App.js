import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStorage } from './GlobalContext';
import Footer from './Footer';
import Header from './Header';
import Conta from './pages/Conta';
import Login from './pages/Login';
import ProtectedRoute from './components/Helper/ProtectedRouter';

function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/conta"
              element={
                <ProtectedRoute>
                  <Conta />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </GlobalStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
