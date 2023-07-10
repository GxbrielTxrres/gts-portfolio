import { useLayoutEffect, useRef } from "react";
import { BufferAttribute } from "three";
import { useFrame } from "@react-three/fiber";
import { handleCompile } from "../../../utils/shaders/utils";
import { useControls } from "leva";

export default function AnimatedTriangles(props) {
	const sphere = useRef();
	const mesh = useRef();

	const { u_progress } = useControls({
		u_progress: { value: 0, min: 0, max: 1, step: 0.01 },
	});

	useFrame(({ clock, camera }) => {
		const time = clock.elapsedTime * 0.2;
		//access shader uniforms through userData
		if (mesh.current.material.userData.shader !== undefined) {
			mesh.current.material.userData.shader.uniforms.u_time.value = time;
			mesh.current.material.userData.shader.uniforms.u_progress.value =
				u_progress;
		}
	});

	useLayoutEffect(() => {
		const length = sphere.current.attributes.position.count;
		const randoms = new Float32Array(length * 3);

		for (let i = 0; i < length; i += 3) {
			let r = Math.random();

			randoms[i] = r;
			randoms[i + 1] = r;
			randoms[i + 2] = r;
		}

		sphere.current.setAttribute("aRandom", new BufferAttribute(randoms, 1));
	}, []);

	return (
		<mesh {...props} castShadow ref={mesh} position={[4, 0, 0]}>
			<icosahedronGeometry args={[1, 4]} ref={sphere} />
			<meshStandardMaterial
				toneMapped={false}
				onBeforeCompile={(shader) => {
					handleCompile(shader, mesh);
				}}
			/>
		</mesh>
	);
}
