import { useState } from "react";
import { styled } from "styled-components";
import ItemNavegacao from "./ItemNavegacao";

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;

@media (max-width: 1024px) {
    width: 100%;
    display: flex;
    gap: 16px;
    overflow-x: auto;
    padding-bottom: 8px;
    }
`


const BarraLateral = () => {
    const [ativo, setAtivo] = useState(0);

    return (
        <aside>
            <nav>
                <ListaEstilizada>

                    <ItemNavegacao
                        iconeAtivo="/icones/home-ativo.png"
                        iconeInativo="/icones/home-inativo.png"
                        ativo={ativo === 0}
                        onClick={() => setAtivo(0)}>
                        Início
                    </ItemNavegacao>

                    <ItemNavegacao
                        iconeAtivo="/icones/mais-vistas-ativo.png"
                        iconeInativo="/icones/mais-vistas-inativo.png"
                        ativo={ativo === 1}
                        onClick={() => setAtivo(1)}>
                        Mais vistas
                    </ItemNavegacao>

                    <ItemNavegacao
                        iconeAtivo="/icones/mais-curtidas-ativo.png"
                        iconeInativo="/icones/mais-curtidas-inativo.png"
                        ativo={ativo === 2}
                        onClick={() => setAtivo(2)}
                    >
                        Mais curtidas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo="/icones/novas-ativo.png"
                        iconeInativo="/icones/novas-inativo.png"
                        ativo={ativo === 3}
                        onClick={() => setAtivo(3)}
                    >
                        Novas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo="/icones/surpreenda-me-ativo.png"
                        iconeInativo="/icones/surpreenda-me-inativo.png"
                        ativo={ativo === 4}
                        onClick={() => setAtivo(4)}
                    >
                        Surpreenda-me
                    </ItemNavegacao>

                </ListaEstilizada>
            </nav>
        </aside >
    )
}

export default BarraLateral;