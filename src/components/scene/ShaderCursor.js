import { Stars, shaderMaterial } from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { useControls } from "leva";
import { useRef, useCallback, useEffect, useLayoutEffect } from "react";
import { Vector2, Vector3 } from "three";
import { shaders } from "../../../utils/shaders/Shaders";
import CursorPortal from "./CursorPortal";
import { SpaceBoi } from "../models/Space_boi";

export default function ShaderCursor({ tl, vec = new Vector3(), ...props }) {
	const { camera } = useThree();

	const shader = useRef();
	const mesh = useRef();
	const mousePosition = useRef({ x: 0, y: 0 });
	const secondMouse = useRef({ x: 0, y: 0 });

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
		secondMouse.current = { x: mouseX, y: mouseY };
	}, []);

	useEffect(() => {
		window.addEventListener("mousemove", updateMousePosition, false);

		return () => {
			window.removeEventListener("mousemove", updateMousePosition, false);
		};
	}, [updateMousePosition]);

	//shader
	const ComplexNumShader = shaderMaterial(
		{
			uResolution: new Vector2(window.innerWidth, window.innerHeight),
			u_time: 0,
			uAlpha: 0,
			uMouse: new Vector2(),
		},
		shaders.vertexShader,
		shaders.cursorFragShader,
		(material) => {
			material.transparent = true;
		},
	);

	useFrame(({ clock, mouse, viewport }) => {
		// shader.current.uniforms.u_time.value = clock.elapsedTime;

		// shader.current.uniforms.uMouse.value = new Vector2(
		// 	mousePosition.current.x,
		// 	mousePosition.current.y,
		// );

		mesh.current.position.lerp(
			vec.set(
				camera.position.x - 7,
				(mouse.y * viewport.height) / 2,
				-(mouse.x * viewport.width) / 2,
			),
			0.05,
		);
		mesh.current.updateMatrixWorld();
	});

	useLayoutEffect(() => {
		if (tl) {
			tl.to(
				mesh.current.material.uniforms.blend,
				{
					value: 1,
					duration: 0.25,
				},
				1.5,
			);
		}
	}, [tl]);

	extend({ ComplexNumShader });
	return (
		<CursorPortal rotation-y={Math.PI / 2} ref={mesh} color="black">
			<Stars factor={4} fade speed={2} count={3000} />
			<SpaceBoi scale={0.3} position={[0, -0.5, -10]} />
		</CursorPortal>
	);
}
