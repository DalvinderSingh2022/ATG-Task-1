import React from 'react'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

const App = () => {
  return (
    <main>
      <Navbar />
      <aside>
        <HeroSection />
      </aside>
      <article></article>
    </main>
  )
}

export default App;