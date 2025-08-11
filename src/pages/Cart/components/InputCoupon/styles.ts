import styled from "styled-components";
interface MessageProps {
  valid: boolean;
}
export const CouponContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 2em;
  gap: 0.5em;
  flex-wrap: wrap;
`;

export const CouponInput = styled.input`
  font-family: "Bangers", cursive;
  font-size: 1.2em;
  padding: 0.5em 1em;
  margin-bottom: 1em;
  border: 2px solid black;
  box-shadow: 3px 3px black;
  background-color: white;
  width: 200px;

  &:focus {
    outline: none;
    box-shadow: 4px 4px black;
    transform: translate(-1px, -1px);
  }
`;

export const Message = styled.p.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})<MessageProps>`
  font-family: "Bangers", cursive;
  color: ${({ valid }) => (valid ? "green" : "red")};
  margin-top: 0.5em;
  font-size: 1.2em;
`;
