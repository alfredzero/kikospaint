"use client";
import { useState } from "react";
import { CustomizationProvider } from "./contexts/Customization";
import Configurator from "./components/Configurator";
import Experience from "./components/Experience";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Home() {
  const [selectedModel, setSelectedModel] = useState("Apartment");

  return (
    <CustomizationProvider>
      <div className="App">
        {/* Hero Section */}
        <section className="hero">
          <h1 className="hero-title">Experience Kikos Painting</h1>
        </section>

        {/* Model Selection Menu */}
        <nav className="model-selection">
          <button
            className={`model-link ${
              selectedModel === "Apartment" ? "active" : ""
            }`}
            onClick={() => setSelectedModel("Apartment")}
          >
            Apartment Complex
          </button>
          <button
            className={`model-link ${selectedModel === "Home" ? "active" : ""}`}
            onClick={() => setSelectedModel("Home")}
          >
            Homes
          </button>
          <button
            className={`model-link ${
              selectedModel === "Business" ? "active" : ""
            }`}
            onClick={() => setSelectedModel("Business")}
          >
            Business
          </button>
        </nav>

        {/* 3D Experience - Add `key={selectedModel}` to force re-render */}
        <Canvas key={selectedModel}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} />
          <Experience selectedModel={selectedModel} />
          <OrbitControls />
        </Canvas>
      </div>
      {/* Configurator ALWAYS at the bottom */}
      <div className="configurator">
        <Configurator />
      </div>
    </CustomizationProvider>
  );
}
