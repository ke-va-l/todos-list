import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-body-tertiary navbar-${props.mode} bg-dark`}
    >
      <div className={`container-fluid  navbar-${props.mode} bg-${props.mode}`}>
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
            <a className="nav-link" href="/">
              Features
            </a>
            <Link className="nav-link" to="/About">
              About
            </Link>
            <a
              className="nav-link disabled"
              href="/"
              onClick={(e) => e.preventDefault()}
              aria-disabled="true"
            >
              Disabled
            </a>
          </div>
          <div
            className={`form-check form-switch container mx-3 text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="switchCheckDefault"
            />
            <label className="form-check-label" htmlFor="switchCheckDefault">
              Dark Mode
            </label>
          </div>
          <div
            className={`form-check form-switch container mx-3 text-
            }`}
          >
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="switchCheckDefault"
            />
            <label className="form-check-label" htmlFor="switchCheckDefault">
              Dark Mode
            </label>
          </div>
          <div
            className={`form-check form-switch container mx-3 text-
            }`}
          >
            <input
              className="form-check-input"
              onClick={props.changeTheme}
              type="checkbox"
              role="switch"
              id="switchCheckDefault"
            />
            <label className="form-check-label" htmlFor="switchCheckDefault">
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// ✅ Correct propTypes
Navbar.propTypes = {
  title: PropTypes.string,
  abouttext: PropTypes.string,
};

// ✅ defaultProps works now
Navbar.defaultProps = {
  title: "k",
  abouttex: "KEval",
};
