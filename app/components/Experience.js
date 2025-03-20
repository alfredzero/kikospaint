import React, { useState } from "react";
import { Stage, PresentationControls } from "@react-three/drei";
import Apartment from "./Apartment";
import Home from "./Home";
import Business from "./Business";

const Experience = ({ selectedModel }) => {
  // Dynamically render only the selected model
  const renderModel = () => {
    switch (selectedModel) {
      case "Apartment":
        return <Apartment />;
      case "Home":
        return <Home />;
      case "Business":
        return <Business />;
      default:
        return <Apartment />;
    }
  };

  return (
    <PresentationControls
      speed={1.5}
      global
      polar={[0, 0]} // ❌ Prevent vertical movement
      azimuth={[-Math.PI, Math.PI]} // ✅ Allow full left-right rotation
      rotation={[0, Math.PI / 4, 0]} // Initial rotation
    >
      <Stage environment="city" intensity={0.6} castShadow={false}>
        {renderModel()} {/* ✅ Only renders the selected model */}
      </Stage>
    </PresentationControls>
  );
};

export default Experience;
