import Head from "next/head";
import styled from "styled-components";
import ListaPosts from "@/components/ListaPost.jsx";
import { useState } from "react";
import serverApi from "./api/server";
import ListaCategorias from "@/components/ListaCategorias";
import Container from "@/components/ui/Container";


export async function getStaticProps() {
  console.log("Código de servidor (não aprece no Cliente)...");
  try {
    const resposta = await fetch(`${serverApi}/posts.json`);
    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    const arrayDePosts = Object.keys(dados).map((post) => {
      return {
        ...dados[post],
        id: post,
      };
    });
    console.log(arrayDePosts);

    const categorias = arrayDePosts.map((post) => post.categoria);

    const categoriasUnicas = [...new Set(categorias)];
    console.log(categoriasUnicas);

    return {
      props: {
        posts: arrayDePosts,
        categorias: categoriasUnicas,
      },
    };
  } catch (error) {
    console.error("Deu ruim: " + error.message);
    return {
      notFound: true,
    };
  }
}

export default function Watch({ posts, categorias }) {
  const [listaDePosts, setListaDePosts] = useState(posts);
  const [categoria, setCategoria] = useState(null);
  const [filtroAtivo, setFiltroAtivo] = useState(false);
  const [categoriaAtiva, setCategoriaAtiva] = useState("");

  const aplicarFiltro = (event) => {
    const categoriaEscolhida = event.currentTarget.textContent;

    const postsFiltrados = categoriaEscolhida
      ? posts.filter((post) => post.categoria === categoriaEscolhida)
      : posts;

    setCategoria(categoriaEscolhida);
    setListaDePosts(postsFiltrados);
    setFiltroAtivo(true);

 
    setCategoriaAtiva(categoriaEscolhida);
  };
  const limparFiltro = () => {
    setFiltroAtivo(false);
    setListaDePosts(posts);
    setCategoriaAtiva("");
  };

  return (
    <>
      <Head>
        <title>CineWorld - Watch</title>
        <meta
          name="description"
          content="Site que fala de filmes e suas curiosidades"
        />
        <meta name="keywords" content="Movies,icebergs,curiosidades" />
      </Head>
      <StyledHome>
        <h2>Conheça o mundo do horror por camadas:</h2>

      <Container>
        <h3>Terror pra cagões:</h3>
        <ListaCategorias
          categorias={categorias}
          aplicarFiltro={aplicarFiltro}
          limparFiltro={limparFiltro}
          filtroAtivo={filtroAtivo}
          categoriaAtiva={categoriaAtiva}
        />
        <ListaPosts posts={listaDePosts} />
        <h3>Terror pra ficar desconfortável:</h3>
        <h3>Chuva de sangue:</h3>
        <h3>Mocumentary:</h3>
      </Container>
      </StyledHome>
    </>
  );
}

const StyledHome = styled.section`
  h2::before {
    content: "🎬 ";
  }
`
