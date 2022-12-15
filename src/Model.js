import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Html } from '@react-three/drei';
import { useRef } from 'react';
import { useSpring, animated } from '@react-spring/three';
import { useEffect } from 'react';

export default function Model() {
	const arcadeRef = useRef();
	const [spring, setSpring] = useSpring(() => ({
		position: [0, 0, 0],
		scale: [0.05, 0.05, 0.05],
		rotation: [0, 2, 0],
		config: {
			friction: 10,
			tension: 40,
			delay: 300,
			easing: (t) => t * t * t,
		},
	}));

	useEffect(() => {
		setSpring({
			rotation: [0, -0.64, 0],
			position: [0, -1.8, 0],
		});
		setTimeout(() => {
			const screen = document.querySelector('iframe');
			screen.classList.add('active');

			setSpring({
				position: [0, -6.5, 0],
				scale: [0.17, 0.18, 0.17],
			});
		}, 2500);
	}, []);

	const arcade = useLoader(GLTFLoader, './models/pacman_arcade__animation.glb');

	return (
		<animated.primitive
			object={arcade.scene}
			ref={arcadeRef}
			scale={spring.scale}
			position={spring.position}
			rotation={spring.rotation}
		>
			<Html
				transform
				wrapperClass="screenGame"
				distanceFactor={0}
				position={[0.2, 38.3, -2]}
				rotation-x={-0.8}
			>
				<iframe src="https://reaslyn.github.io/pacman/" />
			</Html>
		</animated.primitive>
	);
}
