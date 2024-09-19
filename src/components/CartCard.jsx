import "./CartCard.css"

export const CartCard = ({product}) => {
  const {price, image, name} = product;
  return (
    <main>
      <div className="cartCard">
        <img src={image} alt={name} />
        <p className="productName">{name}</p>
        <p className="productPrice">${price}</p>
        <button>remove</button>
      </div>
    </main>
  )
}
