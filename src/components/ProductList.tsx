
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Headphones", price: 200 },
];

const ProductList = ({ addToCart }: { addToCart: (product: { id: number; name: string; price: number }) => void }) => {
  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <span>{product.name} - ${product.price}</span>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
