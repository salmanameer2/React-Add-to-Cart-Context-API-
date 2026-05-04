import ProductCard from "../components/ProductCard";
import { Products } from "../data/Product";

export default function Home() {
  return (
    <main className="mx-auto w-full px-4 py-12 xl:w-10/12">
      <div className="mb-12 text-center animate-fade-in">
        <h1 className="text-4xl font-black italic tracking-tighter sm:text-5xl xl:text-6xl">
          CURATED <span className="text-amber-500">COLLECTION</span>
        </h1>
        <p className="mt-4 text-neutral-500 font-medium tracking-wide">
          Premium essentials designed for modern life.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Products.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </div>
    </main>
  );
}
