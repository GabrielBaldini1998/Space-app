import { styled } from "styled-components"
import search from './search.png'

const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;

    @media (max-width: 768px) {
        display: block;
        width: 100%;
        align-self: stretch;
    }
`;


const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    max-width: 100%;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;

    @media (max-width: 768px) {
        width: 100%;
        font-size: 18px;
    }
`

const IconeLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`;

const CampoTexto = ({ value, onChange, ...props }) => {
    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado 
                placeholder="O que você procura?" 
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
                {...props} 
            />
            <IconeLupa src={search} alt="ícone de lupa" />
        </ContainerEstilizado>
    )
}

export default CampoTexto