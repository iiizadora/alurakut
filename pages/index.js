import { makePublicRouterInstance } from 'next/dist/client/router'
import styled from 'styled-components'

const Box = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
`;



export default function Home() {
  return (
    <MainGrid>
    <div style={{gridArea:'profileArea'}}>
      <Box >
        Imagem
      </Box>
    </div>


    <div style={{gridArea:'welcomeArea'}}>
      <Box >
        Bem vindo
      </Box>
    </div>

    <div style={{gridArea:'profileRelationsArea'}}>
      <Box>
        Pessoas da Comunidade
      </Box>
    </div>
    </MainGrid>
  )
}
