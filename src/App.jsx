import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import PortraitSection from './components/PortraitSection'
import KachelnSection from './components/KachelnSection'
import WahlprogrammView from './components/WahlprogrammView'
import UberMichView from './components/UberMichView'
import { updateSEO } from './utils/seo'
import candidateData from './data/candidate.json'

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: white;
  overflow: hidden;

  @media (max-width: 768px) {
    height: auto;
    min-height: 100vh;
  }
`

const MainContent = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: auto;
    min-height: auto;
  }
`

const PortraitWrapper = styled.div`
  position: relative;
  overflow: hidden;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  overflow-y: auto;
  background: white;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    min-height: 50vh;
  }
`

function AppContent() {
  const location = useLocation()

  useEffect(() => {
    updateSEO(location.pathname)
  }, [location.pathname])

  useEffect(() => {
    // Scroll to top on route change, especially important for mobile
    window.scrollTo(0, 0)
    // Also scroll any scrollable containers to top
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [location.pathname])

  return (
    <AppContainer>
      <MainContent>
        <Routes>
          <Route path="/wahlprogramm" element={<WahlprogrammView />} />
          <Route path="/uber-mich" element={<UberMichView />} />
          <Route path="/ueber-mich" element={<UberMichView />} />
          <Route path="/" element={
            <>
              <PortraitWrapper>
                <PortraitSection />
              </PortraitWrapper>
              <ContentWrapper>
                <main>
                  <KachelnSection />
                </main>
              </ContentWrapper>
            </>
          } />
        </Routes>
      </MainContent>
    </AppContainer>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
