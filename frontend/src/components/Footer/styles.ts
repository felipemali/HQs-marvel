import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: black;
  padding: 2em;
  margin-top: 3em;
  border-top: 2px solid black;
  box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.4);
`;

export const FooterContent = styled.div`
  max-width: 80vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 700px) {
    text-align: center;
  }
`;

export const FooterText = styled.p`
  font-family: "Bangers", cursive;
  font-size: 1.4em;
  color: white;
  margin: 0.3em 0;
`;
