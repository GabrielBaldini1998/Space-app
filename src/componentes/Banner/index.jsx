import bannerBackgroundImage from "../../assets/banner.png"
import { styled } from "styled-components"

const FigureEstilizada = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover;
`

const TituloEstilizado = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 400px;
    padding: 0 64px;

@media (max-width: 768px) {
    font-size: 28px;
    line-height: 34px;
    padding: 0 20px;
    max-width: 100%;
    }
`

const Banner = ({ texto, backgroundImage = bannerBackgroundImage }) => {
    return (
    <FigureEstilizada $backgroundImage={backgroundImage}>
        <TituloEstilizado>
            {texto}
        </TituloEstilizado>
    </FigureEstilizada>)
}

export default Banner