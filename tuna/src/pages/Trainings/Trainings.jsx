import "./Trainings.css";
import { carts } from "../../utils/Data.js";
import Cart from "../../components/Cart/Cart.jsx";

function Trainings() {
  const trainings = carts.filter((item) => item.type === "egitim");
  return (
    <div className="trainings-container">
      <div className="trainings-header">
        <h1>Eğitimlerimiz</h1>
        <p>
          {" "}
          İş sağlığı ve güvenliği konusunda yetkin bir firma olarak, sunduğumuz
          eğitimlerle iş yerinizde güvenli ve sağlıklı bir çalışma ortamı
          oluşturmayı hedefliyoruz. Aşağıda, sizlere sağladığımız kapsamlı
          eğitimler hakkında detaylı bilgiler bulabilirsiniz.
        </p>
      </div>
      <div className="trainings">
        {trainings.map((cart, index) => (
          <Cart cart={cart} index={index} key={cart.id} />
        ))}
      </div>
    </div>
  );
}

export default Trainings;
