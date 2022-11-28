import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function Header({ page, setDetailUser }) {
  const [dropdownDisplay, setDropdownDisplay] = useState(false);
  const navigate = useNavigate();
  console.info(page, "<<<< apa nih");
  return (
    <div className="header-container">
      <p className="header-title">Cinta Coding</p>
      {/* <p>TEST</p> */}
      {/* <div className="container-post">
        <p>TEST</p>
        <p
      </div> */}
      <div className="action">
        {page === "home" && (
          <>
            <div
              className="username cursor-pointer"
              onClick={() => setDropdownDisplay(!dropdownDisplay)}
            >
              <p className="typography-welcome">Welcome,</p>

              <p className="typography-name">{window.localStorage.username}</p>
            </div>
            {dropdownDisplay && (
              <div className="dropdown-detail-container">
                <div className="arrow-up"></div>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setDetailUser("detailProfile");
                    setDropdownDisplay(!dropdownDisplay);
                  }}
                >
                  Detail Profile
                </div>
              </div>
            )}
          </>
        )}
        {page === "landing" && (
          <button className="button-login" onClick={() => navigate("/login")}>
            Login
          </button>
        )}
        {/* <p className="action-name"></p> */}
      </div>
    </div>
  );
}
Header.propTypes = {
  page: PropTypes.string,
  setDetailUser: PropTypes.func,
};
Header.defaultProps = {
  page: "landing",
  setDetailUser: () => {},
};
export default Header;
