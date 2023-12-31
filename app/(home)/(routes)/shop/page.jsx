import React from 'react';

function ShopPage() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Banner (Optional) */}
      <div className="bg-cover bg-center h-[50vh]">
        <div className="bg-black/[0.5] flex items-center justify-center h-full text-white">
          <h1 className="text-3xl font-bold">Shop Delicious Dishes</h1>
          {/* <p className="text-lg mb-4">Coming Soon</p> */}
          <a href="/shop/new-arrivals" className="px-4 py-2 rounded text-white bg-orange-500 hover:bg-orange-400">Coming Soon</a>
        </div>
      </div>

      {/* Featured Products */}
      <div className="my-8">
        <h2 className="text-2xl font-bold mb-4 text-orange-500">Featured Products</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="rounded overflow-hidden shadow-md bg-white p-4">
            {/* Product 1 */}
          </div>
          <div className="rounded overflow-hidden shadow-md bg-white p-4">
            {/* Product 2 */}
          </div>
          <div className="rounded overflow-hidden shadow-md bg-white p-4">
            {/* Product 3 */}
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-orange-500">Browse By Category</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-4 py-2 rounded border-gray-200 hover:bg-gray-100">
            {/* Pasta Button */}
          </button>
          <button className="px-4 py-2 rounded border-gray-200 hover:bg-gray-100">
            {/* Sauces Button */}
          </button>
          <button className="px-4 py-2 rounded border-gray-200 hover:bg-gray-100">
            {/* Bakeware Button */}
          </button>
        </div>
      </div>

      {/* Testimonials or Blog Showcase (Optional) */}
      <div className="my-8">
        <h2 className="text-2xl font-bold mb-4 text-orange-500">What Our Customers Say</h2>
        {/* Testimonials or Blog Posts */}
      </div>
    </div>
  );
}

export default ShopPage;
