import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "motion/react";

const Testimonials = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="my-24 px-4"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-3">
          Customer Testimonials
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">
          What Our Users Are Saying
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white/30 backdrop-blur-md border border-white/40
                       rounded-2xl p-8 shadow-lg cursor-pointer
                       hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              {/* Avatar */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-white mb-4"
              />

              {/* Name */}
              <h2 className="text-lg font-semibold">
                {testimonial.name}
              </h2>

              {/* Role */}
              <p className="text-sm text-gray-500 mb-4">
                {testimonial.role}
              </p>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array(testimonial.stars)
                  .fill("")
                  .map((_, i) => (
                    <img
                      key={i}
                      src={assets.rating_star}
                      alt="star"
                      className="w-4 h-4"
                    />
                  ))}
              </div>

              {/* Review */}
              <p className="text-sm text-gray-600 leading-relaxed">
                “{testimonial.text}”
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;
