import { ProductCard } from "../components";
import { useTitle } from "../hooks/useTitle";
import type { Product } from "../types/product";

// Demo catalog data; in a real app this can come from an API.
const products: Product[] = [
  {
    id: 1,
    name: "Sony Wh-Ch510 Bluetooth Wireless",
    price: 149,
    image: "/assets/images/1001.png",
  },
  {
    id: 2,
    name: "boAt Rockerz 450",
    price: 49,
    image: "/assets/images/1002.png",
  },
  {
    id: 3,
    name: "JBL Tune 760NC",
    price: 179,
    image: "/assets/images/1003.png",
  },
  {
    id: 4,
    name: "Logitech H111 Wired",
    price: 39,
    image: "/assets/images/1004.png",
  },
  {
    id: 5,
    name: "APPLE Airpods Max Bluetooth Headset",
    price: 199,
    image: "/assets/images/1005.png",
  },
  {
    id: 6,
    name: "ZEBRONICS Zeb-Thunder Wired",
    price: 29,
    image: "/assets/images/1006.png",
  },
  {
    id: 7,
    name: "Skullcandy Hesh Evo Wireless",
    price: 129,
    image: "/assets/images/1007.png",
  },
  {
    id: 8,
    name: "Sennheiser Accentum Plus",
    price: 219,
    image: "/assets/images/1008.png",
  },
];

export function Home() {
  // Updates browser tab title when this page is active.
  useTitle("Home");

  return (
    <main>
      <section className="pageIntro">
        <p className="eyebrow">Learning Zone</p>
        <h2>Practice Redux Toolkit with a Real Cart Flow</h2>
        <p>
          This page is designed for learning. Explore each product card, add
          items to cart, and see how global state updates across pages in real
          time.
        </p>
      </section>

      <section className="products">
        {/* Render all products as reusable card components. */}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
