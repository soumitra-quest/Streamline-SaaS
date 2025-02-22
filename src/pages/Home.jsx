import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaUsers } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Streamline Your Business Operations
            </h1>
            <p className="text-xl mb-8">
              All-in-one platform for modern business management
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold text-lg shadow-lg"
            >
              Get Started Free
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FaRocket className="h-8 w-8" />}
              title="Boost Productivity"
              description="Streamline workflows and automate repetitive tasks"
            />
            <FeatureCard
              icon={<FaChartLine className="h-8 w-8" />}
              title="Real-time Analytics"
              description="Make data-driven decisions with powerful insights"
            />
            <FeatureCard
              icon={<FaUsers className="h-8 w-8" />}
              title="Team Collaboration"
              description="Work together seamlessly across your organization"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-lg shadow-lg"
  >
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default Home;