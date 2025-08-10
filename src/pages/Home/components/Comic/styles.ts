import styled from "styled-components";
import paperImage from "../../../../assets/img/paper.jpg";
interface ComicCardProps {
  isRare?: boolean;
}

export const ComicContainer = styled.div`
  max-width: 80vw;
  margin: 2em auto 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 0.138fr));
  grid-gap: 15px;
  padding: 1em 0 3em 3em;
  border-radius: 0.5em;
  background-color: white;
  background-image: url(${paperImage});
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 551px) and (max-width: 900px) {
    max-width: 55vw;
  }
  @media (min-width: 900px) and (max-width: 975px) {
    max-width: 58vw;
  }
`;

export const ComicCard = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isRare",
})<ComicCardProps>`
  background: rgba(255, 255, 255, 0.67);
  padding: 2em;
  display: flex;
  flex-direction: column;
  height: 300px;
  border: ${({ isRare }) =>
    isRare ? "5px groove #FFD700 " : "2px solid black"};
  box-shadow: 4px 4px black;
  transition: 0.2s linear;
  position: relative;

  &:hover {
    cursor: pointer;
    filter: grayscale(0%);
    box-shadow: 6px 6px black;
    transform: translate(-2px, -2px);
  }
  @media (min-width: 1024px) {
    /* filter: grayscale(100%); */
  }
  @media (min-width: 551px) and (max-width: 900px) {
    max-width: 70%;
  }
  @media (max-width: 550px) {
    max-width: 60%;
  }
`;
