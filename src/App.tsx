import { useMemo, useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

export interface Product { id: number; name: string; price: number; count: number; }

const App = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const total = useMemo(() => cart.reduce((sum, item) => sum + (item.price * item.count), 0), [cart]);

  const addToCart = (product: Partial<Product>) => {
    const productFound = cart.find((prod: Product) => prod.id === product.id);
    if (productFound) {
      const newCart = cart.map((prod: Product) =>
        prod.id === product.id
          ? { ...prod, count: prod.count + 1 }
          : prod
      );
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, count: 1 } as Product]);
    }
  };

  const remFromCart = (product: Partial<Product>) => {
    const productFound = cart.find((prod: Product) => prod.id === product.id);
    if (productFound && productFound?.count > 1) {
      const newCart = cart.map((prod:Product) => 
        prod.id === product.id 
          ? {...prod, count: prod.count - 1}
          : prod )
      setCart(newCart)
    } else {

      setCart([...cart.filter((prod: Product) => prod.id !== product.id)]);
    }
  };

  return (
    <div>
      <h1>Checkout Page</h1>
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} remFromCart={remFromCart} total={total} addToCart={addToCart} />
      <Checkout cart={cart} total={total}/>
    </div>
  );
};

export default App;