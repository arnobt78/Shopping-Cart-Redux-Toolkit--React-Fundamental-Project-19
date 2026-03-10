import { CartCard } from "../components";
import { useTitle } from "../hooks/useTitle";
import { useAppSelector } from "../store/hooks";

export function Cart() {
  useTitle("Cart");

  const cartList = useAppSelector((state) => state.cartState.cartList);
  const total = useAppSelector((state) => state.cartState.total);

  return (
    <main>
      <section className="cart">
        <h1>
          Cart Items: {cartList.length} / ${total}
        </h1>
        {cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
