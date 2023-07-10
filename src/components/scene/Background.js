import { Environment, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

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
