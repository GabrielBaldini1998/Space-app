import { styled } from "styled-components"
import { useState } from "react"

import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import Galeria from "./componentes/Galeria"
import ModalZoom from "./componentes/ModalZoom"

import fotos from "./fotos.json"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const AppContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`

const MainContainer = styled.main`
    display: flex;
    gap: 24px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
`

const ConteudoGaleria = styled.section`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`
const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)
  const [busca, setBusca] = useState("")
  const [tagSelecionada, setTagSelecionada] = useState(0)

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }
    
    setFotosDaGaleria(fotosDaGaleria.map(fotosDaGaleria => {
      return {
        ...fotosDaGaleria,
        favorita:
          fotosDaGaleria.id === foto.id ? !foto.favorita : fotosDaGaleria.favorita
      }
    }))
  }

  const filtrarFotos = () => {
    let fotosFiltradas = fotosDaGaleria

    // Filtro por tag
    if (tagSelecionada !== 0) {
      fotosFiltradas = fotosFiltradas.filter(foto => foto.tagId === tagSelecionada)
    }

    // Filtro por busca
    if (busca.trim() !== "") {
      const buscaLower = busca.toLowerCase()
      fotosFiltradas = fotosFiltradas.filter(foto => 
        foto.titulo.toLowerCase().includes(buscaLower) ||
        foto.fonte.toLowerCase().includes(buscaLower)
      )
    }

    return fotosFiltradas
  }

  const fotosFiltradas = filtrarFotos()

  return (
    <FundoGradiente>
      <AppContainer>
        <EstilosGlobais />
        <Cabecalho 
          busca={busca}
          aoBuscar={setBusca}
        />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner texto="A galeria mais completa de fotos do espaço" />
            <Galeria
              aoFotoSelecionada={foto => setFotoSelecionada(foto)}
              aoAlternarFavorito={aoAlternarFavorito}
              fotos={fotosFiltradas}
              tagSelecionada={tagSelecionada}
              aoSelecionarTag={setTagSelecionada}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom foto={fotoSelecionada} 
      aoFechar={() => setFotoSelecionada(null)}
      aoAlternarFavorito={aoAlternarFavorito}
      />
    </FundoGradiente>
  )
}

export default App