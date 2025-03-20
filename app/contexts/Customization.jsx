"use client";
import { createContext, useContext, useState } from "react";

const CustomizationContext = createContext();

export const CustomizationProvider = ({ children }) => {
  const [wallColor, setWallColor] = useState({
    name: "Gray",
    color: "#808080",
  });

  const wallColors = [
    { name: "White", color: "#FFFFFF" },
    { name: "Gray", color: "#808080" },
    { name: "Beige", color: "#F5F5DC" },
    { name: "Blue", color: "#1E90FF" },
    { name: "Green", color: "#32CD32" },
    { name: "Brown", color: "#8B4513" },
    { name: "Red", color: "#8B0000" },
    { name: "Yellow", color: "#FFD700" },
    { name: "Pink", color: "#FFC0CB" },
    { name: "Purple", color: "#800080" },
    { name: "Black", color: "#000000" },
    { name: "Orange", color: "#FFA500" },
  ];

  return (
    <CustomizationContext.Provider
      value={{
        wallColor,
        setWallColor,
        wallColors,
      }}
    >
      {children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => useContext(CustomizationContext);
