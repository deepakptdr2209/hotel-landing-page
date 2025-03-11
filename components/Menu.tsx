"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const menuCategories = [
  "All",
  "Starters",
  "Main Course",
  "Breads",
  "Desserts",
];

const menuItems = [
  {
    name: "Shahi Paneer",
    category: "Main Course",
   
    description: "Rich and creamy cottage cheese curry in royal gravy",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    name: "Paneer Tikka",
    category: "Starters",
   
    description: "Marinated and grilled cottage cheese",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2050&q=80",
  },
  {
    name: "Dal Makhani",
    category: "Main Course",
    description: "Creamy black lentils simmered overnight with spices",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    name: "Palak Paneer", 
    category: "Main Course",
    description: "Cottage cheese cubes in creamy spinach gravy",
    image: "https://images.unsplash.com/photo-1618449840665-9ed506d73a34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  }
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = menuItems.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Menu</h2>
          <p className="text-gray-600">Discover our carefully curated dishes</p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12 overflow-x-auto">
          {menuCategories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full ${
                selectedCategory === category
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-700 hover:bg-orange-100"
              } transition-colors`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                 
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;