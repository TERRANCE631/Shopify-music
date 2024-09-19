import { CartCard } from "../components/CartCard";
import { useTitle } from "../Hooks/useTitle";


export const Card = ({title}) => {
  useTitle(`${title}`);

  const products = [
    {"id": 3, "name": "JBL Tune 760NC", "price": 179, "image": "/assets/images/1003.png"},
    {"id": 4, "name": "Logitech H111 wired", "price": 39, "image": "/assets/images/1004.png"}
  ];

  return (
    <main>
      <section className="cart">
        <h1>cart items: {products.length}</h1>
        { products.map((product) => (
          <CartCard key={product.id} product={product}/>
        ))}
      </section>
    </main>
  )
}
