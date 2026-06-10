
import { BotaoEstilizado } from "./style";

export default function Button({ children, onClick, estiloBotao }) {
  return (
    <BotaoEstilizado onClick={onClick} estiloBotao={estiloBotao}>
      {children}
    </BotaoEstilizado>
  );
}