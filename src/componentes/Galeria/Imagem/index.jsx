import { styled } from "styled-components"
import BotaoIcone from "../../BotaoIcone"

const Figure = styled.figure`
    width: ${props => props.$expandida ? '90%' : '460px'};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    flex: 1 1 ${props => (props.$expandida ? '90%' : '320px')};
    position: relative;
    overflow: hidden;
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'GandhiSansRegular-Bold';
            font-weight: 700;
        }
        h4 {
            flex-grow: 1;
            font-family: 'GandhiSansRegular';
            font-weight: 400;
        }
        h3, h4 {
            margin: 0;
            font-size: 16px;
            margin: 5px;
        }
    }

    @media (max-width: 768px) {
        width: 100%;
        flex-basis: 100%;
    }
`

const ImagemContainer = styled.div`
    position: relative;
    width: 100%;
    min-height: 300px;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    border-radius: 20px 20px 0 0;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
`

const Rodape = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Imagem = ({ foto, expandida = false, aoZoomSolicitado, aoAlternarFavorito }) => {

    // If ternário:	
    // const iconeFavorito = foto.favorita ? "/icones/favorito-ativo.png" : "/icones/favorito.png";

    // If convencional:
    let iconeFavorito = "/icones/favorito.png";
    if (foto.favorita) {
        iconeFavorito = "/icones/favorito-ativo.png";
    }

    return (<Figure $expandida={expandida} id={`foto-${foto.id}`}>
        <ImagemContainer>
            <img src={foto.path} alt={foto.alt} />
        </ImagemContainer>
        <figcaption>
            <h3>{foto.titulo}</h3>
            <Rodape>
                <h4>{foto.fonte}</h4>
                <BotaoIcone onClick={() => aoAlternarFavorito(foto)}>
                    <img src={iconeFavorito} alt="Icone de favorito" />
                </BotaoIcone>
                {!expandida && <BotaoIcone aria-hidden={expandida} onClick={() => aoZoomSolicitado(foto)}>
                    <img src="/icones/expandir.png" alt="Icone de expandir" />
                </BotaoIcone>}
            </Rodape>
        </figcaption>
    </Figure>)
}

export default Imagem