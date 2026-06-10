import { Link } from "react-router-dom";
import { FooterWrapper, Logo, SocialLink, SocialSection, Text } from "./style";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Logo>Protagoniza</Logo>
        </Link>
        <Text>Sua história, seu protagonismo, nosso apoio.</Text>
      </div>
      <SocialSection>
        <Text>Desenvolvido por:</Text>
        <Text>
          <SocialLink href="https://github.com/Annajleite" target="_blank">
            <FaGithub />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/anna-júlia-de-almeida-leite-700ba4356/"
            target="_blank"
          >
            <FaLinkedin />
          </SocialLink>
          Anna Júlia Leite
        </Text>

        <Text>
          <SocialLink href="https://github.com/liliane-cs" target="_blank">
            <FaGithub />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/liliane-costa-silva/"
            target="_blank"
          >
            <FaLinkedin />
          </SocialLink>
          Liliane Costa
        </Text>
        <Text>
          <SocialLink href="https://github.com/Luisa-abreu" target="_blank">
            <FaGithub />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/luisa-fontes/"
            target="_blank"
          >
            <FaLinkedin />
          </SocialLink>
          Luísa Fontes
        </Text>
      </SocialSection>
      <SocialSection>
        <Text>
          <SocialLink
            href="https://github.com/leticiaguimaraes"
            target="_blank"
          >
            <FaGithub />
          </SocialLink>
          {/*     <SocialLink
              href="https://www.linkedin.com/in/nívea-d-avila/"
              target="_blank"
            >
              <FaLinkedin />
            </SocialLink> */}
          Leticia Guimarães
        </Text>
        <Text>
          <SocialLink
            href="https://github.com/natasha-mendonca"
            target="_blank"
          >
            <FaGithub />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/natasha-von-markendorf-mendon%C3%A7a-cea-36a20052/"
            target="_blank"
          >
            <FaLinkedin />
          </SocialLink>
          Natasha Mendonça
        </Text>
        <Text>
          <SocialLink href="https://github.com/davila-hue" target="_blank">
            <FaGithub />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/nívea-d-avila/"
            target="_blank"
          >
            <FaLinkedin />
          </SocialLink>
          Nivea D Avila
        </Text>
        <Text>
          <SocialLink href="https://github.com/yasmimverissimo" target="_blank">
            <FaGithub />
          </SocialLink>
          {/* <SocialLink
            href="https://www.linkedin.com/in/nívea-d-avila/"
            target="_blank"
          >
            <FaLinkedin />
          </SocialLink> */}
          Yasmim Verissimo
        </Text>
      </SocialSection>
    </FooterWrapper>
  );
};
