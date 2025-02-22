import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      quote: "FlowForge has transformed how we manage our projects. The intuitive interface and powerful features have significantly improved our team's productivity."
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateNow",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      quote: "The analytics capabilities are outstanding. We can now make data-driven decisions faster than ever before."
    },
    {
      name: "Emily Rodriguez",
      role: "Project Manager, DesignCo",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      quote: "Customer support is exceptional, and the platform is constantly evolving with new features that make our work easier."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          What Our Customers Say
        </h1>
        <p className="text-xl text-gray-600">
          Don't just take our word for it
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} index={index} />
        ))}
      </div>
    </div>
  );
};

const TestimonialCard = ({ name, role, image, quote, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="bg-white p-6 rounded-lg shadow-lg"
  >
    <div className="flex items-center mb-4">
      <img
        src={image}
        alt={name}
        className="w-12 h-12 rounded-full mr-4"
      />
      <div>
        <h3 className="font-semibold text-gray-900">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
    <p className="text-gray-600 italic">"{quote}"</p>
  </motion.div>
);

export default Testimonials;