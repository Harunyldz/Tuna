import "./Services.css";
import { carts } from "../../utils/Data.js";
import Cart from "../../components/Cart/Cart.jsx";

const Services = () => {
  const services = carts.filter((item) => item.type === "hizmet");

  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Hizmetlerimiz</h1>
        <p>
          {" "}
          İş sağlığı ve güvenliği konusunda yetkin bir firma olarak, sunduğumuz
          hizmetlerle iş yerinizde güvenli ve sağlıklı bir çalışma ortamı
          oluşturmayı hedefliyoruz. Aşağıda, sizlere sağladığımız kapsamlı
          hizmetler hakkında detaylı bilgiler bulabilirsiniz.
        </p>
      </div>
      <div className="services">
        {services.map((cart, index) => (
          <Cart cart={cart} index={index} key={cart.id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
