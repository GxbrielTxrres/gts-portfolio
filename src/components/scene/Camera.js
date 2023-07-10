import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useLayoutEffect, useRef } from "react";
import { Vector3 } from "three";

export default function Camera({ tl, focus = new Vector3(0, -3, 0) }) {
	// const cam = useRef();
	const { camera } = useThree();
	useLayoutEffect(() => {
		camera.position.set(10, -0.3, 0);
		camera.lookAt(focus);
		camera.fov = 55;
		camera.updateProjectionMatrix();
	}, []);

	useEffect(() => {
		gsap.to(camera.position, {
			x: 7,
			duration: 1.5,
			ease: "power2.out",
		});

		gsap.to(camera.rotation, {
			y: Math.PI / 2,
			duration: 1.5,
			ease: "sine.out",
		});
	}, [tl]);

	useLayoutEffect(() => {
		if (tl) {
		}
	}, [tl]);

	return (
		<>
			{/* <PerspectiveCamera
				ref={cam}
				makeDefault
				position={[10, -0.3, 0]}
				rotation-y={Math.PI / 2}
			/> */}
			<OrbitControls />
		</>
	);
}
