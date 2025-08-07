import styled from "styled-components";
import paperImage from "../../assets/img/paper.jpg";

export const CharactersContainer = styled.div`
  max-width: 80vw;
  margin: 2em auto 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 0.138fr));
  grid-gap: 15px;
  padding: 1em 0 3em 3em;
  background-color: white;
  background-image: url(${paperImage});
  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Caption = styled.div`
  width: 100%;
  font-family: "Bangers", cursive;
  font-size: 1.6em;
  text-align: center;
  margin: auto auto 0 auto;
  background-color: white;
  background-image: url(${paperImage});
  border: 1px solid black;
  box-shadow: 2px 2px black;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
`;

export const CharacterCard = styled.div`
  background: rgba(255, 255, 255, 0.67);
  padding: 2em;
  display: flex;
  flex-direction: column;
  height: 300px;
  border: 2px solid black;
  box-shadow: 4px 4px black;
  filter: grayscale(100%);
  transition: 0.2s linear;
  position: relative;

  &:hover {
    cursor: pointer;
    filter: grayscale(0%);
    box-shadow: 6px 6px black;
    transform: translate(-2px, -2px);

    ${Caption} {
      opacity: 1;
    }
  }
`;
