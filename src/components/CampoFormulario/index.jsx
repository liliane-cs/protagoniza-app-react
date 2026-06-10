import Input from "../Input";
import { ContainerDoCampo, LabelDoCampo } from "./style";

export default function CampoFormulario({ labelDoCampo, tipoDoCampo, placeholderDoCampo, valorDoCampo, aoMudar }) {
  return (
    <ContainerDoCampo>
      <LabelDoCampo>{labelDoCampo}</LabelDoCampo>
      <Input
        type={tipoDoCampo}
        placeholder={placeholderDoCampo}
        value={valorDoCampo}
        onChange={aoMudar}
      />
    </ContainerDoCampo>
  );
}