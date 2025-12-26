import styled from 'styled-components'

const BottomBarContainer = styled.div`
  width: 100%;
  background: #ff1975;
  border-top: 8px solid black;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const BarText = styled.div`
  color: white;
  font-size: 2.5rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 5px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    letter-spacing: 4px;
  }
`

function BottomBar({ text = 'Alternative Liste' }) {
  return (
    <BottomBarContainer>
      <BarText>{text}</BarText>
    </BottomBarContainer>
  )
}

export default BottomBar

