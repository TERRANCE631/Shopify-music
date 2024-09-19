import { ProductCard } from "../components/ProductCard";
import "../components/ProductCard.css";
import { useTitle } from "../Hooks/useTitle";

export const Home = ({title}) => {
  useTitle(`${title}`);

  const products = [
    {"id": 1, "name": "sony wh-Ch510 Bluetooth wireless", "price": 149, "image": "/assets/images/1001.png"},
    {"id": 2, "name": "boat Rockerz 450", "price": 49, "image": "/assets/images/1002.png"},
    {"id": 3, "name": "JBL Tune 760NC", "price": 179, "image": "/assets/images/1003.png"},
    {"id": 4, "name": "Logitech H111 wired", "price": 39, "image": "/assets/images/1004.png"},
    {"id": 5, "name": "Apple Airpods max bluetooth Headset", "price": 199, "image": "/assets/images/1005.png"},
    {"id": 6, "name": "ZEBRONICS Zeb-Thunder wired", "price": 29, "image": "/assets/images/1006.png"}
  ]

  return (
    <main>
     <section className="products">
      {products.map((product) => (
         <ProductCard key={products.id} product={product}/>
      )) }
     </section>
    </main>
  )
}
