"use client";

import { motion } from "framer-motion";
import { Wifi, Wind, Coffee } from "lucide-react";

const rooms = [
  {
    type: "AC Deluxe Room",
    price: "₹2,500",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    amenities: ["Air Conditioning", "Free Wi-Fi", "Room Service"],
  },
  {
    type: "Non-AC Standard Room",
    price: "₹1,500",
    image: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    amenities: ["Cable TV", "Daily Housekeeping", "Free Parking"],
  },
];

const Rooms = () => {
  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Rooms</h2>
          <p className="text-gray-600">
            Choose from our selection of comfortable accommodations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <img
                  src={room.image}
                  alt={room.type}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-semibold">{room.type}</h3>
                  <span className="text-orange-500 font-bold text-xl">
                    {room.price}
                    <span className="text-sm text-gray-600">/night</span>
                  </span>
                </div>
                <div className="flex gap-4 mb-6">
                  {room.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center gap-2">
                      {amenity.includes("Wi-Fi") && <Wifi className="w-4 h-4" />}
                      {amenity.includes("Air") && <Wind className="w-4 h-4" />}
                      {amenity.includes("Service") && (
                        <Coffee className="w-4 h-4" />
                      )}
                      <span className="text-sm text-gray-600">{amenity}</span>
                    </div>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition-colors"
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms