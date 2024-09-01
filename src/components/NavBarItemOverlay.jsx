import React from "react";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

import { overlaySolutionsData } from "./data/Data";

function DisplayNavBarItemOverlay({ menuItems, overlayItem }) {
  const overlayTitle = menuItems.find((item) => item.id === overlayItem)?.title;

  return (
    <div
      className="floating-window "
      style={{ display: overlayItem ? "block" : "none" }}
    >
      {overlayTitle && overlayTitle.toLowerCase() === "solutions" && (
        <div id="overlayContain" className="shadow">
          {overlaySolutionsData.map((item, index) => (
            <Link
              key={index}
              to={item.explore}
              style={{ textDecoration: "none" }}
            >
              <div
                className="d-flex  align-items-left mt-1 mb-3 shadow p-1"
                id="overlayContainBody"
              >
                <Image
                  className="#"
                  style={{ height: "32px", width: "32px" }}
                  src={item.img_url}
                  roundedCircle
                />
                <div
                  style={{
                    textAlign: "left",
                    marginLeft: "7px",
                    fontWeight: "bolder",
                  }}
                >
                  <h6 style={{ fontWeight: "bolder" }}>{item.title}</h6>
                  {item.content}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
export default DisplayNavBarItemOverlay;
