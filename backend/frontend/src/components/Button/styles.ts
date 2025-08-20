import styled from "styled-components";

export const ButtonStyle = styled.button`
  font-size: 1.2em;
  padding: 0.5em 1em;
  margin-bottom: 1em;
  cursor: pointer;
  font-family: "Bangers", cursive;
  background: rgb(255, 240, 33);
  transition: linear 0.2s;
  border: 1px solid black;
  box-shadow: 2px 2px black;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 4px 4px black;
  }
`;
