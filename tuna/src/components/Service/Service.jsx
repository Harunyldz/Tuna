import "./Service.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { carts } from "../../Data.js";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Service = () => {
  const serviceTopCarts = carts
    .filter((item) => item.type === "hizmet")
    .slice(0, 3);
  const serviceBotCarts = carts
    .filter((item) => item.type === "egitim")
    .slice(0, 3);

  const serviceCarts = [...serviceTopCarts, ...serviceBotCarts];
  console.log(serviceCarts);
  return (
    <section className="service-container">
      <motion.div
        className="service"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Hizmetlerimiz ve Eğitimlerimiz</h2>
        <p>
          İş sağlığı ve güvenliği alanında sunduğumuz kapsamlı hizmetler ve
          eğitimler ile iş yerinizde güvenli bir çalışma ortamı oluşturmanıza
          yardımcı oluyoruz. Profesyonel ekibimiz, işletmenizin ihtiyaçlarına
          özel çözümler sunarak, iş kazalarını ve meslek hastalıklarını en aza
          indirmenizi sağlar. Eğitim programlarımız, çalışanlarınızın bilinç
          düzeyini artırarak, güvenlik kültürünü iş yerinizde yerleştirir. İş
          sağlığı ve güvenliği konusunda tam donanımlı bir yaklaşım için bize
          güvenin.
        </p>
        <div className="service-carts">
          {serviceCarts.map((service, index) => (
            <Link
              to={`${
                service.type === "hizmet" ? "hizmetlerimiz" : "egitimlerimiz"
              }/${service.href}`}
              className="service-cart"
              key={service.id}
            >
              <img src={service.image} alt={service.title} />
              <div className="service-content">
                <span className="service-title">{service.title}</span>
                <span className="icon">
                  {" "}
                  <FaArrowRightLong />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="service-btns">
          <motion.div
            as={Link}
            to="/hizmetlerimiz"
            className="service-btn1 service-btn"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Hizmetlerimiz
          </motion.div>
          <motion.div
            as={Link}
            to="/egitimlerimiz"
            className="service-btn2 service-btn"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Eğitimlerimiz
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Service;
