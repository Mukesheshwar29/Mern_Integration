import { useEffect, useState } from "react";
import { API } from "../utils/api";

export default function FeaturedProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${API}/api/products`)
            .then((res) => res.json())
            .then((data) => setProducts(data.slice(0, 4))) // take first 4 products
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((p) => (
                    <div
                        key={p._id}
                        className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col"
                    >
                        <div className="p-4 flex-1">
                            <img
                                src={p.image}
                                alt={p.name}
                                className="w-full h-48 object-cover rounded-xl mb-4"
                            />
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">{p.name}</h3>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{p.description}</p>
                        </div>
                        <div className="px-4 pb-4">
                            <span className="block text-xl font-bold text-indigo-600 mb-3">₹{p.price}</span>
                            <a
                                href={`/product/${p._id}`}
                                className="text-center bg-indigo-100 text-indigo-700 hover:bg-indigo-200 px-3 py-2 rounded-lg font-medium transition"
                            >
                                View
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
