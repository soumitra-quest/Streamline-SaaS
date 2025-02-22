import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: 29,
      features: [
        "Up to 5 team members",
        "Basic project management",
        "5GB storage",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: 79,
      popular: true,
      features: [
        "Up to 20 team members",
        "Advanced project management",
        "25GB storage",
        "Priority support",
        "Advanced analytics",
        "Custom workflows"
      ]
    },
    {
      name: "Enterprise",
      price: 199,
      features: [
        "Unlimited team members",
        "Enterprise project management",
        "Unlimited storage",
        "24/7 dedicated support",
        "Custom integration",
        "Advanced security",
        "API access"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-gray-600">
          Choose the plan that best fits your needs
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} index={index} />
        ))}
      </div>
    </div>
  );
};

const PricingCard = ({ name, price, features, popular, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className={`bg-white rounded-lg shadow-lg overflow-hidden ${
      popular ? 'border-2 border-blue-500' : ''
    }`}
  >
    {popular && (
      <div className="bg-blue-500 text-white text-center py-2">
        Most Popular
      </div>
    )}
    <div className="p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{name}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-gray-600">/month</span>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <FaCheck className="text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <motion.button
        whileHover={{ scale: 1.05 }}
        className={`w-full py-2 px-4 rounded-lg font-semibold ${
          popular
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        }`}
      >
        Get Started
      </motion.button>
    </div>
  </motion.div>
);

export default Pricing;