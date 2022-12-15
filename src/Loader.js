import { useState, useEffect } from 'react';

export default function Loader({ setLoaded, finished, setFinished }) {
	const [frame, setFrame] = useState(0);
	const [endFrame, setEndFrame] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setFrame((frame) => (frame + 1) % 7);
		}, 100);

		() => {
			clearInterval(interval);
		};
	}, []);

	const clickEvent = () => {
		setFinished(true);
		setEndFrame(frame);

		const timeout = setTimeout(() => {
			setLoaded(true);
		}, 2000);
	};

	return (
		<div className="overlay" style={finished ? { opacity: 0 } : {}}>
			{!finished ? (
				<img
					className="coin"
					src={
						finished ? `/coin/coin${endFrame}.png` : `/coin/coin${frame}.png`
					}
					alt="coin"
				/>
			) : (
				<img className="gif" src="/coin/coin.gif" alt="logo" />
			)}
			<div className="button" onClick={!finished ? clickEvent : () => {}}>
				{!finished && <p>INSERT COIN</p>}
			</div>
		</div>
	);
}
