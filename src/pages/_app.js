import Experience from "@/components/Experience";

import { Canvas } from "@react-three/fiber";
import { styles } from "@/styles/styles";
import { Perf } from "r3f-perf";
import { EffectComposer } from "@react-three/postprocessing";
import { ScrollControls } from "@react-three/drei";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Canvas shadows style={{ ...styles }} gl={{ antialias: false }}>
				<Perf />

				<ScrollControls pages={3}>
					<Experience />
				</ScrollControls>
			</Canvas>
			<Component {...pageProps} />
		</>
	);
}
