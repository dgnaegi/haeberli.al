import { WordBreakContent } from '../components/shared/styled'

export function formatTextWithLineBreaks(text) {
  if (!text) return null
  const words = text.split(/\s+/)
  return (
    <WordBreakContent>
      {words.map((word, index) => (
        <span key={index}>{word}</span>
      ))}
    </WordBreakContent>
  )
}
