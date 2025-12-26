import styled from 'styled-components'

// Common scrollbar styles mixin
const scrollbarStyles = `
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 3px;
    
    &:hover {
      background: #999;
    }
  }
`

// Right section with scrollbar (used in multiple views)
export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 3rem;
  background: white;
  ${scrollbarStyles}

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`

// Left section with scrollbar (used in WahlprogrammView)
export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
  padding: 3rem;
  background: white;
  ${scrollbarStyles}

  @media (max-width: 768px) {
    display: none;
  }
`

// Back button (used in multiple views)
export const BackButton = styled.button`
  background: black;
  color: #ff1975;
  border: 3px solid black;
  padding: 1rem 2rem;
  font-size: clamp(0.9rem, 1.5vw, 1.3rem);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: clamp(1px, 0.2vw, 2px);
  cursor: pointer;
  margin-bottom: 2rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  width: 100%;
  text-align: left;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`

// Navigation links (more readable font)
export const NavigationLink = styled.a`
  color: #ff1975;
  text-decoration: underline;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: clamp(1rem, 1.5vw, 1.3rem);
  line-height: 1.6;
  transition: color 0.2s ease;

  &:hover {
    color: #d4145a;
  }

  &:not(:last-child) {
    margin-right: 1.5rem;
  }
`

// Navigation container for links
export const NavigationContainer = styled.nav`
  margin-top: 2rem;
  
  p {
    margin: 0;
  }
`

// Page title (H2) - used in content pages
export const PageTitle = styled.h2`
  color: black;
  font-size: clamp(2rem, 3.5vw, 3.5rem);
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 2rem;
  letter-spacing: clamp(2px, 0.4vw, 5px);
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    margin-bottom: 1.5rem;
  }
`

// Section heading (H2) - used for subsections
export const SectionHeading = styled.h2`
  color: black;
  font-size: clamp(1.5rem, 2.5vw, 2.2rem);
  font-weight: 700;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  letter-spacing: clamp(1px, 0.3vw, 2px);
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: clamp(1.3rem, 4vw, 1.8rem);
    margin-top: 2rem;
  }
`

// Intro text paragraph
export const IntroText = styled.p`
  color: black;
  font-size: clamp(1.1rem, 1.8vw, 1.6rem);
  line-height: 1.8;
  letter-spacing: clamp(0.5px, 0.2vw, 1px);
  margin-bottom: 2rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: clamp(1rem, 3vw, 1.4rem);
    margin-bottom: 1.5rem;
  }
`

// Content text div
export const ContentText = styled.div`
  color: black;
  font-size: clamp(1.1rem, 1.8vw, 1.8rem);
  line-height: 1.8;
  letter-spacing: clamp(0.5px, 0.2vw, 1.5px);

  @media (max-width: 768px) {
    font-size: clamp(1rem, 3vw, 1.4rem);
  }
`

