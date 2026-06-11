import { BotaoEstilizado } from "./style";

export default function Button({
  children,
  onClick,
  type = "button",
  variante = "primario",
}) {
  return (
    <BotaoEstilizado onClick={onClick} type={type} variante={variante}>
      {children}
    </BotaoEstilizado>
  );
}
