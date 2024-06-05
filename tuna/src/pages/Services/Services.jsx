import "./Services.css";
import { carts } from "../../Data.js";
import { motion, AnimatePresence } from "framer-motion";
import Cart from "../../components/Cart/Cart.jsx";

const Services = () => {
  const services = carts.filter((item) => item.type === "hizmet");

  return (
    <div className="services-container">
      <AnimatePresence>
        <motion.div
          className="services"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          {services.map((cart) => (
            <Cart cart={cart} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Services;
