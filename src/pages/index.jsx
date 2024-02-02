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
    nextArrow: <></>,
    prevArrow: <></>,
  };

  return (
    <>
      <Head>
        <title>CineWorld - Home</title>
        <meta name="description" content="Conteúdos de filmes recentes" />
        <meta name="keywords" content="2023 e 2024" />
      </Head>
      <StyledProdutos>
        <h2>Filmes recentes</h2>

        <Container>
          <StyledSlider>
            <Slider {...sliderSettings}>
              <img src="/images/Evil-dead.jpg" alt="Movie 1" />
              <img src="/images/Infinity.jpg" alt="Movie 2" />
              <img src="/images/Pobres-criaturas.jpg" alt="Movie 3" />
            </Slider>
          </StyledSlider>
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
`;
const StyledSlider = styled.div`
  margin: 20px 0;

  .slick-dots {
    bottom: -30px;
  }

  .slick-prev,
  .slick-next {
    font-size: 20px;
    color: #fff;
    display: none;
  }

  img {
    width: 50%;
    border-radius: 8px;
  }
`;
