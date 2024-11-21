import React, { useState } from "react";

export const simulatePayment = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Payment failed"); // Simulate failure
    }, 2000);
  });
};

const Checkout = ({total, cart }: { total:number; cart: { id: number; name: string; price: number }[] }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handlePayment = async () => {
    if (cart.length === 0) {
      setMessage("Cart is empty");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      // Simulating API call
      await simulatePayment();
      setMessage("Payment Successful!");
    } catch {
      setMessage("Payment Failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={handlePayment} disabled={loading}>
        {loading ? "Processing..." : `Pay ${total} Now`}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Checkout;
