import React from "react";
import { useState, useEffect } from "react";


const Navbar = () => {
   const [sweetList, setSweetList] = useState([]);
  const [formData, setFormData] = useState({
    sweet: "",
    category: "",
    price: "",
    quantity: "",
  });

  useEffect(() => {
    const savedSweets = localStorage.getItem("sweetList");
    if (savedSweets) {
      setSweetList(JSON.parse(savedSweets));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("sweetList", JSON.stringify(sweetList));
  }, [sweetList]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.sweet || !formData.category) return;

    setSweetList([...sweetList, { ...formData, id: Date.now() }]);
    setFormData({ sweet: "", category: "", price: "", quantity: "" });
  };

  const handleDelete = (id) => {
    setSweetList(sweetList.filter((sweet) => sweet.id !== id));
  };


  return (
    <div>
      <nav class="bg-[#5D4037]">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* <!-- Mobile menu button--> */}
        <button type="button" aria-controls="mobile-menu" aria-expanded="false" class="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-[#5D4037]">
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="block size-6">
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="hidden size-6">
            <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex shrink-0 items-center">
          <svg width="32" height="32" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            {/* <!-- Background --> */}
            <circle cx="32" cy="32" r="30" fill="#D7CCC8" />

            {/* <!-- Cocoa Bean --> */}
            <ellipse cx="32" cy="32" rx="10" ry="18" fill="#8D6E63" stroke="#5D4037" stroke-width="2"/>
            <path d="M32 14 C28 24, 28 40, 32 50 C36 40, 36 24, 32 14" stroke="#5D4037" stroke-width="1" fill="none"/>

            {/* <!-- Leaf --> */}
            <path d="M20 22 C14 16, 14 12, 24 18" fill="#A5D6A7" stroke="#388E3C" stroke-width="1"/>
            <line x1="20" y1="22" x2="24" y2="18" stroke="#2E7D32" stroke-width="0.8"/>

            {/* <!-- Optional short text --> */}
            {/* <!-- Remove or customize below if needed --> */}
            <text x="32" y="58" font-size="6" text-anchor="middle" fill="#5D4037" font-family="Georgia, serif">
              Natural Choco
            </text>
          </svg>
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
         
            <a href="#" aria-current="page" class="rounded-md bg-[#8D6E63] px-3 py-2 text-sm font-medium text-white outline-none">Dashboard</a>
            <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-[#8D6E63] outline-none">Team</a>
            <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-[#8D6E63] outline-none">Projects</a>
            <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-[#8D6E63] outline-none">Calendar</a>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button" class="relative outline-none rounded-full bg-[#5D4037] p-1 text-white">
          <span class="absolute -inset-1.5"></span>
          <span class="sr-only">View notifications</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6">
            <path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>

        {/* <!-- Profile dropdown --> */}
        <div class="relative ml-3">
          <div>
            <button id="user-menu-button" type="button" aria-expanded="false" aria-haspopup="true" class="relative flex rounded-full bg-[#5D4037] text-sm outline-none">
              <span class="absolute -inset-1.5"></span>
              <span class="sr-only">Open user menu</span>
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="size-8 rounded-full" />
            </button>
          </div>

         
          <div role="menu" tabindex="-1" aria-labelledby="user-menu-button" aria-orientation="vertical" class="absolute hidden right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg">
            <a id="user-menu-item-0" role="menuitem" href="#" tabindex="-1" class="block px-4 py-2 text-sm text-[#5D4037]">Your Profile</a>
            <a id="user-menu-item-1" role="menuitem" href="#" tabindex="-1" class="block px-4 py-2 text-sm text-[#5D4037]">Settings</a>
            <a id="user-menu-item-2" role="menuitem" href="#" tabindex="-1" class="block px-4 py-2 text-sm text-[#5D4037]">Sign out</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Mobile menu, show/hide based on menu state. --> */}
  <div id="mobile-menu" class="sm:hidden">
    <div class="space-y-1 px-2 pt-2 pb-3">
      <a href="#" aria-current="page" class="block rounded-md bg-[#8D6E63] px-3 py-2 text-base font-medium text-white">Dashboard</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-[#8D6E63]">Team</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-[#8D6E63]">Projects</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-[#8D6E63]">Calendar</a>
    </div>
  </div>
</nav>




      <div className="container mx-auto py-5">
        

<form class="max-w-sm mx-auto" onSubmit={handleSubmit}>
  {/* id name category price quantity */}
  <div class="mb-5">
    <label for="sweet" class="block mb-2 text-sm font-medium text-[#5D4037]">Sweet Name</label>
    <input type="text" id="sweet" value={formData.sweet} onChange={handleChange} class="outline-none bg-[#5D4037] text-sm rounded-lg block w-full p-2.5 placeholder:text-white text-white" placeholder="Your Favourite Sweet" required />
  </div>
 
 <div className="mb-5">
   <label for="category" class="block mb-2 text-sm font-medium text-[#5D4037]">Select Category</label>
  <select id="category" value={formData.category} onChange={handleChange} class="bg-[#5D4037] text-white text-sm rounded-lg block w-full p-2.5 outline-none placeholder:text-white">

    <option>Select Category</option>
    <option>Nut-Based</option>
    <option>Vegetable-Based</option>
    <option>Milk-Based</option>
    <option>Others</option>
  </select>
 </div>

   <div class="mb-5">
    <label for="price" class="block mb-2 text-sm font-medium text-[#5D4037]">Enter Price</label>
    <input type="number" id="price" value={formData.price} onChange={handleChange} class="outline-none text-white text-sm rounded-lg bg-[#5D4037] block w-full p-2.5 placeholder:text-white" placeholder="Enter Price" required />
  </div>
   <div class="mb-5">
    <label for="quantity" class="block mb-2 text-sm font-medium text-[#5D4037]">Enter Quantity</label>
    <input type="number" id="quantity" value={formData.quantity} onChange={handleChange} class="outline-none text-white text-sm rounded-lg bg-[#5D4037] block w-full p-2.5 placeholder:text-white" placeholder="Enter Quantity" required />
  </div>
  <div className="mb-5 text-center">
  <button type="submit" class="text-white bg-[#5D4037] outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Add Sweet</button>
  </div>
</form>
<div className="max-w-4xl mx-auto mt-10">
          {sweetList.length === 0 ? (
            <p className="text-center font-bold text-[#5D4037]">No sweets added yet.</p>
          ) : (
            <ul className="space-y-4">
              {sweetList.map((item) => (
                <li
                  key={item.id}
                  className="bg-[#5D4037] text-white rounded-lg p-4 flex justify-between items-center"
                >
                  <div className="flex gap-20">
                    <p className="font-bold">{item.sweet}</p>
                    <p className="text-sm">Category: {item.category}</p>
                    <p className="text-sm">Price: ₹{item.price}</p>
                    <p className="text-sm">Qty: {item.quantity}</p>
                  </div>
                  <div className="flex gap-5">
                    <button className="text-red-300 hover:text-red-500 text-sm">
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-300 hover:text-red-500 text-sm"
                      >
                      Delete
                    </button>
                      </div>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
};

export default Navbar;