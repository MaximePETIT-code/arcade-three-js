import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.js";
import { Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import Loader from "./Loader";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <Canvas
    camera={{
      fov: 45,
      near: 0.1,
      far: 2000,
      position: [-3, 1.5, 4],
    }}
  >
    <Suspense
    fallback={<Loader/>}
    >
      <Experience />
    </Suspense>
  </Canvas>
);
