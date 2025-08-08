import { useRef, useState } from "react";
import { CouponContainer, CouponInput, Message } from "./styles";
import { Button } from "../../../../components/Button";

const coupons = {
  marvelraro10: { discount: 0.1, message: "Cupom raro aplicado com sucesso!" },
  marvelcomum5: {
    discount: 0.05,
    message: "Cupom comum aplicado com sucesso!",
  },
} as const;
type CouponKey = keyof typeof coupons;

export const InputCoupon = () => {
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
  // const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  // const total = subtotal - subtotal * discount;
  return (
    <>
      <CouponContainer>
        <CouponInput
          ref={inputRef}
          type="text"
          placeholder="Digite seu cupom"
        />
        <Button onClick={handleCoupon}>Aplicar</Button>
      </CouponContainer>
      {infoCoupon.message && (
        <Message valid={infoCoupon.validCoupon ? true : false}>
          {infoCoupon.message}
        </Message>
      )}
    </>
  );
};
