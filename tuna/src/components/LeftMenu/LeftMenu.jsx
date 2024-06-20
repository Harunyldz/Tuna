import "./LeftMenu.css";
import { FaAngleRight } from "react-icons/fa6";
import { NavLink, Link } from "react-router-dom";
import { carts } from "../../Data.js";
const LeftMenu = () => {
  return (
    <div className="leftmenu">
      <ul className="leftmenu-list">
        <h3>Tuna İş Güvenliği Hizmetleri</h3>
        {carts.map((cart) => (
          <NavLink
            to={`/${
              cart.type === "hizmet" ? "hizmetlerimiz" : "egitimlerimiz"
            }/${cart.href}`}
            className={({ isActive }) =>
              isActive ? "list-item active-link" : "list-item"
            }
          >
            <FaAngleRight />
            {cart.title}
          </NavLink>
        ))}
      </ul>
      <div className="leftmenu-contact">
        <h5>Güvenliğiniz bir adım uzağınızda</h5>
        <p>
          İş sağlığı ve güvenliği hizmetlerimizle yanınızdayız. Hemen teklif
          almak için tıklayınız.
        </p>
        <Link to="/TeklifAl" className="leftmenu-btn">
          Teklif Al
        </Link>
        <h5>Aklınıza takılan bir şey mi var?</h5>
        <p>
          İş Güvenliği Hizmetlerimizle alakalı detaylı bilgi almak için bize
          ulaşabilirsiniz.
        </p>
        <Link to="/iletisim" className="leftmenu-btn">
          İletişim
        </Link>
      </div>
    </div>
  );
};

export default LeftMenu;
