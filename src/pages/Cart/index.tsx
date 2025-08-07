import { useLocation, useNavigate } from "react-router-dom";

import ArrowLeft from "../../assets/img/arrow_left.png";
import { Button } from "../../components/Button";
import {
  CartContainer,
  CartTitle,
  ItemList,
  CartItem,
  CheckoutContainer,
  TotalText,
} from "./styles";
import { CartType, MarvelCharacter } from "../../models/Characters";
import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";

type CartProps = {
  character: MarvelCharacter;
};

export type CartTypeProps = {
  items: CartType[];
  total: number;
};
const Cart = () => {
  const [cart, setCart] = useState<CartTypeProps>({
    items: [],
    total: 0,
  });
  const location = useLocation();
  const { character }: CartProps = location.state || {};
  const navigate = useNavigate();
  console.log("character no carrinho:", character);

  useEffect(() => {
    const updatedItems = [...cart.items, character];
    setCart({ items: updatedItems, total: 20 });
  }, [character]);
  return (
    <CartContainer>
      <img
        style={{ cursor: "pointer" }}
        src={ArrowLeft}
        alt="Voltar"
        width={35}
        height={35}
        onClick={() => navigate("/")}
      />

      <CartTitle>
        Seu Carrinho
        <ShoppingCart size={50} />
      </CartTitle>
      <ItemList>
        {cart.items.map((item) => (
          <CartItem key={item.id}>
            <img src={item.thumbnail.path} alt={item.name} />

            <div className="info">
              <div className="title">{item.name}</div>
              <div className="price">R$ 20</div>
            </div>
          </CartItem>
        ))}
      </ItemList>
      <CheckoutContainer>
        <TotalText>Total: R$ {cart.total.toFixed(2)}</TotalText>
        <Button onClick={() => alert("Compra finalizada com sucesso!")}>
          Finalizar Compra
        </Button>
      </CheckoutContainer>
    </CartContainer>
  );
};

export default Cart;
