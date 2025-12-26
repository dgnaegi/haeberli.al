import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Kachel from './Kachel'
import SmallKachel from './SmallKachel'
import SocialMediaKachel from './SocialMediaKachel'

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  overflow-y: auto;
  overflow-x: visible;
  padding-right: 1rem;
  padding-top: 0.5rem;

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

  @media (max-width: 768px) {
    overflow: visible;
    gap: 1.5rem;
    padding-right: 0;
  }
`

const SmallKachelContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`

const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`

function KachelnSection() {
  const navigate = useNavigate()

  return (
    <RightSection>
      <NavContainer aria-label="Hauptnavigation">
        <Kachel
          title="Über mich"
          content={null}
          bgColor="#ff1975"
          textColor="white"
          href="/uber-mich"
          onClick={(e) => {
            e.preventDefault()
            navigate('/uber-mich')
          }}
          hasBorder={true}
        />
        
        <Kachel
          title="Unser Wahlprogramm"
          content={null}
          bgColor="black"
          textColor="#ff1975"
          href="/wahlprogramm"
          onClick={(e) => {
            e.preventDefault()
            navigate('/wahlprogramm')
          }}
        />
      </NavContainer>
      
      <SmallKachelContainer>
        <SmallKachel
          href="https://tanja-maag.ch"
          text="Tanja maag in den Stadtrat"
        />
        <SmallKachel
          href="https://radikalsozial.ch"
          text="Radikal Sozial"
        />
      </SmallKachelContainer>
      
      <SocialMediaKachel />
    </RightSection>
  )
}

export default KachelnSection

