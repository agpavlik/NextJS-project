"use client";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "product 1",
  },
  {
    id: 2,
    name: "Product 2",
    description: "product 2",
  },
  {
    id: 3,
    name: "Product 3",
    description: "product 3",
  },
];

export default function ProductList() {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}
