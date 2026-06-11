import { Container, Label, Input } from "./style";

export default function CampoFormulario({
  labelDoCampo,
  tipoDoCampo = "text",
  placeholderDoCampo,
  valorDoCampo,
  aoMudar,
}) {
  return (
    <Container>
      <Label>{labelDoCampo}</Label>

      <Input
        type={tipoDoCampo}
        placeholder={placeholderDoCampo}
        value={valorDoCampo}
        onChange={aoMudar}
      />
    </Container>
  );
}
