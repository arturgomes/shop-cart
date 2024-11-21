import { Product } from "../App";

const Cart = ({ total, cart, remFromCart, addToCart }: { total: number; remFromCart: (prod:Product) => void; addToCart: (prod:Product) => void;
  cart: Product[] }) => {

  return (
    <section aria-label="cart">
      <h2>Cart</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
              <div>
                <button onClick={() => remFromCart(item)}>-</button>
                <span>{item.count}</span>
                <button onClick={() => addToCart(item)}>+</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}
      <p>Total: ${total}</p>
    </section>
  );
};

export default Cart;
