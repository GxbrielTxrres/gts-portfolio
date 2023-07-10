import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { useControls } from "leva";
import {
	useRef,
	useState,
	useCallback,
	useEffect,
	useLayoutEffect,
} from "react";
import { Vector2 } from "three";
import { shaders } from "../../../utils/shaders/Shaders";

export default function ShaderBackground({ tl, follow, ...props }) {
	const { width, height } = useThree((state) => state.viewport);
	const { camera } = useThree();

	const shader = useRef();
	const mesh = useRef();
	const mousePosition = useRef({ x: 0, y: 0 });

	const { position, uAlpha } = useControls({
		position: { value: { x: 0, y: 0, z: 0 }, step: 0.1, min: -10, max: 10 },
		uAlpha: { value: 0.9, max: 1, min: 0, step: 0.1 },
	});

	const updateMousePosition = useCallback((e) => {
		let width = window.innerWidth;
		let height = window.innerHeight;

		let mouseX = e.clientX;
		let mouseY = e.clientY;

		let normalizedX = (mouseX / width) * 2 - 1;
		let normalizedY = (mouseY / height) * 2 - 1;
		mousePosition.current = { x: normalizedX, y: normalizedY };
	}, []);

	useEffect(() => {
		window.addEventListener("mousemove", updateMousePosition, false);

		return () => {
			window.removeEventListener("mousemove", updateMousePosition, false);
		};
	}, [updateMousePosition]);

	useEffect(() => {
		gsap.to(shader.current.uniforms.uAlpha, {
			value: 0.0,
			duration: 2.25,
			delay: 1.25,
			ease: "power2.out",
		});
	}, []);

	useLayoutEffect(() => {
		if (tl) {
			tl.to(
				shader.current.uniforms.uAlpha,
				{
					value: 1.0,
					duration: 1,
					repeat: 1,
					repeatDelay: 0.5,
					yoyo: true,
					ease: "power3.in",
				},
				0.5,
			);
		}
	}, [tl]);

	//shader
	const ComplexNumbersShader = shaderMaterial(
		{
			uResolution: new Vector2(window.innerWidth, window.innerHeight),
			u_time: 0,
			uAlpha: 0,
			uMouse: new Vector2(),
		},
		shaders.vertexShader,
		shaders.fragmentShader,
		(material) => {
			material.transparent = true;
		},
	);

	useFrame(({ clock }) => {
		shader.current.uniforms.u_time.value = clock.elapsedTime;

		shader.current.uniforms.uMouse.value = new Vector2(
			mousePosition.current.x,
			mousePosition.current.y,
		);

		if (follow) {
			mesh.current.position.x = camera.position.x - 0.3;
		}
	});

	extend({ ComplexNumbersShader });
	return (
		<mesh
			ref={mesh}
			{...props}
			position={[5, -0.704, position.z]}
			// scale={[2.52, 0.145, 1]}
			scale={[width, height, 1]}
		>
			<planeGeometry />
			<complexNumbersShader ref={shader} uAlpha={uAlpha} />
		</mesh>
	);
}
