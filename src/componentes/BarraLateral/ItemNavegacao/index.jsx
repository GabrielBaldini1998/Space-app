import { styled } from "styled-components";

const ItemNavegacaoEstilizado = styled.li`
font-size: 24px;
line-height: 29px;
margin-bottom: 30px;
cursor: pointer;
color: ${props => props.$ativo ? '#7b78e5' : '#d9d9d9'};
font-family: ${props => props.$ativo ? 'GandhiSansRegular-Bold' : 'GandhiSansRegular'};
display: flex;
align-items: center;
gap: 22px;
white-space: nowrap;

@media (max-width: 1024px) {
  margin-bottom: 0;
  font-size: 18px;
  line-height: 22px;
  gap: 12px;
}

`

const ItemNavegacao = ({ children, iconeAtivo, iconeInativo, ativo = false, onClick }) => {
    return (
        <ItemNavegacaoEstilizado $ativo={ativo} onClick={onClick}>
            <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
            {children}
        </ItemNavegacaoEstilizado>
    )
}

export default ItemNavegacao;