import { KachelContainer, KachelLink, KachelTitle, KachelContent } from './shared/styled'
import { formatTextWithLineBreaks } from '../utils/textFormatting'

function Kachel({ title, content, bgColor, textColor, href, target, rel, onClick, hasBorder }) {
  const contentElement = (
    <>
      <KachelTitle textColor={textColor}>
        {formatTextWithLineBreaks(title)}
      </KachelTitle>
      <KachelContent textColor={textColor}>
        {content}
      </KachelContent>
    </>
  )
  
  if (href) {
    return (
      <KachelLink 
        bgColor={bgColor}
        hasBorder={hasBorder}
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
      >
        {contentElement}
      </KachelLink>
    )
  }
  
  return (
    <KachelContainer bgColor={bgColor} hasBorder={hasBorder}>
      {contentElement}
    </KachelContainer>
  )
}

export default Kachel

