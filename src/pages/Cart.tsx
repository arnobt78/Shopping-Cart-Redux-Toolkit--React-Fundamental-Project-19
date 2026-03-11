import { CartCard } from "../components";
import { useTitle } from "../hooks/useTitle";
import { useAppSelector } from "../store/hooks";
import { Link } from "react-router-dom";

export function Cart() {
  // Updates browser tab title when this page is active.
  useTitle("Cart");

  // Read cart data from global Redux state.
  const cartList = useAppSelector((state) => state.cartState.cartList);
  const total = useAppSelector((state) => state.cartState.total);

  return (
    <main>
      <section className="cart">
        <div className="cartSummary">
          <p className="eyebrow">Cart Learning Panel</p>
          <h1>
            Cart Items: {cartList.length} / ${total}
          </h1>
          <p>
            This page reflects Redux state. Every add/remove action from product
            cards updates this summary instantly.
          </p>
        </div>

        {cartList.length === 0 ? (
          <div className="emptyCart">
            <h2>Your cart is empty</h2>
            <p>
              Add some items from the Home page to practice cart state updates
              and see how data flows between components.
            </p>
            <Link to="/" className="emptyCartButton">
              Browse Products
            </Link>
          </div>
        ) : (
          <>
            {/* Render each selected product using a reusable cart item card. */}
            {cartList.map((product) => (
              <CartCard key={product.id} product={product} />
            ))}
          </>
        )}
      </section>
    </main>
  );
}
