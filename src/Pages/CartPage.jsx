import { useEffect, useState } from "react";
import { supabase } from "../supabase";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  async function fetchCart() {
    const { data } = await supabase
      .from("cart")
      .select("*");

    setCart(data);
  }
  async function increaseQuantity(id, qty) {
  await supabase
    .from("cart")
    .update({
      quantity: qty + 1
    })
    .eq("id", id);

  fetchCart();
}
async function deleteItem(id) {
  await supabase
    .from("cart")
    .delete()
    .eq("id", id);

  fetchCart();
}

  return (
    <div>
      <h1>Cart Items</h1>

      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <p>Qty: {item.quantity}</p>
          <button
    onClick={() =>
      increaseQuantity(item.id, item.quantity)
    }
  >
    +
  </button>
  <button
    onClick={() => deleteItem(item.id)}
  >
    Delete
  </button>
        </div>
      ))}
    </div>
  );
}