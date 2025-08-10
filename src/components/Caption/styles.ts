import styled from "styled-components";
import paperImage from "../../assets/img/paper.jpg";

export const CaptionStyle = styled.p`
  width: 100%;
  font-family: "Bangers", cursive;
  font-size: 1.6em;
  text-align: center;
  margin: auto auto 0 auto;
  background-color: white;
  background-image: url(${paperImage});
  border: 1px solid black;
  box-shadow: 2px 2px black;
  color: red;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
`;
