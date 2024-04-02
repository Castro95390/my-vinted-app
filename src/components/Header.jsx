import { Link } from "react-router-dom";
import "./header.css";

// je met en props mon token et handleToken de ma App.jsx
const Header = ({ token, handleToken }) => {
  return (
    <header>
      <h1>Vinted</h1>

      {token ? (
        <button
          onClick={() => {
            handleToken(null);
          }}
        >
          Se déconnecter
        </button>
      ) : (
        <>
          <Link to="/signup">
            <button>S'inscrire</button>
          </Link>
          <Link to="/login">
            <button>Se connecter</button>
          </Link>
        </>
      )}
    </header>
  );
};

export default Header;
