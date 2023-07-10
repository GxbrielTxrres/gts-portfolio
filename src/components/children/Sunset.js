import { Sky } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";
export default function Sunset({ opposite }) {
	const sky = useRef();

	// useFrame(({ clock }) => {
	// 	sky.current.material.uniforms.mieCoefficient.value =
	// 		Math.abs(Math.cos(clock.elapsedTime * 0.1) * 90) + 2;

	// 	sky.current.material.uniforms.mieDirectionalG.value = Math.abs(
	// 		Math.cos(clock.elapsedTime * 0.1),
	// 	);
	// 	sky.current.material.uniforms.sunPosition.value.x =
	// 		Math.sin(clock.elapsedTime * 0.25) * 500;
	// 	sky.current.material.uniforms.sunPosition.value.y = Math.abs(
	// 		Math.cos(clock.elapsedTime * 0.25) * 10,
	// 	);
	// 	sky.current.material.uniforms.sunPosition.value.z =
	// 		Math.cos(clock.elapsedTime * 0.25) * 500;
	// });
	return (
		<Sky
			ref={sky}
			scale={1000}
			sunPosition={[-1000, 0, 850]}
			turbidity={10}
			rayleigh={3}
			mieCoefficient={0.005}
			mieDirectionalG={0.7}
		/>
	);
}
