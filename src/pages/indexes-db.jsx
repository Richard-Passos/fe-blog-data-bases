/* Components */
import Head from "next/head";
import { Content, Footer, Header } from "@/components";
import {
  Section,
  SectionContainer,
  SectionDemonstration,
} from "@/components/section";
import { Image, Title, TitleContainer } from "@/utils";

export default function IndexesDB() {
  /* Links */
  const headerLinks = [
    { name: "Índice em BD", href: "#section-indexDB", samePage: true },
    { name: "Exemplo aplicado", href: "#section-example", samePage: true },
    { name: "Conclusão", href: "#section-conclusion", samePage: true },
    { name: "Banco de dados", href: "/", samePage: false },
  ];
  const footerLinks = [
    {
      name: "Musical Instruments Reviews",
      href: "https://www.kaggle.com/datasets/eswarchandt/amazon-music-reviews",
    },
    {
      name: "Compass doc",
      href: "https://www.mongodb.com/docs/compass/current/",
    },
    {
      name: "bosontreinamentos.com.br",
      href: "http://www.bosontreinamentos.com.br/bancos-de-dados/o-que-sao-indices-em-bancos-de-dados-indexacao-em-tabelas/",
    },
    {
      name: "stackoverflow.com",
      href: "https://pt.stackoverflow.com/questions/35088/quais-as-vantagens-e-desvantagens-do-uso-de-índices-em-base-de-dados",
    },
  ];
  /*  */

  return (
    <>
      <Head>
        <title>Banco de dados - Índices</title>
      </Head>

      <Header links={headerLinks} />

      <TitleContainer data-aos="zoom-in">
        <Title size={4} as="h1">
          Índice em banco de dados
        </Title>
      </TitleContainer>

      <Content>
        <a name="section-indexDB"></a>
        <Section>
          <SectionContainer>
            <Title size={2}>O que é?</Title>

            <p>
              Grande parte das consultas a um banco de dados se referem a
              somente uma pequena parcela dos registros armazenados. Por
              exemplo, uma consulta como “retorne todos os livros do autor C.J.
              Date” se refere a apenas uma pequena parte do total de registros
              de livros em uma biblioteca. É altamente ineficiente para o{" "}
              <abbr title="Sistema de Gerenciamento de Banco de Dados">
                SGBD
              </abbr>{" "}
              ter de ler cada registro no banco de dados para verificar se o
              autor é o “C.J. Date”, de forma ideal, o sistema deveria conseguir
              localizar esses registros diretamente. Para isso criamos Índices.
            </p>

            <p>
              Os índices são uma das ferramentas de otimização mais conhecidas e
              utilizadas pelos desenvolvedores de bancos de dados, sendo
              normalmente a primeira, mas não única, estratégia aplicada.
            </p>
          </SectionContainer>

          <SectionContainer>
            <Title size={1.25} as="h3">
              Sua importância
            </Title>

            <p>
              Índices deixam as pesquisas em um banco de dados mais rápidas e
              eficientes. Índices basicamente quebram o banco de dados em
              diversas partes e separa cada parte pelo índice, assim como é
              feito no sumário de um livro. Existem algumas formas dessa
              separação, mas a principal é de forma crescente.
            </p>

            <div className="m-container invert-colors">
              <Title size={1} as="h4">
                Benefícios:
              </Title>

              <ul className="list">
                <li className="item">Melhora a performance de consulta;</li>
                <li className="item">
                  Pode trazer dados específicos de forma mais rápida;
                </li>
                <li className="item">
                  Permite o acesso de dados ordenados sem o custo de realizar a
                  ordenação;
                </li>
              </ul>
            </div>
          </SectionContainer>
        </Section>

        <a name="section-example"></a>
        <Section>
          <SectionContainer>
            <Title size={2}>Exemplo aplicado</Title>

            <p>
              Para demonstrar a importância dos índices na pratica, iremos
              utilizar um banco de dados NoSQL, podendo ser usado um banco de
              dados SQL. Vamos utilizar o MongoDB, junto ao Compass para
              facilitar a demonstração.
            </p>

            <p>
              MongoDB sendo o banco de dados NoSQL escolhido e Compass uma
              ferramenta interativa para consultar, otimizar e analisar os dados
              do MongoDB.
            </p>
          </SectionContainer>

          <SectionContainer>
            <Title size={1.25} as="h3">
              Sobre os documentos usados
            </Title>
            <p>
              Também vamos utilizar de uma collection disponibilizada em:{" "}
              <a
                className="text-link"
                target="_blank"
                href="https://www.kaggle.com/datasets/eswarchandt/amazon-music-reviews"
              >
                amazon-music-reviews
              </a>
              .
            </p>
            <p>
              Esses documentos, que vem junto a collection, tem as chaves: _id,
              reviewerID, asin, reviewerName, helpful, reviewerText, overall,
              Summary, unixReviewTime, reviewTime.
            </p>
          </SectionContainer>

          <SectionContainer>
            <Title size={1.25} as="h3">
              Demonstrações
            </Title>

            <p>
              Iremos começar com uma busca no banco de dados sem a utilização
              dos índices, assim veremos o tempo até a resposta sem o índice e
              depois com o índice.
            </p>

            <SectionDemonstration>
              <Title size={1} as="h4">
                Demonstração-01
              </Title>

              <div className="container">
                <p>
                  A primeira busca será pela chave “overall”, faremos uma busca
                  por todos os documentos com “overall” menor que 5.
                </p>

                <small>
                  Imagem-01 | Para uma melhor visualização clique na imagem
                  <Image
                    src="print-01.png"
                    alt="image-01"
                    width={797.5}
                    height={406}
                    classN="text-image"
                    quality={100}
                  ></Image>
                  Destacado em azul podemos ver a busca feita ({" "}
                  {`{ overall: {$lt: 5} }`} ), em vermelho o tempo até a respota
                  ( 7 milisegundos ), em amarelo a quantidade de resultados da
                  busca ( 3323 ) e em verde a quantidade de documentos
                  examinados ( 10261 ).
                </small>

                <p className="explaning">
                  Mesmo que 7 milisegundos seje pouquíssimo tempo, temos de
                  levar em conta que essa collection possuí apenas 10261
                  documentos, sendo que em um banco de dados NoSQL convencional
                  temos milhões de documentos, elevando e muito o tempo até a
                  resposta.
                </p>
              </div>

              <div className="container">
                <p>
                  Agora aplicamos um índice crescente ao “overall”. Faremos a
                  mesma busca anterior, mas agora com o índice, perceba que a
                  busca em sí não mudará nada.
                </p>

                <small>
                  imagem-02 | Para uma melhor visualização clique na imagem
                  <Image
                    src="print-02.png"
                    alt="image-02"
                    width={797.5}
                    height={406}
                    classN="text-image"
                    quality={100}
                  ></Image>
                  Destacado em azul podemos ver a mesma busca feita
                  anteriormente ( {`{ overall: {$lt: 5} }`} ), em vermelho o
                  tempo até a respota ( 5 milisegundos ), em amarelo a
                  quantidade de resultados da busca ( 3323 ) e em verde a
                  quantidade de documentos examinados ( 3323 ).
                </small>

                <p className="explaning">
                  Percebe-se que a principal diferença é que a busca passou
                  somente pelos documentos necessários e não por todos os
                  documentos da collection. Mesmo que a diferença mostrada teve
                  uma diferença de 2 milisegundos, deve-se levar em conta que há
                  somente 10 mil documentos listados, em um ambiente de milhões
                  de documentos, a busca sem índice passária por todos os
                  documentos e retornaria somente 3323, isso tronaria a busca
                  extremamente lenta e ineficiente
                </p>
              </div>
            </SectionDemonstration>

            <SectionDemonstration>
              <Title size={1} as="h4">
                Demonstração-02
              </Title>

              <div className="container">
                <p>
                  A segunda busca será pela chave “asin”, faremos uma busca por
                  todos os documentos com “asin” igual a "1384719342".
                </p>

                <small>
                  Imagem-03 | Para uma melhor visualização clique na imagem
                  <Image
                    src="print-03.png"
                    alt="image-03"
                    width={797.5}
                    height={406}
                    classN="text-image"
                    quality={100}
                  ></Image>
                  Destacado em azul podemos ver a busca feita ({" "}
                  {`{ asin: "1384719342" }`} ), em vermelho o tempo até a
                  respota ( 7 milisegundos ), em amarelo a quantidade de
                  resultados da busca ( 5 ) e em verde a quantidade de
                  documentos examinados ( 10261 ).
                </small>

                <p className="explaning">
                  Agora podemos perceber uma grande diferença entre a quantidade
                  de elementos que foram examinados e a quantidade de resultados
                  da busca.
                </p>
              </div>

              <div className="container">
                <p>
                  Agora aplicamos um índice crescente ao “asin”. Faremos a mesma
                  busca anterior, mas agora com o índice.
                </p>

                <small>
                  imagem-04 | Para uma melhor visualização clique na imagem
                  <Image
                    src="print-04.png"
                    alt="image-04"
                    width={797.5}
                    height={406}
                    classN="text-image"
                    quality={100}
                  ></Image>
                  Destacado em azul podemos ver a mesma busca feita
                  anteriormente ( {`{ asin: "1384719342" }`} ), em vermelho o
                  tempo até a respota ( 0 milisegundos ), em amarelo a
                  quantidade de resultados da busca ( 5 ) e em verde a
                  quantidade de documentos examinados ( 5 ).
                </small>

                <p className="explaning">
                  Percebe-se que a busca teve um tempo total de 0 milisegundos,
                  isso deve-se graças ao índice aplicado. Por conta do índice
                  havia somente 5 documentos para passarem pelo busca,
                  tornando-a muito rápida e eficiente.
                </p>
              </div>
            </SectionDemonstration>

            <SectionDemonstration>
              <Title size={1} as="h4">
                Demonstração-03
              </Title>

              <div className="container">
                <p>
                  A terceira e última busca será usando{" "}
                  <a
                    href="https://www.alura.com.br/conteudo/expressoes-regulares"
                    target="_blank"
                    className="text-link"
                  >
                    RegEx
                  </a>{" "}
                  , faremos uma busca por todos os documentos com “reviewTime”
                  terminado em "2005"
                </p>

                <small>
                  Imagem-05 | Para uma melhor visualização clique na imagem
                  <Image
                    src="print-05.png"
                    alt="image-05"
                    width={797.5}
                    height={406}
                    classN="text-image"
                    quality={100}
                  ></Image>
                  Destacado em azul podemos ver a busca feita ({" "}
                  {`{ reviewTime: /2005$/ }`} ), em vermelho o tempo até a
                  respota ( 8 milisegundos ), em amarelo a quantidade de
                  resultados da busca ( 4 ) e em verde a quantidade de
                  documentos examinados ( 10261 ).
                </small>

                <p className="explaning">
                  Como o RegEx percorre por toda a string, ele se torna mais
                  ineficiente que uma busca normal, podendo ser melhor observado
                  em uma busca com um banco de dados mais populado.
                </p>
              </div>

              <div className="container">
                <p>
                  Agora aplicamos um índice do tipo “text” e a busca terá de
                  mudar. Para que se possa usar RegEx em uma busca com índice,
                  deve-se usar “$text” e “$search” ao ínves das chaves de um
                  documento.
                </p>

                <small>
                  imagem-06 | Para uma melhor visualização clique na imagem
                  <Image
                    src="print-06.png"
                    alt="image-06"
                    width={797.5}
                    height={406}
                    classN="text-image"
                    quality={100}
                  ></Image>
                  Destacado em azul podemos ver a nova busca feita ({" "}
                  {`{ $text: {$search: "2005$"} }`} ), em vermelho o tempo até a
                  respota ( 0 milisegundos ), em amarelo a quantidade de
                  resultados da busca ( 4 ) e em verde a quantidade de
                  documentos examinados ( 4 ).
                </small>

                <p className="explaning">
                  Uma busca do tipo RegEx somente é recomendada caso for
                  retornar poucos resultados. Mesmo estando em um índice,
                  deve-se tomar cuidado ao utilizar busca RegEx, pois são mais
                  ineficientes que as buscas normais. Agora com índice do tipo
                  “text”, a busca teve de mudar, tendo que utilizar “$text” e
                  “$search”, mas este tipo de busca é muito incomum.
                </p>
              </div>
            </SectionDemonstration>
          </SectionContainer>
        </Section>

        <a name="section-conclusion"></a>
        <Section>
          <SectionContainer>
            <Title size={2}>Conclusão</Title>

            <p>
              Com a teoria e as demonstrações pôde-se perceber que os índices
              são de essencial importância nos banco de dados, melhorando sua
              eficiência em diversos aspectos. Criar índices é a principal forma
              de melhorar a eficiência em um banco de dados, mas não é a única,
              tendo diversas outras estratégias, como controlar melhor a
              estrutura e as conexões do banco de dados.
            </p>

            <p>
              Os índices acabam sendo a primeira estratégia aplicada, por conta
              de sua simplicidade de aplicação e sua eficiência elevada. Tendo
              somente de tomar cuidado para não aplicar índice em qualquer
              lugar, é recomendado que os aplique somente onde há muitas buscas,
              assim tornando-os mais eficientes.
            </p>
          </SectionContainer>
        </Section>
      </Content>

      <Footer links={footerLinks} />
    </>
  );
}
