import styled from 'styled-components'

const SmallKachelLink = styled.a`
  border: 3px solid black;
  background: white;
  padding: 1.5rem 2rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 18px rgba(0, 0, 0, 0.12);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.1);
  }
`

const SmallKachelText = styled.div`
  color: black;
  font-size: clamp(1.1rem, 1.5vw, 1.4rem);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: clamp(2px, 0.3vw, 3px);
  text-align: center;

  @media (max-width: 768px) {
    font-size: clamp(1rem, 2vw, 1.2rem);
    letter-spacing: clamp(1px, 0.2vw, 2px);
  }
`

function SmallKachel({ href, text, target = '_blank', rel = 'noopener noreferrer' }) {
  return (
    <SmallKachelLink href={href} target={target} rel={rel}>
      <SmallKachelText>{text}</SmallKachelText>
    </SmallKachelLink>
  )
}

export default SmallKachel

