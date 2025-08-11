export const coupons = {
  marvelraro10: {
    discount: 0.1,
    message: "Cupom raro aplicado com sucesso!",
  },
  marvelcomum5: {
    discount: 0.05,
    message: "Cupom comum aplicado com sucesso!",
  },
} as const;
export type CouponKey = keyof typeof coupons;
