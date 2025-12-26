import styled from 'styled-components'
import candidateData from '../data/candidate.json'

const SocialMediaWrapper = styled.div`
  background: white;
  padding: 2rem 0;
  border-top: 3px solid black;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 1.5rem 0;
    gap: 1.5rem;
  }
`

const SocialLink = styled.a`
  text-decoration: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: clamp(2rem, 3vw, 2.5rem);
  height: clamp(2rem, 3vw, 2.5rem);

  &:hover {
    opacity: 0.7;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: clamp(1.8rem, 4vw, 2.2rem);
    height: clamp(1.8rem, 4vw, 2.2rem);
  }
`

const SocialIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`

function SocialMediaKachel() {
  const socialLinks = []

  if (candidateData.instagram) {
    socialLinks.push({
      href: candidateData.instagram,
      icon: '/icons/instagram.svg',
      label: 'Instagram'
    })
  }

  if (candidateData.x) {
    socialLinks.push({
      href: candidateData.x,
      icon: '/icons/x.svg',
      label: 'X (Twitter)'
    })
  }

  if (candidateData.bluesky) {
    socialLinks.push({
      href: candidateData.bluesky,
      icon: '/icons/bluesky.svg',
      label: 'Bluesky'
    })
  }

  if (candidateData.facebook) {
    socialLinks.push({
      href: candidateData.facebook,
      icon: '/icons/facebook.svg',
      label: 'Facebook'
    })
  }

  if (socialLinks.length === 0) {
    return null
  }

  return (
    <SocialMediaWrapper>
      {socialLinks.map((link) => (
        <SocialLink
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
        >
          <SocialIcon src={link.icon} alt={`${link.label} Profil von ${candidateData.vorname} ${candidateData.nachname}`} />
        </SocialLink>
      ))}
    </SocialMediaWrapper>
  )
}

export default SocialMediaKachel

