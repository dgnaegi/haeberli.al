import styled from 'styled-components'
import portrait from '/portrait.png'
import candidateData from '../data/candidate.json'

const PortraitContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #f5f5f5;

  @media (max-width: 768px) {
    min-height: 60vh;
    max-height: 70vh;
  }
`

const PortraitImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 25%;
  display: block;
  filter: brightness(1.05) contrast(1.02);
`

const TextOverlay = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 3rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 10;

  @media (max-width: 768px) {
    bottom: 2rem;
    left: 2rem;
    gap: 0.4rem;
  }

  @media (max-width: 480px) {
    bottom: 1.5rem;
    left: 1.5rem;
  }
`

const NameLine = styled.div`
  background: white;
  padding: 0.8rem 1.5rem;
  display: inline-block;
  font-size: clamp(2.5rem, 5vw, 5rem);
  font-weight: 900;
  color: #ff1975;
  text-transform: uppercase;
  letter-spacing: clamp(2px, 0.5vw, 6px);
  line-height: 1;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transform: translateY(0);

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: clamp(2rem, 6vw, 4rem);
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
  }
`

const SubtitleLine = styled.h1`
  background: white;
  padding: 0.6rem 1.2rem;
  display: inline-block;
  font-size: clamp(1rem, 2vw, 1.5rem);
  font-weight: 700;
  color: black;
  text-transform: uppercase;
  letter-spacing: clamp(1px, 0.2vw, 2px);
  line-height: 1.2;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  margin: 0.5rem 0 0 0;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: clamp(0.9rem, 2.5vw, 1.2rem);
    margin-top: 0.4rem;
  }

  @media (max-width: 480px) {
    padding: 0.4rem 0.8rem;
    font-size: clamp(0.8rem, 2vw, 1rem);
  }
`

function PortraitSection() {
  const fullName = `${candidateData.vorname} ${candidateData.nachname}`
  const kandidatText = candidateData.gender === 'm' ? 'Kandidat' : 'Kandidatin'
  const altText = `Kandidatenbild von ${fullName}, ${kandidatText} für den Gemeinderat in ${candidateData.wahlkreis} für die Alternative Liste`
  const subtitleText = `Gemeinderats${kandidatText.toLowerCase()} ${candidateData.wahlkreis}`
  
  return (
    <PortraitContainer>
      <PortraitImage 
        src={portrait} 
        alt={altText}
        itemProp="image"
        itemScope
        itemType="https://schema.org/Person"
      />
      <TextOverlay>
        <NameLine>{candidateData.vorname}</NameLine>
        <NameLine>{candidateData.nachname}</NameLine>
        <SubtitleLine>{subtitleText}</SubtitleLine>
      </TextOverlay>
    </PortraitContainer>
  )
}

export default PortraitSection

