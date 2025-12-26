import styled from 'styled-components'

export const WordBreakContent = styled.div`
  & span {
    display: block;
  }
`

export const KachelContainer = styled.div`
  border: ${props => props.hasBorder ? '3px solid black' : 'none'};
  background: ${props => props.bgColor || 'white'};
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    padding: 2rem;
    min-height: auto;
  }
`

export const KachelLink = styled.a`
  border: ${props => props.hasBorder ? '3px solid black' : 'none'};
  background: ${props => props.bgColor || 'white'};
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  position: relative;
  z-index: 1;
  -webkit-tap-highlight-color: transparent;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  > * {
    pointer-events: none;
  }
  
  &:has(button), &:has([onclick]) {
    * {
      pointer-events: auto;
    }
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    z-index: 10;
    overflow: visible;
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 2rem;
    min-height: auto;
  }
`

export const KachelTitle = styled.h2`
  color: ${props => props.textColor || 'black'};
  font-size: clamp(2rem, 3.5vw, 3.5rem);
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  letter-spacing: clamp(2px, 0.4vw, 5px);
  border-bottom: 3px solid ${props => props.textColor || 'black'};
  padding-bottom: 0.8rem;
  overflow: hidden;
  word-wrap: break-word;
  hyphens: auto;
  line-height: 1.1;

  & ${WordBreakContent} span {
    display: block;
  }

  @media (max-width: 768px) {
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    letter-spacing: clamp(1px, 0.5vw, 3px);
    margin-bottom: 1rem;
    padding-bottom: 0.6rem;
  }
`

export const KachelContent = styled.div`
  color: ${props => props.textColor || 'black'};
  font-size: clamp(1.1rem, 1.8vw, 1.8rem);
  line-height: 1.5;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  letter-spacing: clamp(0.5px, 0.2vw, 1.5px);
  word-wrap: break-word;
  hyphens: auto;

  & ${WordBreakContent} span {
    display: block;
  }

  @media (max-width: 768px) {
    font-size: clamp(1rem, 3vw, 1.4rem);
    letter-spacing: clamp(0.3px, 0.2vw, 1px);
  }
`

