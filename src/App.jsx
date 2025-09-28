import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
