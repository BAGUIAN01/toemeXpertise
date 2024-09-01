import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { MenuItems } from "./data/Data";
import "./data/navbar.js";
import { Link } from "react-router-dom";
import "../Styles/NavbarStyle.css";
import DisplayNavBarItemOverlay from "./NavBarItemOverlay";
import { MdPhoneCallback } from "react-icons/md";
import DisplayMobileNavSubItems from "./MobileNavSubItems";
import { Button } from "./ui/button";

function Navbar() {
  const [displayNavItemReversePopUp, setDisplayNavItemReversePopUp] =
    useState(false);
  const [navItemClickedReversed, setNavItemClickedReversed] = useState(false);
  const [menuIconclicked, setMenuIconclicked] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);
  const [overlayItem, setOverlayItem] = useState(null);
  const timeoutRef = useRef(null);
  const overlayRef = useRef(null);
  const menuIconsRef = useRef(null);

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    let timeoutId; // Déclarer timeoutId ici

    const handleScroll = () => {
      setScrolling(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScrolling(false);
      }, 600); // Ajustez ce délai selon vos besoins
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleMenuIconClick = () => {
    setMenuIconclicked(!menuIconclicked);
    setNavItemClickedReversed(menuIconclicked);
    setDisplayNavItemReversePopUp(false);
  };

  const handleMobileNavLinkClick = (item) => {
    if (item.isOverlay) {
      setDisplayNavItemReversePopUp(true);
      setMenuIconclicked(!menuIconclicked);
      setNavItemClickedReversed(menuIconclicked);
      setClickedItem(item);
    }
  };

  const handleMouseEnter = (itemId, isOverlay) => {
    if (isOverlay) {
      clearTimeout(timeoutRef.current);
      setOverlayItem(itemId);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOverlayItem(null);
    }, 100);
  };

  const handleOverlayMouseEnter = () => {
    clearTimeout(timeoutRef.current);
  };

  const handleOverlayMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOverlayItem(null);
    }, 100);
  };

  useLayoutEffect(() => {
    const updateDeviceState = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 1024) {
        setIsMobileDevice(true);
      } else {
        setIsMobileDevice(false);
      }
    };
    updateDeviceState();
    window.addEventListener("resize", updateDeviceState);
    return () => {
      window.removeEventListener("resize", updateDeviceState);
    };
  }, []);

  useEffect(() => {
    const menuIcon = menuIconsRef.current;
    if (
      menuIcon &&
      menuIcon.classList.contains("fas") &&
      menuIcon.classList.contains("fa-times")
    ) {
      setDisplayNavItemReversePopUp(false);
    }
  }, [menuIconclicked]);

  const navStyle = {
    backgroundColor: scrolling
      ? "hsla(0, 43%, 99%, 0.4)"
      : "hsla(0, 43%, 99%, 1)",
  };
  /*active navbar*/
  const [currentPage, setCurrentPage] = useState("");

  // Obtenez l'URL de la page actuelle et mettez à jour l'état
  useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, []);

  /*end*/

  return (
    <div id="NavBar">
      <nav className="NavbarItems" style={navStyle}>
        <Link to={"/"}>
          <img
            src={process.env.PUBLIC_URL + "/logofull.png"}
            alt="Logo"
            className="navbar-logo"
          />
        </Link>
        <div className="menu-icons">
          <i
            ref={menuIconsRef}
            className={menuIconclicked ? "fas fa-times" : "fas fa-bars"}
            onClick={handleMenuIconClick}
          ></i>
        </div>

        <ul className={menuIconclicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(item.id, item.isOverlay)}
              onMouseLeave={handleMouseLeave}
              className={currentPage === item.url ? "active" : ""}
            >
              {isMobileDevice ? (
                item.isOverlay ? (
                  <Link
                    className={item.cName}
                    onClick={() => handleMobileNavLinkClick(item)}
                  >
                    <i className={item.icon}></i>
                    {item.title}
                  </Link>
                ) : (
                  <Link className={item.cName} to={item.url}>
                    <i className={item.icon}></i>
                    {item.title}
                  </Link>
                )
              ) : item.isOverlay ? (
                <i className={item.cName}>
                  <i className={item.icon}></i>
                  {item.title}
                </i>
              ) : (
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              )}
            </li>
          ))}
          {/* <ContactUsCard name={"Contacter"} icon={<MdPhoneCallback/>} bt_style={"gap-2 align-middle justify-center bg-[#044444] "}></ContactUsCard> */}
          <Link to="/contact">
            <Button className="gap-2 align-middle justify-center bg-[#044444] ">
              <MdPhoneCallback />
              Contacter
            </Button>
          </Link>
        </ul>

        {displayNavItemReversePopUp && (
          <ul
            className={
              navItemClickedReversed && clickedItem && isMobileDevice
                ? "nav-menu active"
                : "nav-menu"
            }
          >
            {isMobileDevice && (
              <div>
                <hr></hr>
                <li>
                  <i className={clickedItem.icon}></i> {clickedItem.title}
                </li>
                <DisplayMobileNavSubItems title={clickedItem.title} />
              </div>
            )}
          </ul>
        )}
      </nav>

      {!isMobileDevice && (
        <div
          ref={overlayRef}
          onMouseEnter={handleOverlayMouseEnter}
          onMouseLeave={handleOverlayMouseLeave}
        >
          <DisplayNavBarItemOverlay
            menuItems={MenuItems}
            overlayItem={overlayItem}
          />
        </div>
      )}
    </div>
  );
}

export default Navbar;
