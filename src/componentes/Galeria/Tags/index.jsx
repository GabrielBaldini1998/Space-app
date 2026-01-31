import { styled } from 'styled-components';
import tags from './tags.json'

const TagsContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 64px;
    margin-top: 56px;

    @media (max-width: 1024px) {
        gap: 24px;
        align-items: flex-start;
        flex-direction: column;
    }
`

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`;

const Tag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: ${props => props.$ativa ? 'rgba(201, 140, 241, 0.3)' : 'rgba(217, 217, 217, 0.3)'};
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid ${props => props.$ativa ? '#C98CF1' : 'transparent'};
    &:hover {
      border-color: #C98CF1;
    }

    @media (max-width: 768px) {
        font-size: 18px;
        padding: 10px;
    }
`

const Div = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
    flex-wrap: wrap;

    @media (max-width: 1024px) {
        justify-content: flex-start;
    }
`

const Tags = ({ tagSelecionada, aoSelecionarTag }) => {
    return <TagsContainer>
        <TagTitulo>Busque por tags:</TagTitulo>
        <Div>
            {tags.map(tag => (
                <Tag 
                    key={tag.id}
                    $ativa={tagSelecionada === tag.id}
                    onClick={() => aoSelecionarTag(tag.id)}
                >
                    {tag.titulo}
                </Tag>
            ))}
        </Div>
    </TagsContainer>
}

export default Tags