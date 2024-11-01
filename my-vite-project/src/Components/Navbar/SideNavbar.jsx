import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SideNavbar = () => {
  return (
    <div className="container">
      <div className="parent-wrapper label-1">
        <ul
          className="nav collapse parent"
          data-bs-parent="#navbarVerticalCollapse"
          id="nv-e-commerce"
        >
          <li className="collapsed-nav-item-title d-none">Company</li>

          <li className="nav-item">
            <a
              className="nav-link"
              href="apps/e-commerce/admin/customer-details.html"
              aria-expanded="false"
            >
              <div className="d-flex align-items-center">
                <span className="fas fa-house-medical"></span>
                <span className="nav-link-text">Add Branche</span>
              </div>
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              href="apps/e-commerce/admin/orders.html"
              aria-expanded="false"
            >
              <div className="d-flex align-items-center">
                <span className="fas fa-wrench"></span>
                <span className="nav-link-text">Add Services</span>
              </div>
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              href="https://project-managment.sandcodes.com/add_engineer2.html"
              aria-expanded="false"
            >
              <div className="d-flex align-items-center">
                <span className="fas fa-helmet-safety"></span>
                <span className="nav-link-text">Add Engineer</span>
              </div>
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link dropdown-indicator"
              href="#nv-admin"
              data-bs-toggle="collapse"
              aria-expanded="true"
              aria-controls="nv-admin"
            >
              <div className="d-flex align-items-center">
                <div className="dropdown-indicator-icon">
                  <span className="fas fa-caret-right"></span>
                </div>
                <span className="nav-link-text">Assets</span>
              </div>
            </a>
            <div className="parent-wrapper">
              <ul
                className="nav collapse parent show"
                data-bs-parent="#e-commerce"
                id="nv-admin"
              >
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="apps/e-commerce/admin/add-product.html"
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="fa-solid fa-file-circle-plus"></span>
                      <span className="nav-link-text">Add New Asset</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="apps/e-commerce/admin/products.html"
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <span className="fa-solid fa-cubes"></span>
                      <span className="nav-link-text">Add Materials</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;
