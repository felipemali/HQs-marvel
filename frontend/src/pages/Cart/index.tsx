import { useNavigate } from "react-router-dom";

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
  TrashButton,
} from "./styles";
import { CartType } from "../../models/comics";
import { ShoppingCart, Trash2 } from "lucide-react";
import { InputCoupon } from "./components/InputCoupon";
import { Alert } from "../../components/Alert";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useCart } from "../../hooks/useCart";

export type CartTypeProps = {
  items: CartType[];
  total: number;
};
const Cart = () => {
  const [alert, setAlert] = useState(false);
  const { cartItems, setCartItems, remove, totalPrice } = useCart();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBuy = () => {
    setCartItems([]);
    localStorage.setItem("cart", JSON.stringify([]));
    setAlert(true);
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
              <div className="container-info">
                <div className="info">
                  <div className="title">{item.title}</div>
                  <div className="price">R$ {item.prices[0].price}</div>
                </div>
                <div>
                  <TrashButton onClick={() => remove(item.id)}>
                    <Trash2 />
                  </TrashButton>
                </div>
              </div>
            </CartItem>
          ))
        ) : (
          <>
            {!alert && <MessageCartEmpty>Carrinho vazio... </MessageCartEmpty>}

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
