import styled from "styled-components";
import paperImage from "../../assets/img/paper.jpg";

export const CartContainer = styled.main`
  max-width: 60vw;
  margin: 2em auto;
  padding: 2em;
  background-color: white;
  background-image: url(${paperImage});
  border-radius: 0.5em;

  @media (max-width: 900px) {
    max-width: 85vw;
    padding: 1em;
  }
`;
export const MessageCartEmpty = styled.h1`
  font-family: "Bangers", cursive;
  font-size: 2.5em;
  display: flex;
  align-items: center;
  display: contents;
  color: red;
`;
export const CartTitle = styled.h1`
  font-family: "Bangers", cursive;
  font-size: 2.5em;
  color: black;
  margin-bottom: 1em;
  display: flex;
  align-items: center;
`;
export const Image = styled.img`
  transition: 0.2s linear;

  &:hover {
    transform: translate(-2px, -2px);
  }
`;
export const ItemList = styled.div`
  max-height: 400px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  padding: 1em;
  border: 2px solid black;
  box-shadow: 4px 4px black;
  transition: 0.2s;
  border-radius: 0.3em;

  &:hover {
    box-shadow: 6px 6px black;
    transform: translate(-2px, -2px);
  }

  img {
    width: 100px;
    height: auto;
    border: 2px solid black;
    margin-right: 1em;
  }
  .container-info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-right: 0;

    @media (min-width: 500px) {
      padding-right: 2em;
    }
  }
  .info {
    flex: 1;
  }

  .title {
    font-family: "Bangers", cursive;
    font-size: 1.5em;
    color: red;
  }

  .price {
    font-family: Arial, sans-serif;
    font-size: 1em;
    font-weight: bold;
    color: black;
  }
`;

export const CheckoutContainer = styled.div`
  margin-top: 2em;
  text-align: right;
`;

export const TotalText = styled.p`
  font-family: "Bangers", cursive;
  font-size: 1.8em;
  margin-bottom: 1em;
  color: black;
`;
export const TrashButton = styled.button`
  border: none;
  background-color: transparent;
`;
