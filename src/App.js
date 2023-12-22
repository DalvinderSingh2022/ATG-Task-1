import React, { createContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FilterSection from './components/FilterSection';
import PostSection from './components/PostSection';
import EditButton from './components/EditButton';

export const ScreenContext = createContext();

const App = () => {
  const [joined, setJoined] = useState(false);
  const [islargescreen, setIslargescreen] = useState(true);

  useEffect(() => {
    const reSize = (e) => {
      setIslargescreen(e.target.innerWidth > 820);
    }
    window.addEventListener("resize", reSize);

    return () => window.removeEventListener("resize", reSize);
  }, [])

  return (
    <ScreenContext.Provider value={islargescreen}>
      <main>
        <Navbar />
        <aside className='flex'>
          <HeroSection />
        </aside>
        <article>
          <section className='flex' >
            <FilterSection props={{ joined, setJoined }} />
          </section>
          <PostSection props={{ joined, setJoined }} />
        </article>
        {!islargescreen && <EditButton />}
      </main>
    </ScreenContext.Provider>
  )
}

export default App;