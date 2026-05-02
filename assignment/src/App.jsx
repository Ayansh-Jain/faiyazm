import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/hero'
import './App.css'
import MulticornSection from './components/beyond'
import PhilosophySection from './components/philo'
import PurposeSection from './components/our'
import FocusSection from './components/focus'
import JoinMadathSection from './components/madath'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Terms from './components/Terms'
import Privacy from './components/Privacy'
import Shipping from './components/Shipping'
import Refund from './components/Refund'
import Contact from './components/Contact'
import NGOSection from './components/NGO'
import AdminDashboard from './components/Admin/AdminDashboard'
import Shopping from './components/Shopping'
import Entrepreneurship from './components/Entrepreneurship'
import LearningProgram from './components/LearningProgram'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <Router>
            <ScrollToTop />
            <div key="content">
              <Navbar />
              <Routes>
                <Route path="/" element={
                  <>
                    <Hero />
                    <div style={{ paddingTop: '80px' }}>
                      <PhilosophySection />

                      <PurposeSection />
                      <FocusSection />


                    </div>
                  </>
                } />
                <Route path="/philosophy" element={<div style={{ paddingTop: '80px' }}><PhilosophySection /></div>} />
                <Route path="/multicorn" element={<div style={{ paddingTop: '80px' }}></div>} />
                <Route path="/purpose" element={<div style={{ paddingTop: '80px' }}><PurposeSection /></div>} />
                <Route path="/focus" element={<div style={{ paddingTop: '80px' }}><FocusSection /></div>} />
                <Route path="/join" element={<div style={{ paddingTop: '80px' }}><JoinMadathSection /></div>} />
                <Route path="/terms" element={<div style={{ paddingTop: '80px' }}><Terms /></div>} />
                <Route path="/privacy" element={<div style={{ paddingTop: '80px' }}><Privacy /></div>} />
                <Route path="/shipping" element={<div style={{ paddingTop: '80px' }}><Shipping /></div>} />
                <Route path="/refund" element={<div style={{ paddingTop: '80px' }}><Refund /></div>} />
                <Route path="/contact" element={<div style={{ paddingTop: '80px' }}><Contact /></div>} />
                <Route path="/ngo" element={<div style={{ paddingTop: '80px' }}><NGOSection /></div>} />
                <Route path="/shopping" element={<div style={{ paddingTop: '80px' }}><Shopping /></div>} />
                <Route path="/Shopping" element={<div style={{ paddingTop: '80px' }}><Shopping /></div>} />
                <Route path="/Entrepreneurship" element={<div style={{ paddingTop: '80px' }}><Entrepreneurship /></div>} />
                <Route path="/Learning" element={<div style={{ paddingTop: '80px' }}><LearningProgram /></div>} />
                <Route path="/admin" element={<AdminDashboard />} />
              </Routes>
              <Footer />
            </div>
          </Router>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
