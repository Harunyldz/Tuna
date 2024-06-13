import React from 'react'
import { motion } from "framer-motion";
import { referans } from '../../Data';



const Referans = ({ cart, index }) => {
    return (
        <motion.div
            className="cart"
            key={referans.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.5 }}
        >
            <img src={referans.image} alt={referans.title} />
            <div className="content">
                <h3>{referans.title}</h3>
                <hr />
                <p>{referans.text}</p>
            </div>
        </motion.div>
    );
}

export default Referans