import { remove } from "../store/cartSlice";
import { useAppDispatch } from "../store/hooks";
import type { Product } from "../types/product";
import "./CartCard.css";

interface CartCardProps {
  product: Product;
}

export function CartCard({ product }: CartCardProps) {
  const dispatch = useAppDispatch();
  const { name, price, image } = product;

  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      {/* Removes this product from global cart state. */}
      <button onClick={() => dispatch(remove(product))}>Remove</button>
    </div>
  );
}
