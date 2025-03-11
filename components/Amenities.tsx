"use client";

import { motion } from "framer-motion";
import { Car, Bed, Tv, Phone, Clock, Users } from "lucide-react";

const amenities = [
  {
    icon: <Car className="w-12 h-12 text-orange-500" />,
    title: "Free Parking",
    description: "Complimentary parking for all guests",
  },
  {
    icon: <Clock className="w-12 h-12 text-orange-500" />,
    title: "Daily Housekeeping",
    description: "Professional cleaning services daily",
  },
  {
    icon: <Users className="w-12 h-12 text-orange-500" />,
    title: "Couple Friendly",
    description: "Welcoming environment for couples",
  },
  {
    icon: <Tv className="w-12 h-12 text-orange-500" />,
    title: "Cable TV",
    description: "Premium entertainment channels",
  },
  {
    icon: <Phone className="w-12 h-12 text-orange-500" />,
    title: "Room Service",
    description: "24/7 in-room dining service",
  },
  {
    icon: <Bed className="w-12 h-12 text-orange-500" />,
    title: "Cozy Rooms",
    description: "Comfortable and well-maintained rooms",
  },
];

const Amenities = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Hotel Amenities</h2>
          <p className="text-gray-600">
            Comfort and convenience at your service
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="mb-4 flex justify-center"
              >
                {amenity.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-center mb-2">
                {amenity.title}
              </h3>
              <p className="text-gray-600 text-center">{amenity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities