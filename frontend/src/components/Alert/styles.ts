import styled, { css } from "styled-components";

type AlertType = "success" | "error" | "warning";

export const AlertWrapper = styled.p<{ type: AlertType }>`
  max-width: 30vw;

  font-family: "Bangers", cursive;
  padding: 10px 20px;
  border-radius: 6px;
  color: red;
  font-size: 1.2em;
  color: white;
  margin: 1em auto 0 auto;
  background-color: white;
  transition: opacity 0.2s ease-in-out;

  ${({ type }) =>
    type === "success" &&
    css`
      background-color: #4caf50;
      border: 1px solid #388e3c;
    `}

  ${({ type }) =>
    type === "error" &&
    css`
      background-color: #f44336;
      border: 1px solid #d32f2f;
    `}

  ${({ type }) =>
    type === "warning" &&
    css`
      background-color: #ff9800;
      border: 1px solid #f57c00;
    `}
`;
