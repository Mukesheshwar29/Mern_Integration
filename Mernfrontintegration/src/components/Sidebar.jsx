import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <>
            {/* Backdrop Overlay */}
            <div
                className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={toggleSidebar}
            />

            {/* Sidebar Content */}
            <aside
                className={`fixed top-0 left-0 h-full w-80 bg-white/80 backdrop-blur-2xl border-r border-white/20 shadow-2xl z-[60] transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full p-6">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                            Menu
                        </h2>
                        <button
                            onClick={toggleSidebar}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Search Bar */}
                    <div className="relative mb-8 group">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full bg-white/50 border border-gray-200 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 shadow-sm group-hover:shadow-md"
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-4 top-3.5 group-hover:text-indigo-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    <nav className="flex flex-col space-y-2">
                        {[
                            { to: "/", label: "Home", icon: "🏠" },
                            { to: "/", label: "All Products", icon: "📦" },
                            { to: "/cart", label: "Shopping Cart", icon: "🛒" },
                            { to: "/addproduct", label: "Add New Product", icon: "➕" },
                        ].map((link, idx) => (
                            <Link
                                key={idx}
                                to={link.to}
                                onClick={toggleSidebar}
                                className="flex items-center gap-4 px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/50 rounded-xl transition-all duration-200 font-medium"
                            >
                                <span className="text-xl">{link.icon}</span>
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-auto pt-8 border-t border-gray-100">
                        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-2xl">
                            <p className="text-sm text-indigo-700 font-semibold mb-1">Need help?</p>
                            <p className="text-xs text-indigo-500">Contact our support center 24/7</p>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}

