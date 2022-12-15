import {
  Html,
  ContactShadows,
  PresentationControls,
  Float,
  Environment,
  useGLTF,
} from "@react-three/drei";
import { useEffect, useState } from "react";
import { Text } from "@react-three/drei";
import { Suspense } from "react";
import Model from "./Model";
import Loader from "./Loader";

export default function Experience() {
  return (
    <>
      <color args={["#695b5b"]} attach="background" />

      <Environment preset="city" />

      <PresentationControls
        global
        polar={[0, 0]}
        azimuth={[-0.3, 0.35]}
        config={{ mass: 2, tension: 400 }}
      >
        {/* <rectAreaLight
          width={2.5}
          height={1.65}
          intensity={65}
          color={"#ff6900"}
          rotation={[-0.1, Math.PI, 0]}
          position={[0, 0.55, -1.15]}
        /> */}

        <Suspense fallback={<Loader />}>
          <Model />
        </Suspense>
      </PresentationControls>

      <ContactShadows position-y={-1.9} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
