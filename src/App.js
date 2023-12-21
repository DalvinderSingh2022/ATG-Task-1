import React from 'react'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FilterSection from './components/FilterSection';
import PostSection from './components/PostSection';

const App = () => {
  return (
    <main>
      <Navbar />
      <aside>
        <HeroSection />
      </aside>
      <article>
        <section className='flex'>
          <FilterSection />
        </section>
        <PostSection />
      </article>
    </main>
  )
}

export default App;