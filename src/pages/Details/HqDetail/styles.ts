import styled from "styled-components";
import paperImage from "../../../assets/img/paper.jpg";

export const HqDetailContainer = styled.div`
  max-width: 50vw;
  margin: 2em auto 0 auto;
  padding: 1em 0 3em 1em;
  background-color: white;
  background-image: url(${paperImage});
  border-radius: 0.5em;

  @media only screen and (max-width: 900px) {
    max-width: 80vw;
    padding-bottom: 1em;
  }
`;

// export const CharacterCardContainer = styled.div`
//   border: 6px solid gold;
// `;
export const HqCardContainer = styled.div`
  display: flex;
  @media only screen and (max-width: 900px) {
    display: block;
  }
`;
export const HqCard = styled.div`
  background: rgba(255, 255, 255, 0.67);
  padding: 2em;
  min-width: 6vw;
  margin: 1em 0 0 0;
  display: flex;
  flex-direction: column;
  height: 300px;
  border: 2px solid black;
  box-shadow: 4px 4px black;
  transition: 0.2s linear;
  position: relative;

  &:hover {
    cursor: pointer;
    box-shadow: 6px 6px black;
    transform: translate(-2px, -2px);
  }
  @media (max-width: 900px) {
    max-width: 80%;
  }
  @media (max-width: 550px) {
    max-width: 70%;
  }
`;
export const DetailsContainer = styled.div`
  display: block;
  padding-left: 1em;
`;
export const HqDescription = styled.p`
  font-family: "Bangers", cursive;
  font-size: 1.6em;
  color: black;
`;
