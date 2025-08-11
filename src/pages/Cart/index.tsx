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
import { Alert } from "../../components/Alert";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/store/marvelSlice";

export type CartTypeProps = {
  items: CartType[];
  total: number;
};
const Cart = () => {
  const [alert, setAlert] = useState(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const cart = useAppSelector((state) => state.marvel.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const total = cart.reduce((acc, comic) => {
      const sumPrices = comic.prices.reduce(
        (sum, priceObj) => sum + priceObj.price,
        0
      );
      return acc + sumPrices;
    }, 0);
    setTotalPrice(total);
  }, [cart]);

  const handleBuy = () => {
    setAlert(true);

    dispatch(clearCart());
  };
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
          <>
            <MessageCartEmpty>Carrinho vazio... </MessageCartEmpty>
            {alert && (
              <Alert type="success">Compra efetuada com sucesso!!</Alert>
            )}
          </>
        )}
      </ItemList>
      {cart.length > 0 && (
        <CheckoutContainer>
          <InputCoupon />
          <TotalText>Total: {totalPrice.toFixed(2)}</TotalText>
          <Button onClick={handleBuy}>Finalizar Compra</Button>
        </CheckoutContainer>
      )}
    </CartContainer>
  );
};
//
export default Cart;
