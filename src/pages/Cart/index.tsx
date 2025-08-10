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
  MessageCartEmpty,
  Image,
} from "./styles";
import { CartType } from "../../models/comics";
import { ShoppingCart } from "lucide-react";
import { InputCoupon } from "./components/InputCoupon";
import { useAppSelector } from "../../hooks";
import { MarvelComicRarity } from "../../models/comics";
import { useTotalCart } from "../../hooks/totalCart";

type CartProps = {
  comic: MarvelComicRarity;
};

export type CartTypeProps = {
  items: CartType[];
  total: number;
};
const Cart = () => {
  const cart = useAppSelector((state) => state.marvel.cart);
  const location = useLocation();
  const { comic }: CartProps = location.state || {};
  const navigate = useNavigate();
  console.log("hqs no carrinho:", comic);

  const total = useTotalCart(cart);

  return (
    <CartContainer>
      <Image
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
        {cart.length > 0 ? (
          cart.map((item) => (
            <CartItem data-testid="cart-item" key={item.id}>
              <img src={item.thumbnail.path} alt={item.title} />

              <div className="info">
                <div className="title">{item.title}</div>
                <div className="price">R$ {item.prices[0].price}</div>
              </div>
            </CartItem>
          ))
        ) : (
          <MessageCartEmpty>Carrinho vazio... </MessageCartEmpty>
        )}
      </ItemList>
      {cart.length > 0 && (
        <CheckoutContainer>
          <InputCoupon />
          <TotalText>Total: {total.toFixed(2)}</TotalText>
          <Button onClick={() => alert("Compra finalizada com sucesso!")}>
            Finalizar Compra
          </Button>
        </CheckoutContainer>
      )}
    </CartContainer>
  );
};

export default Cart;
