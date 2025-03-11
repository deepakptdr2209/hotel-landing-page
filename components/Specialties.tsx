"use client";

import { motion } from "framer-motion";
import { Award, Utensils, Users } from "lucide-react";

const specialties = [
  {
    icon: <Award className="w-12 h-12 text-orange-500" />,
    title: "Award Winning",
    description: "Recognized for our authentic Indian cuisine and service excellence",
  },
  {
    icon: <Utensils className="w-12 h-12 text-orange-500" />,
    title: "Master Chefs",
    description: "Our expert chefs bring decades of culinary expertise",
  },
  {
    icon: <Users className="w-12 h-12 text-orange-500" />,
    title: "Private Dining",
    description: "Perfect space for special occasions and celebrations",
  },
];

const Specialties = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Specialties</h2>
          <p className="text-gray-600">
            What makes Spice Haven special
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="mb-4 inline-block"
              >
                {specialty.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{specialty.title}</h3>
              <p className="text-gray-600">{specialty.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;