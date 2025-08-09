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
import { CartType, MarvelHq } from "../../models/Hqs";
import { ShoppingCart } from "lucide-react";
import { InputCoupon } from "./components/InputCoupon";
import { useAppSelector } from "../../hooks";

type CartProps = {
  hq: MarvelHq;
};

export type CartTypeProps = {
  items: CartType[];
  total: number;
};
const Cart = () => {
  const cart = useAppSelector((state) => state.marvel.cart);
  const location = useLocation();
  const { hq }: CartProps = location.state || {};
  const navigate = useNavigate();
  console.log("hqs no carrinho:", hq);

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
        {cart.map((item) => (
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
        <InputCoupon />
        <TotalText>Total: R$ 20</TotalText>
        <Button onClick={() => alert("Compra finalizada com sucesso!")}>
          Finalizar Compra
        </Button>
      </CheckoutContainer>
    </CartContainer>
  );
};

export default Cart;
