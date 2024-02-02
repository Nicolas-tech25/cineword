import Container from "@/components/ui/Container";
import Head from "next/head";
import Card from "@/components/ui/Card";
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
        <h1>Filmes recentes - Trailers</h1>

        <Container>
          <StyledSlider>
            <Slider {...sliderSettings}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/smTK_AeAPHs?si=GCw1XC8apDVUbnc6&amp;controls=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/YrTnV6gNzno?si=5AfqIdNt33XQB05W&amp;controls=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/FNZe6nyKbqk?si=gZF5xfAasnN0Bdz9&amp;controls=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Slider>
          </StyledSlider>
          <br />

          <h1>Resenhas Críticas:</h1>
          <Card />
        </Container>
      </StyledProdutos>
    </>
  );
}

const StyledProdutos = styled.section`
  h1::before {
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
    width: 100%;
    border-radius: 8px;
  }
  iframe {
    width: 100%; // Set the width to 100%
    height: 500px; // Adjust the height as needed
    border-radius: 8px; // Apply border-radius if desired
  }
`;
