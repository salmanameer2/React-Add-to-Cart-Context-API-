import CartSummary from "../components/CartSummary";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

export default function Cart() {
  const navigate = useNavigate();
  const { state } = useCart();
  const { cartItems } = state;

  if (cartItems.length === 0) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center p-6 text-center animate-fade-in">
        <div className="mb-6 rounded-full bg-neutral-100 p-8">
          <i className="bx bx-shopping-bag text-6xl text-neutral-300"></i>
        </div>
        <h1 className="text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl">
          YOUR BAG IS EMPTY
        </h1>
        <p className="mt-4 max-w-xs text-neutral-500 font-medium">
          Looks like you haven't added anything to your bag yet. Let's find some essentials.
        </p>
        <button
          onClick={() => navigate("/")}
          className="btn-premium mt-10 rounded-full bg-black px-10 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-neutral-800"
        >
          Explore Collection
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto my-12 w-full px-6 xl:w-10/12">
      <div className="mb-12 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400">
            <span
              className="cursor-pointer transition-colors hover:text-amber-600"
              onClick={() => navigate("/")}
            >
              Shop
            </span>
            <span>/</span>
            <span className="text-neutral-900">Your Bag</span>
          </div>
          <h1 className="text-5xl font-black italic tracking-tighter xl:text-6xl">
            YOUR <span className="text-amber-500">BAG</span>
          </h1>
        </div>
        <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wide">
          {cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'} Ready to Ship
        </p>
      </div>

      <div className="flex flex-col gap-12 xl:flex-row xl:items-start">
        <div className="flex-1 space-y-6">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <aside className="w-full xl:w-[400px]">
          <div className="sticky top-32 lg:px-6 xl:px-0">
            <CartSummary />
          </div>
        </aside>
      </div>
    </div>
  );
}
