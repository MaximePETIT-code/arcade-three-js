import React, { useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.js';
import Loader from './Loader';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

function App() {
	const [finished, setFinished] = useState(false);
	const [loaded, setLoaded] = useState(false);

	const arcade = useLoader(GLTFLoader, './models/pacman_arcade__animation.glb');
	useGLTF.preload('./models/pacman_arcade__animation.glb');

	return (
		<>
			<Loader
				setLoaded={setLoaded}
				finished={finished}
				setFinished={setFinished}
			/>

			{loaded && (
				<Canvas
					camera={{
						fov: 45,
						near: 0.1,
						far: 2000,
						position: [-3, 1.5, 4],
					}}
				>
					<Experience arcade={arcade} />
				</Canvas>
			)}
		</>
	);
}

export default App;
