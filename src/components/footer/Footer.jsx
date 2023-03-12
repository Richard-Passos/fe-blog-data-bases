/* Style */
import { Container, Content, IconContainer } from "./Footer.style";
import { Title } from "@/utils";
import Link from "next/link";
import { Github, Linkedin } from "@styled-icons/boxicons-logos";

export default function Footer() {
  return (
    <Container>
      <Content>
        <Title size={1.4}>Sites usados para a pesquisa</Title>

        <div>
          <div data-aos="slide-right" data-aos-duration="1000">
            <Link
              className="link"
              target="_blank"
              href="https://www.ibm.com/br-pt/cloud/learn/cap-theorem#:~:text=O%20MongoDB%20e%20o%20Teorema%20CAP%20(CP)&text=É%20usado%20frequentemente%20para%20big,%2C%20porém%2C%20não%20oferece%20disponibilidade."
              data-aos="zoom-in"
              data-aos-duration="100"
              data-aos-easing="ease-in"
            >
              ibm.com
            </Link>

            <Link
              className="link"
              target="_blank"
              href="https://tiflux.com/blog/sgbd-o-que-e-e-o-que-voce-precisa-saber/"
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-easing="ease-in"
            >
              tiflux.com
            </Link>
          </div>

          <div data-aos="slide-right" data-aos-duration="2000">
            <Link
              className="link"
              target="_blank"
              href="https://blog.vibetecnologia.com/banco-de-dados/#:~:text=Trata-se%20de%20uma%20tecnologia,onde%20as%20informações%20ficam%20armazenadas."
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in"
            >
              vibetecnologia.com
            </Link>

            <Link
              className="link"
              target="_blank"
              href="https://medium.com/@ruan.victor/breve-introdução-ao-teorema-cap-eb8bb0a0d7a4"
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-easing="ease-in"
            >
              medium.com
            </Link>
          </div>

          <div data-aos="slide-right" data-aos-duration="3000">
            <Link
              className="link"
              target="_blank"
              href="https://www.treinaweb.com.br/blog/o-que-e-um-sgbd"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in"
            >
              treinaweb.com.br
            </Link>

            <Link
              className="link"
              target="_blank"
              href="https://dominandoredes.com.br/banco-de-dados/"
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-easing="ease-in"
            >
              dominandoredes.com.br
            </Link>
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
