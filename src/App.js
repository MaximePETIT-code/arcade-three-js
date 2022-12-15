import React, { useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.js';
import Loader from './Loader';

function App() {
	const [finished, setFinished] = useState(false);
	const [loaded, setLoaded] = useState(false);

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
					<Experience />
				</Canvas>
			)}
		</>
	);
}

export default App;

useGLTF.preload('./models/pacman_arcade__animation.glb');
