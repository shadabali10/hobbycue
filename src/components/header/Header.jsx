import IconBell from "../icons/IconBell";
import IconBookmark from "../icons/IconBookmark";
import IconCart from "../icons/IconCart";
import IconExplore from "../icons/IconExplore";
import IconSearch from "../icons/IconSearch";
import IconHobbies from "../icons/IconHobbies";
import "./header.style.css";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid p-0 gap-4 d-flex align-items-center">
          <a className="navbar-brand" href="#">
            <img src="images/HobbyCueLogo.png" alt="" />
          </a>
          <div className="form-group form-group-md d-none d-lg-block w-100">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search here..."
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button className="btn" type="button" id="invite">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownExplore"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <IconExplore /> Explore
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownExplore"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      People - Community
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Places - Venues
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Programs - Events
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Products - Store
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Blogs
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownHobbies"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <IconHobbies /> Hobbies
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownHobbies"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  <IconBookmark />{" "}
                  <span className="d-inline d-md-none">Hobbies</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  <IconBell />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  <IconCart />
                </a>
              </li>
              <li className="nav-item">
              <button className="btn btn-outline-primary">Sign</button>

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
