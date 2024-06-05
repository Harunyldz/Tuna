import "./Trainings.css";
import { carts } from "../../Data.js";
import { motion, AnimatePresence } from "framer-motion";
import Cart from "../../components/Cart/Cart.jsx";

function Trainings() {
  const trainings = carts.filter((item) => item.type === "egitim");
  return (
    <div className="trainings-container">
      <AnimatePresence>
        <motion.div
          className="trainings"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          {trainings.map((cart) => (
            <Cart cart={cart} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Trainings;
