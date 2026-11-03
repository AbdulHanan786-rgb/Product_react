import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  ChartNoAxesColumn,
  Folder,
  RotateCcw,
  Star,
  Tag,
  Settings,
  LogOut,
  Search,
} from "lucide-react";

function App() {
  return (
    <div className="flex ml-[98px] mt-16 gap-4">
      <div className="bg-white rounded-md w-48 h-[850px] p-3">
        <h1 className="font-bold text-blue-600 mt-10 ml-3 flex items-center gap-2">
          <Package size={19} />
          NeoCommerce
        </h1>

        <h1 className="text-gray-900 font-semibold mt-10 ml-2 flex items-center gap-2 text-sm">
          <LayoutDashboard size={18} />
          Dashboard
        </h1>

        <h1 className="text-gray-900 font-semibold mt-12 ml-2 flex items-center gap-2 text-sm">
          <Package size={18} />
          Products
        </h1>

        <h1 className="text-gray-900 font-semibold mt-12 ml-2 flex items-center gap-2 text-sm">
          <ShoppingCart size={18} />
          Purchases
        </h1>

        <h1 className="text-gray-900 font-semibold mt-12 ml-2 flex items-center gap-2 text-sm">
          <Users size={18} />
          Customers
        </h1>

        <h1 className="text-gray-900 font-semibold mt-12 ml-2 flex items-center gap-2 text-sm">
          <ChartNoAxesColumn size={18} />
          Analytics
        </h1>

        <h1 className="text-gray-400 mt-12 ml-2 flex items-center gap-2 text-sm">
          <Folder size={16} />
          By Category
        </h1>

        <h1 className="text-gray-900 font-semibold mt-12 ml-2 text-sm flex items-center gap-2">
          <ShoppingCart size={18} />
          Orders
        </h1>

        <h1 className="text-gray-900 font-semibold mt-12 ml-2 text-sm flex items-center gap-2">
          <RotateCcw size={18} />
          Returns
        </h1>

        <h1 className="text-gray-900 font-semibold mt-12 ml-2 text-sm flex items-center gap-2">
          <Star size={18} />
          Reviews
        </h1>

        <h1 className="text-gray-900 font-semibold mt-12 ml-2 text-sm flex items-center gap-2">
          <Tag size={18} />
          Promotions
        </h1>

        <h1 className="text-gray-900 font-semibold mt-8 ml-2 text-sm flex items-center gap-2">
          <Settings size={18} />
          Settings
        </h1>

        <h1 className="text-gray-900 font-semibold mt-4 ml-2 text-sm flex items-center gap-2">
          <LogOut size={18} />
          Logout
        </h1>
      </div>

      <div className="flex-1">
        <div className="bg-white w-[850px] rounded-md p-4 mb-4">
          <div className="flex ml-30 items-center border border-gray-200 bg-gray-100 rounded-lg w-[600px] px-3">
            <Search size={20} className="text-gray-400" />

            <input
              type="text"
              placeholder="Search products"
              className="w-full h-10 px-3 outline-none"
            />
          </div>
        </div>

        <div className="bg-white rounded-md w-[850px] h-[760px] p-5">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-800">Product</h1>

            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Search product..."
                className="w-96 border border-gray-300 bg-gray-200 rounded-md px-3 py-2 w-40 outline-none focus:border-blue-500"
              />

              <button className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700">
                + Add New Product
              </button>
            </div>
          </div>

          <div className="flex gap-4 py-4">
            <h1 className="inline-block bg-gray-200 text-gray-800 px-4 py-2 rounded-md font-semibold">
              All Products
            </h1>

            <h1 className=" text-gray-800 px-4 py-2 rounded-md font-semibold">
              Most Purchased
            </h1>

            <h1 className=" text-gray-800 px-4 py-2 rounded-md font-semibold">
              New Arivals
            </h1>

            <h1 className=" text-gray-800 px-4 py-2 rounded-md font-semibold">
              Best Deals
            </h1>

            <h1 className=" text-gray-800 px-4 py-2 rounded-md font-semibold">
              Furniture
            </h1>

            <h1 className=" text-gray-800 px-4 py-2 rounded-md font-semibold">
              Shoes
            </h1>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-gray-100 rounded-lg p-4">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
                alt="Smart Watch"
                className="w-full h-40 object-contain"
              />

              <h2 className="font-semibold text-gray-800 mt-3">Smart Watch</h2>

              <p className="text-gray-500 text-sm">$210.50</p>

              <div className="flex gap-6 mt-2">
                <p className="text-black">Stock: 400</p>
                <p className="text-black">Sold: 200</p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-4">
             <img
  src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500"
  alt="Smart Air Purifier"
  className="w-full h-40 object-contain"
/>

              <h2 className="font-semibold text-gray-800 mt-3">
                Smart Air Purifier
              </h2>

              <p className="text-gray-500 text-sm">$99.90</p>

              <div className="flex gap-6 mt-2">
                <p className="text-black">Stock: 320</p>
                <p className="text-black">Sold: 120</p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-4">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500"
                alt="Ergo Comfort Bad"
                className="w-full h-40 object-contain"
              />

              <h2 className="font-semibold text-gray-800 mt-3">
                Ergo Comfort Bad
              </h2>

              <p className="text-gray-500 text-sm">$159.30</p>

              <div className="flex gap-6 mt-2">
                <p className="text-black">Stock: 275</p>
                <p className="text-black">Sold: 89</p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-4">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
                alt="Nikke Runner Edge Shoes"
                className="w-full h-40 object-contain"
              />

              <h2 className="font-semibold text-gray-800 mt-3">
                Nikke Runner Edge
              </h2>

              <p className="text-gray-500 text-sm">$75.50</p>

              <div className="flex gap-6 mt-2">
                <p className="text-black">Stock: 450</p>
                <p className="text-black">Sold: 209</p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-4">
              <img
                src="https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500"
                alt="AirPod Neo"
                className="w-full h-40 object-contain"
              />

              <h2 className="font-semibold text-gray-800 mt-3">AirPod Neo</h2>

              <p className="text-gray-500 text-sm">$103.50</p>

              <div className="flex gap-6 mt-2">
                <p className="text-black">Stock: 360</p>
                <p className="text-black">Sold: 165</p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-4">
              <img
                src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500"
                alt="PocketMini Speaker"
                className="w-full h-40 object-contain"
              />

              <h2 className="font-semibold text-gray-800 mt-3">
                PocketMini Speaker
              </h2>

              <p className="text-gray-500 text-sm">$189.30</p>

              <div className="flex gap-6 mt-2">
                <p className="text-black">Stock: 762</p>
                <p className="text-black">Sold: 389</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
