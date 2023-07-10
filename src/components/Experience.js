import ShaderBackground from "./scene/ShaderBackground";
import Background from "./scene/Background";
import Camera from "./scene/Camera";
import { Room } from "./models/Room";

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import ShaderCursor from "./scene/ShaderCursor";
import AnimatedTriangles from "./children/AnimatedTriangles";
import Effects from "./scene/Effects";

export default function Experience() {
	const [tl, setTl] = useState();
	const scroll = useScroll();
	const timeline = useRef();

	// useLayoutEffect(() => {
	// 	timeline.current = gsap.timeline();

	// 	const context = gsap.context(() => {
	// 		setTl(timeline.current);
	// 	});

	// 	return () => context.revert();
	// }, []);

	// useFrame(() => {
	// 	if (timeline.current) {
	// 		timeline.current.seek(timeline.current.duration() * scroll.offset);
	// 	}
	// });

	return (
		<>
			{/* Other */}
			<Camera tl={tl} />
			<Effects />
			{/* Scene */}
			<Background path="./hdrs/1.hdr" color="black" bg tl={tl} />

			<Room tl={tl} />

			<AnimatedTriangles scale={0.3} />

			{/* <ShaderCursor tl={tl} rotation-y={Math.PI / 2} /> */}

			<ShaderBackground tl={tl} rotation-y={Math.PI / 2} follow />
		</>
	);
}
