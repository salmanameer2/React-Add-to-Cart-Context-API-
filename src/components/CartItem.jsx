import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const { dispatch } = useCart();

  return (
    <div className="group relative flex flex-col gap-6 rounded-2xl border border-neutral-100 bg-white p-6 transition-all duration-300 hover:shadow-xl sm:flex-row sm:items-center animate-fade-in">
      <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-xl bg-neutral-50 p-4 transition-colors group-hover:bg-neutral-100 sm:w-32">
        <img
          className="h-full w-full object-contain mix-blend-multiply"
          src={item.img}
          alt={item.name}
        />
      </div>

      <div className="flex w-full flex-col gap-4">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-xl font-black italic tracking-tighter text-neutral-900 xl:text-2xl">
              {item.name}
            </h1>
            <div className="mt-1 flex gap-4 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
              <p>Color: <span className="text-neutral-900">{item.color}</span></p>
            </div>
          </div>
          <button 
            className="rounded-full p-2 text-neutral-300 transition-colors hover:bg-red-50 hover:text-red-500"
            onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}
          >
            <i className="bx bx-trash text-xl"></i>
          </button>
        </div>

        <div className="flex items-center justify-between border-t border-neutral-50 pt-4">
          <p className="text-2xl font-black text-neutral-900">${item.price}</p>
          
          <div className="flex items-center gap-1 rounded-full border border-neutral-100 bg-neutral-50 p-1">
            <button
              className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-white hover:shadow-sm"
              onClick={() => dispatch({ type: "DECREMENT", payload: item.id })}
            >
              <i className="bx bx-minus text-sm"></i>
            </button>
            <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
            <button
              className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-white hover:shadow-sm"
              onClick={() => dispatch({ type: "INCREMENT", payload: item.id })}
            >
              <i className="bx bx-plus text-sm"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
