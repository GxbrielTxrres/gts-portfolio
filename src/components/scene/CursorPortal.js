import { Environment, MeshPortalMaterial, Text } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { geometry } from "maath";
import { forwardRef, useLayoutEffect, useRef, useState } from "react";
extend(geometry);
const CursorPortal = forwardRef(
	(
		{
			color,
			children,
			preset,
			tl,
			files,
			blend,
			text,
			bg,
			textPosition,
			...otherProps
		},
		ref,
	) => {
		const portal = useRef();
		const mesh = useRef();

		return (
			<group>
				<mesh
					ref={ref}
					onClick={() =>
						window.open("https://twitter.com/DeveloperGT")
					}
					{...otherProps}
				>
					<circleGeometry args={[1]} />
					{/* <Text position={textPosition}>{text}</Text> */}
					<MeshPortalMaterial blend={blend} ref={portal}>
						<color attach="background" args={[color]} />
						<Environment preset="night" resolution={256} />
						{children}
					</MeshPortalMaterial>
				</mesh>
			</group>
		);
	},
);

CursorPortal.displayName = "CursorPortal";
export default CursorPortal;
