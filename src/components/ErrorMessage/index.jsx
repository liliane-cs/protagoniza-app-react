import {Container, Animacao, Mensagem} from "./style.jsx";

function ErrorMessage ({mensagem}) {
    return (
        <Container>
            <Animacao
                src="https://lottie.host/86dcff36-0e6c-4aae-8b23-98b8103e76ca/GCNcOgmmhe.lottie"
                loop
                autoplay
            />
            <Mensagem>{mensagem || "Algo deu errado. Tente novamente."}</Mensagem>
        </Container>
    )
}
export default ErrorMessage;