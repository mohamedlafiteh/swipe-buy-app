export const priceSort = (a, b, priceSort) =>
  priceSort === "lowestPrice"
    ? Number(a.price) > Number(b.price)
      ? 1
      : -1
    : Number(a.price) < Number(b.price)
    ? 1
    : -1;
