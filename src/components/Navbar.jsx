import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <FaCode className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">FlowForge</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/features">Features</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/testimonials">Testimonials</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="ml-4 px-4 py-2 rounded-md bg-blue-600 text-white font-medium"
            >
              Sign In
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
  >
    {children}
  </Link>
);

export default Navbar;