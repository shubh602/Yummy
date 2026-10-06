// import React from "react";

import Header from "./Header";

const categories = [
  { name: "Fresh Fruits", emoji: "🍎", color: "bg-red-50" },
  { name: "Vegetables", emoji: "🥦", color: "bg-green-50" },
  { name: "Dairy & Eggs", emoji: "🥛", color: "bg-blue-50" },
  { name: "Bakery", emoji: "🥐", color: "bg-yellow-50" },
  { name: "Beverages", emoji: "🧃", color: "bg-orange-50" },
  { name: "Snacks", emoji: "🍿", color: "bg-purple-50" },
];

const products = [
  {
    name: "Fresh Red Apples",
    category: "Fresh Fruits",
    price: 149,
    oldPrice: 179,
    emoji: "🍎",
  },
  {
    name: "Organic Broccoli",
    category: "Vegetables",
    price: 89,
    oldPrice: 110,
    emoji: "🥦",
  },
  {
    name: "Farm Fresh Milk",
    category: "Dairy",
    price: 65,
    oldPrice: 72,
    emoji: "🥛",
  },
  {
    name: "Whole Wheat Bread",
    category: "Bakery",
    price: 45,
    oldPrice: 55,
    emoji: "🍞",
  },
];

function Grocery() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-600 text-xl">
              🛒
            </div>

            <span className="text-xl font-extrabold tracking-tight">
              Fresh<span className="text-green-600">Cart</span>
            </span>
          </a>

          {/* Desktop Search */}
          <div className="hidden max-w-md flex-1 px-8 md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for groceries..."
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-11 pr-4 text-sm outline-none transition focus:border-green-500 focus:bg-white"
              />

              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                🔍
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
           

            <a href="/" className="relative rounded-xl bg-green-50 p-2.5 text-lg transition hover:bg-green-100">
               🏠
            </a>

            {/* Mobile menu */}
            <button className="rounded-xl p-2 text-xl md:hidden">
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <main>

        <section className="overflow-hidden bg-green-50">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20 lg:px-8">

            {/* Hero Content */}
            <div>
              <span className="mb-5 inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                🚚 Free delivery on orders above ₹499
              </span>

              <h1 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Fresh groceries,
                <span className="text-green-600"> delivered fast.</span>
              </h1>

              <p className="mt-5 max-w-lg text-base leading-7 text-gray-600 sm:text-lg">
                Everything you need for your kitchen, handpicked fresh and
                delivered straight to your doorstep.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button className="rounded-xl bg-green-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700">
                  Shop Now →
                </button>

                <button className="rounded-xl border border-gray-200 bg-white px-6 py-3.5 font-semibold text-gray-700 transition hover:border-green-300 hover:text-green-600">
                  Explore Categories
                </button>
              </div>

              {/* Stats */}
              <div className="mt-10 flex gap-8">
                <div>
                  <p className="text-2xl font-bold">10k+</p>
                  <p className="text-sm text-gray-500">Happy Customers</p>
                </div>

                <div>
                  <p className="text-2xl font-bold">30 min</p>
                  <p className="text-sm text-gray-500">Fast Delivery</p>
                </div>

                <div>
                  <p className="text-2xl font-bold">4.8/5</p>
                  <p className="text-sm text-gray-500">Customer Rating</p>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative mx-auto w-full max-w-lg">
              <div className="relative flex aspect-square items-center justify-center rounded-[3rem] bg-green-200">

                <div className="text-[9rem] drop-shadow-xl sm:text-[12rem]">
                  🛒
                </div>

                {/* Floating cards */}
                <div className="absolute left-2 top-8 rounded-2xl bg-white p-4 shadow-xl sm:left-0">
                  <p className="text-xs text-gray-500">Fresh today</p>
                  <p className="font-bold text-green-600">100% Fresh</p>
                </div>

                <div className="absolute bottom-8 right-2 rounded-2xl bg-white p-4 shadow-xl sm:right-0">
                  <p className="text-xs text-gray-500">Delivery</p>
                  <p className="font-bold">⚡ 30 mins</p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ================= CATEGORIES ================= */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="font-semibold text-green-600">Shop by category</p>

              <h2 className="mt-1 text-3xl font-bold tracking-tight">
                What are you looking for?
              </h2>
            </div>

            <button className="hidden text-sm font-semibold text-green-600 sm:block">
              View all →
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`${category.color} rounded-2xl p-5 text-center transition duration-200 hover:-translate-y-1 hover:shadow-md`}
              >
                <div className="text-5xl">{category.emoji}</div>

                <p className="mt-4 text-sm font-semibold">
                  {category.name}
                </p>
              </button>
            ))}
          </div>
        </section>

        {/* ================= PRODUCTS ================= */}
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="mb-8 flex items-end justify-between">
              <div>
                <p className="font-semibold text-green-600">
                  Customer favorites
                </p>

                <h2 className="mt-1 text-3xl font-bold">
                  Popular products
                </h2>
              </div>

              <button className="hidden text-sm font-semibold text-green-600 sm:block">
                View all →
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {products.map((product) => (
                <div
                  key={product.name}
                  className="group rounded-2xl border border-gray-100 bg-white p-4 transition hover:-translate-y-1 hover:shadow-lg"
                >

                  {/* Product image */}
                  <div className="relative flex aspect-square items-center justify-center rounded-xl bg-gray-50">
                    <span className="text-7xl transition duration-300 group-hover:scale-110">
                      {product.emoji}
                    </span>

                    <span className="absolute left-2 top-2 rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
                      SALE
                    </span>

                    <button className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                      ♡
                    </button>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs text-gray-400">
                      {product.category}
                    </p>

                    <h3 className="mt-1 font-semibold">
                      {product.name}
                    </h3>

                    <div className="mt-3 flex items-center justify-between">
                      <div>
                        <span className="font-bold">
                          ₹{product.price}
                        </span>

                        <span className="ml-2 text-xs text-gray-400 line-through">
                          ₹{product.oldPrice}
                        </span>
                      </div>

                      <button className="rounded-lg bg-green-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-green-700">
                        +
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROMO ================= */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-green-600">
            <div className="grid items-center gap-8 px-6 py-10 sm:px-10 md:grid-cols-2 lg:px-16">

              <div className="text-white">
                <span className="rounded-full bg-white/20 px-3 py-1 text-sm">
                  Limited offer
                </span>

                <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                  Get ₹100 off your first order
                </h2>

                <p className="mt-3 max-w-md text-green-50">
                  Use our welcome offer and get your groceries delivered
                  straight to your door.
                </p>

                <button className="mt-6 rounded-xl bg-white px-6 py-3 font-semibold text-green-700 transition hover:bg-green-50">
                  Start Shopping
                </button>
              </div>

              <div className="flex justify-center text-9xl">
                🥬🍎🥑
              </div>

            </div>
          </div>
        </section>

        {/* ================= FEATURES ================= */}
        <section className="border-t border-gray-100 py-14">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-xl">
                🚚
              </div>

              <div>
                <h3 className="font-bold">Fast Delivery</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Get your groceries delivered in as little as 30 minutes.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-xl">
                🌱
              </div>

              <div>
                <h3 className="font-bold">Fresh Products</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Freshly sourced products delivered directly to you.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-xl">
                🔒
              </div>

              <div>
                <h3 className="font-bold">Secure Payments</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Your payments and personal information are always secure.
                </p>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-950 text-gray-400">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">

            <div>
              <div className="text-xl font-bold text-white">
                Fresh<span className="text-green-500">Cart</span>
              </div>

              <p className="mt-2 text-sm">
                Fresh groceries. Delivered fast.
              </p>
            </div>

            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white">
                About
              </a>

              <a href="#" className="hover:text-white">
                Contact
              </a>

              <a href="#" className="hover:text-white">
                Privacy
              </a>

              <a href="#" className="hover:text-white">
                Terms
              </a>
            </div>

          </div>

          <div className="mt-8 border-t border-gray-800 pt-6 text-sm">
            © 2026 FreshCart. All rights reserved.
          </div>

        </div>
      </footer>

    </div>
  );
}

export default Grocery;