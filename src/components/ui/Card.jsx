import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

export default function Container({}) {
  return (
    <CardContainer>
      <StyledCards>
        <article>
          <Image src="/images/Evil.png" alt="" width={250} height={200} />
          <h3>Resenha crítica: "Evil Dead Rise"</h3>
          <p>
            <b>Sinpopse: </b> "Horror Movendo a ação para fora da floresta e
            para a cidade, `Evil Dead Rise´ conta a história distorcida de duas
            irmãs distantes, interpretadas por Sutherland e Sullivan, cujo
            reencontro é interrompido pela ascensão de demônios possuidores de
            carne que os empurram para um batalha primordial pela sobrevivência
            enquanto enfrentam a versão mais aterrorizante da família
            imaginável"
          </p>
          <Link href="">Saiba mais</Link>
        </article>
      </StyledCards>

      <StyledCards>
        <article>
          <Image src="/images/Cemiterio.png" alt="" width={250} height={200} />
          <h3>Resenha crítica: "Cemitério Maldito"</h3>
          <p>
            <b>Sinpopse: </b> "Cemitério Maldito é um livro de Stephen King que
            conta a história da família Creed, que se muda para uma nova casa no
            interior, localizada nos arredores de um antigo cemitério
            amaldiçoado usado para enterrar animais de estimação - mas que já
            foi usado para sepultamento de indígenas. Algumas coisas estranhas
            começam a acontecer, transformando a vida cotidiana dos moradores em
            um pesadelo"
          </p>
          <Link href="">Saiba mais</Link>
        </article>
      </StyledCards>

      <StyledCards>
        <article>
          <Image src="/images/When.png" alt="" width={250} height={200} />
          <h3>Resenha crítica: "When Evil Lurks"</h3>
          <p>
            <b>Sinpopse: </b> "O filme se passa em uma pequena cidade rural da
            Argentina, onde dois irmãos, Pedro (Ezequiel Rodríguez) e Jimi
            (Demián Salomón), encontram um homem infectado pelo diabo que está
            prestes a dar à luz a um demônio real. Eles decidem se livrar do
            corpo, mas acabam espalhando o mal sem querer."
          </p>
          <Link href="">Saiba mais</Link>
        </article>
      </StyledCards>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledCards = styled.article`
  width: calc(
    33.33% - 1rem
  ); /* Adjust the width based on the number of cards and margin */
  background-color: var(--cor-primaria-fundo);
  box-shadow: var(--sombra-box);
  border-radius: var(--borda-arredondada);
  padding: 1rem;
  margin-bottom: 1rem; /* Add margin between cards */
`;
