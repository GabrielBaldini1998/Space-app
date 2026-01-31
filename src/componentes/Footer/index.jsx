import { styled } from "styled-components"

const FooterEstilizado = styled.footer`
    background-color: #001634;
    color: #FFFFFF;
    padding: 20px;
    text-align: center;
`

const Paragrafo = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #FFFFFF;
`

const Link = styled.a`
    color: #FFFFFF;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`

const Footer  = () => {
    return (
        <FooterEstilizado>
            <Paragrafo>Desenvolvido por <Link href="https://github.com/GabrielBaldini1998" target="_blank">Gabriel Baldini</Link></Paragrafo>
        </FooterEstilizado>
    )
}

export default Footer