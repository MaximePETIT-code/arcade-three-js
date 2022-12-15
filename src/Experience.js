import {
	ContactShadows,
	PresentationControls,
	Environment,
} from '@react-three/drei';
import Model from './Model';

export default function Experience() {
	return (
		<>
			<color args={['#695b5b']} attach="background" />

			<Environment preset="city" />

			<PresentationControls
				global
				polar={[0, 0]}
				azimuth={[-0.3, 0.35]}
				config={{ mass: 2, tension: 400 }}
			>
				<Model />
			</PresentationControls>

			<ContactShadows position-y={-1.9} opacity={0.4} scale={5} blur={2.4} />
		</>
	);
}
