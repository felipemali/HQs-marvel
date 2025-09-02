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
import { MarvelComic } from "../../localStorage/type";

export type CartTypeProps = {
  items: CartType[];
  total: number;
};
const Cart = () => {
  const [alert, setAlert] = useState(false);
  const [cartItems, setCartItems] = useState<MarvelComic[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      setCartItems(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    const total = cartItems.reduce((acc, comic) => {
      const sumPrices = comic.prices.reduce(
        (sum, priceObj) => sum + priceObj.price,
        0
      );
      return acc + sumPrices;
    }, 0);
    setTotalPrice(total);
  }, [cartItems]);

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
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
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
      {cartItems.length > 0 && (
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
