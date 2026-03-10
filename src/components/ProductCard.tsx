import { useEffect, useState } from "react";
import { add, remove } from "../store/cartSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import type { Product } from "../types/product";
import "./ProductCard.css";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch();
  const cartList = useAppSelector((state) => state.cartState.cartList);
  const [isInCart, setIsInCart] = useState(false);

  const { id, name, price, image } = product;

  useEffect(() => {
    const productInCart = cartList.find((item) => item.id === id);
    setIsInCart(Boolean(productInCart));
  }, [cartList, id]);

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart ? (
          <button className="remove" onClick={() => dispatch(remove(product))}>
            Remove
          </button>
        ) : (
          <button onClick={() => dispatch(add(product))}>Add To Cart</button>
        )}
      </div>
    </div>
  );
}
