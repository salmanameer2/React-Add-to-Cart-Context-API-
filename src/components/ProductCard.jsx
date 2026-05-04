import { useCart } from "../context/CartContext";

export default function ProductCard({ item }) {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: item,
    });
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in">
      <div className="relative flex h-72 items-center justify-center overflow-hidden bg-neutral-50 px-8 py-10 transition-colors group-hover:bg-neutral-100">
        <img 
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" 
          src={item.img} 
          alt={item.name} 
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-start justify-between">
          <h2 className="text-xl font-bold tracking-tight text-neutral-900 group-hover:text-amber-600 transition-colors">
            {item.name}
          </h2>
        </div>

        <div className="mt-auto space-y-4">
          <div className="flex items-center justify-between border-t border-neutral-100 pt-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Price</p>
              <p className="text-2xl font-black text-neutral-900">${item.price}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Color</p>
              <p className="text-sm font-semibold text-neutral-700">{item.color}</p>
            </div>
          </div>

          <button
            className="btn-premium w-full rounded-xl bg-black py-4 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg transition-all hover:bg-neutral-800"
            onClick={handleAddToCart}
          >
            Add To Bag
          </button>
        </div>
      </div>
    </div>
  );
}
