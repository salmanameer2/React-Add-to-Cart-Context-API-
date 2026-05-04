import { useCart } from "../context/CartContext";

export default function CartSummary() {
  const { state } = useCart();
  const { cartItems } = state;

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="rounded-3xl border border-neutral-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md animate-fade-in">
      <h1 className="mb-8 text-2xl font-black italic tracking-tighter text-neutral-900">
        ORDER <span className="text-amber-500">SUMMARY</span>
      </h1>

      <div className="space-y-4">
        <div className="flex justify-between">
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">Subtotal</p>
          <p className="text-sm font-black text-neutral-900">${subtotal}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">Items Count</p>
          <p className="text-sm font-black text-neutral-900">{totalItems}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">Seasonal Discount</p>
          <p className="text-sm font-black text-amber-600">-${discount.toFixed(2)}</p>
        </div>

        <div className="flex justify-between pb-6 border-b border-neutral-50">
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">Standard Shipping</p>
          <p className="text-sm font-black text-neutral-900">${deliveryFee}</p>
        </div>
      </div>

      <div className="mt-6 flex items-end justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Grand Total</p>
          <p className="text-3xl font-black italic tracking-tighter text-neutral-900">${total.toFixed(2)}</p>
        </div>
      </div>

      <button className="btn-premium mt-8 flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-black px-6 text-xs font-bold uppercase tracking-[0.3em] text-white shadow-xl transition-all hover:bg-neutral-800">
        Process Order
        <i className="bx bx-right-arrow-alt text-xl"></i>
      </button>

    </div>
  );
}
