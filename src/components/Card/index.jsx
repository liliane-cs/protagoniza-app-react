import {Container, Imagem, Conteudo, Titulo, Descricao, BotaoFavoritar} from "./style";

function Card({ titulo, descricao, imagem, favoritado, aoFavoritar , onClick  }) {
    return (
        <Container onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>

            {imagem && <Imagem src={imagem} alt={titulo} />}

            <Conteudo>
                <Titulo>{titulo}</Titulo>
                <Descricao>{descricao}</Descricao>
            </Conteudo>

            {aoFavoritar && (
                <BotaoFavoritar onClick={aoFavoritar} $ativo={favoritado}>
                    {favoritado ? "♥" : "♡"}
                </BotaoFavoritar>
            )}
        </Container>
    );
}

export default Card;