import { motion } from 'framer-motion';
import { 
  FaProjectDiagram, 
  FaUsers, 
  FaChartBar, 
  FaClock,
  FaShieldAlt,
  FaMobile
} from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaProjectDiagram />,
      title: "Project Management",
      description: "Organize and track projects with intuitive tools and workflows"
    },
    {
      icon: <FaUsers />,
      title: "Team Collaboration",
      description: "Work together seamlessly with real-time communication features"
    },
    {
      icon: <FaChartBar />,
      title: "Advanced Analytics",
      description: "Gain insights with comprehensive reporting and analytics"
    },
    {
      icon: <FaClock />,
      title: "Time Tracking",
      description: "Monitor productivity and billable hours effortlessly"
    },
    {
      icon: <FaShieldAlt />,
      title: "Security",
      description: "Enterprise-grade security to protect your business data"
    },
    {
      icon: <FaMobile />,
      title: "Mobile Access",
      description: "Access your workspace from any device, anywhere"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Powerful Features for Your Business
        </h1>
        <p className="text-xl text-gray-600">
          Everything you need to manage and grow your business efficiently
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
  >
    <div className="text-blue-600 text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default Features;