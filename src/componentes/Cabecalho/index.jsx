import { styled } from "styled-components"
import CampoTexto from "../CampoTexto"

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    gap: 24px;
    align-items: center;
    img {
        max-width: 212px;
    }

    @media (max-width: 768px) {
      padding: 32px 0;
      flex-direction: column;
      align-items: stretch;

      img {
        max-width: 168px;
        align-self: flex-start;
      }
    }
`

const Cabecalho = ({ busca, aoBuscar }) => {
    return (<HeaderEstilizado>
        <img src="/imagens/logo.png" alt="" />
        <CampoTexto value={busca} onChange={aoBuscar} />
    </HeaderEstilizado>)
}

export default Cabecalho