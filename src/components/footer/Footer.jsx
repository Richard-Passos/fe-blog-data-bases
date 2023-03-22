/* Components */
import { Container, Content, IconContainer } from "./Footer.style";
import { Title } from "@/utils";
import Link from "next/link";
import { Github, Linkedin } from "@styled-icons/boxicons-logos";

export default function Footer({ links }) {
  return (
    <Container>
      <Content>
        <Title size={1.4}>Sites usados para a pesquisa</Title>

        <div>
          <div data-aos="fade-up" data-aos-duration="2000">
            {links.map((link, i) => (
              <Link
                className="link"
                target="_blank"
                href={link.href}
                data-aos="zoom-in"
                data-aos-duration={i % 2 === 0 ? "1000" : "2000"}
                data-aos-easing="ease-in"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </Content>

      <Content>
        <Title size={1.4}>Entrar em contato</Title>

        <div>
          <IconContainer href="https://github.com/Richard-Passos">
            <Github className="icon" />
            <p>Github</p>
          </IconContainer>

          <IconContainer href="https://www.linkedin.com/in/richard-passos-91703624b/">
            <Linkedin className="icon" />
            <p>LinkedIn</p>
          </IconContainer>
        </div>
      </Content>
    </Container>
  );
}
