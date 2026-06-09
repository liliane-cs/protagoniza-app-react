import styled from "styled-components";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 32px;
    text-align: center;
    `;

export const Animacao = styled(DotLottieReact)`
width: 200px;
height: 200px;
`;

export const Mensagem = styled.p`
    margin: 0;
    font-size: 16px;
    color: #A33b3B;
    `;