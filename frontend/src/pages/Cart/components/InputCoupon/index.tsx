import { useRef, useState } from "react";
import { CouponContainer, CouponInput, Message } from "./styles";
import { Button } from "../../../../components/Button";
import { CouponKey, coupons } from "../../../../mock/coupons";
import { useAppSelector } from "../../../../hooks";
import { useDispatch } from "react-redux";
import { setCart } from "../../../../redux/store/marvelSlice";

export const InputCoupon = () => {
  const cart = useAppSelector((state) => state.marvel.cart);
  const dispatch = useDispatch();

  const [infoCoupon, setInfoCoupon] = useState({
    validCoupon: false,
    discount: 0,
    message: "",
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const handleCoupon = () => {
    const value = inputRef.current?.value?.toLowerCase() || "";
    const coupon = coupons[value as CouponKey];

    if (coupon) {
      const newComicCoupon = cart.map((item) => {
        const basePrice = item.originalPrice ?? item.prices[0].price;
        const newPrice = item.isRare
          ? basePrice * (1 - coupon.discount / 100)
          : basePrice;
        return {
          ...item,
          prices: [{ ...item.prices[0], price: newPrice }],
        };
      });
      dispatch(setCart(newComicCoupon));

      setInfoCoupon({
        validCoupon: true,
        discount: coupon.discount,
        message: coupon.message,
      });
    } else {
      setInfoCoupon({
        validCoupon: false,
        discount: 0,
        message: "Cupom inválido!",
      });
    }
  };

  const deleteMsgCoupon = () => {
    setInfoCoupon((prev) => {
      return {
        ...prev,
        message: "",
      };
    });
  };

  return (
    <>
      <CouponContainer>
        <CouponInput
          ref={inputRef}
          type="text"
          placeholder="Digite seu cupom"
          onFocus={deleteMsgCoupon}
        />
        <Button onClick={handleCoupon}>Aplicar</Button>
      </CouponContainer>
      {infoCoupon.message && (
        <Message valid={infoCoupon.validCoupon}>{infoCoupon.message}</Message>
      )}
    </>
  );
};
