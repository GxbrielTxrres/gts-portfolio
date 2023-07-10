import { Environment, useScroll } from "@react-three/drei";

export default function Background({ path, color, bg = false, blur, res }) {
	return (
		<>
			<Environment
				files={path}
				background={bg}
				blur={blur}
				resolution={res}
			/>

			<color attach="background" args={[color]} />
		</>
	);
}
