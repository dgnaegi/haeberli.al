import { useNavigate } from 'react-router-dom'
import PortraitSection from './PortraitSection'
import candidateData from '../data/candidate.json'
import {
  RightSection,
  BackButton,
  PageTitle,
  SectionHeading,
  ContentText,
  NavigationLink,
  NavigationContainer
} from './shared/commonStyles'

function UberMichView() {
  const navigate = useNavigate()
  const fullName = `${candidateData.vorname} ${candidateData.nachname}`
  const kandidatText = candidateData.gender === 'm' ? 'Kandidat' : 'Kandidatin'
  
  return (
    <>
      <PortraitSection />
      <RightSection>
        <nav aria-label="Navigation">
          <BackButton onClick={() => navigate('/')}>← Zurück zur Startseite</BackButton>
        </nav>
        <main>
          <article>
            <PageTitle>{fullName} in den Gemeinderat</PageTitle>
            <SectionHeading>Über mich</SectionHeading>
            <ContentText>
              <div dangerouslySetInnerHTML={{ __html: candidateData.uberMich }} />
            </ContentText>
            <NavigationContainer aria-label="Interne Links">
              <p>
                <NavigationLink href="/wahlprogramm">
                  → Zum Wahlprogramm
                </NavigationLink>
              </p>
            </NavigationContainer>
          </article>
        </main>
      </RightSection>
    </>
  )
}

export default UberMichView

