"use client";
import React from "react";
import { useCustomization } from "../contexts/Customization";

const Configurator = () => {
  const { wallColor, setWallColor, wallColors } = useCustomization();

  return (
    <div className="configurator">
      {/* Wall Color */}
      <div className="configurator__section">
        <div className="configurator__section__title">Wall Color</div>
        <div className="configurator__section__values">
          {wallColors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === wallColor.color ? "item--active" : ""
              }`}
              onClick={() => setWallColor(item)}
            >
              <div
                className="item__dot"
                style={{ backgroundColor: item.color }}
              />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Configurator;
