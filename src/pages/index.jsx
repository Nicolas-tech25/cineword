import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Tempo de exibição de cada slide em milissegundos
  };

  return (
    <>
      <Head>
        <title>CineWord - Home</title>
        <meta
          name="description"
          content="Conteúdos de filmes recentes"
        />
        <meta name="keywords" content="2023 e 2024" />
      </Head>
      <StyledProdutos>
        <h2>Filmes recentes</h2>

        <Container>
          <article>
            <Slider {...sliderSettings}>
              
              <div>
                <img src="images/Infinity.jpg" alt="Slide 2" />
              </div>
              <div>
                <img src="images/Evil-dead.jpg" alt="Slide 1" />
              </div>
              {/* Adicione mais imagens conforme necessário */}
            </Slider>
          </article>
        </Container>
      </StyledProdutos>
    </>
  );
}

const StyledProdutos = styled.section`
  h2::before {
    content: "🎥 ";
  }
  article {
    padding: 1rem;
  }
  /* Estilos adicionais conforme necessário */
  .slick-slider {
    width: 80%; /* Ajuste a largura conforme necessário */
    margin: 0 auto;
  }
`;
