import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const navigate = useNavigate();
  const { state } = useCart();

  const totalItems = state.cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <header className="sticky top-0 z-50 w-full glass-effect transition-all duration-300">
      <div className="mx-auto flex items-center h-20 justify-between px-6 xl:w-5/6">
        <h2 
          className="text-2xl font-black tracking-tighter cursor-pointer hover:opacity-80 transition-opacity xl:text-3xl"
          onClick={() => navigate("/")}
        >
          MEGA<span className="text-amber-500">STORE</span>
        </h2>

        <div className="relative group cursor-pointer" onClick={() => navigate("/cart")}>
          <div className="relative p-2 rounded-full transition-colors hover:bg-black/5">
            <i className="bx bx-shopping-bag text-3xl transition-transform group-hover:scale-110 xl:text-4xl"></i>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[20px] h-[20px] px-1 text-[11px] font-bold rounded-full bg-amber-500 text-black shadow-lg animate-fade-in">
                {totalItems}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
