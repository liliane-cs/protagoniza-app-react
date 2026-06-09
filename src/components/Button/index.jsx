import { BotaoEstilizado } from "./style";

export default function Button({ children, onClick }) {
  return (
    <BotaoEstilizado onClick={onClick}>
      {children}
    </BotaoEstilizado>
  );
}