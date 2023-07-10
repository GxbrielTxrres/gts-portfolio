/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/butterflies.glb --transform
Author: Daria Danyliuk (https://sketchfab.com/DariaDanyliuk)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/butterflies-764b7378c21b47039b40eca9309eb3ab
Title: Butterflies
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Butterflies(props) {
	const group = useRef();
	const { nodes, materials, animations } = useGLTF(
		"/models/butterflies-transformed.glb",
	);
	const { actions } = useAnimations(animations, group);
	useEffect(() => {
		actions["Take 001"].play();
	}, []);

	return (
		<group ref={group} {...props} dispose={null}>
			<group name="Sketchfab_Scene">
				<group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
					<group
						name="e0532d094a4b437680e8f0cc33c1891ffbx"
						rotation={[Math.PI / 2, 0, 0]}
					>
						<group name="Object_2">
							<group position-z={20} name="RootNode">
								{/*  */}
								<group position={[0, 0, -200]}>
									<group
										name="Body"
										position={[0, -45.04, 0]}
										rotation={[-0.53, 0, 0]}
									>
										<mesh
											name="0"
											geometry={nodes["0"].geometry}
											material={materials.BLy_Orange}
											morphTargetDictionary={
												nodes["0"].morphTargetDictionary
											}
											morphTargetInfluences={
												nodes["0"].morphTargetInfluences
											}
										/>
									</group>
									<group
										name="Wings_Side1_Wings_Side1"
										position={[0, -45.04, 0]}
										rotation={[-0.53, 0, 0]}
									>
										<mesh
											name="1"
											geometry={nodes["1"].geometry}
											material={materials.BLy_Orange}
											morphTargetDictionary={
												nodes["1"].morphTargetDictionary
											}
											morphTargetInfluences={
												nodes["1"].morphTargetInfluences
											}
										/>
									</group>
									<group
										name="Wings_Top1_Wings_Top1"
										position={[0, -45.04, 0]}
										rotation={[-0.53, 0, 0]}
									>
										<mesh
											name="2"
											geometry={nodes["2"].geometry}
											material={materials.BLy_Orange}
											morphTargetDictionary={
												nodes["2"].morphTargetDictionary
											}
											morphTargetInfluences={
												nodes["2"].morphTargetInfluences
											}
										/>
									</group>
								</group>
								<group
									name="group1"
									position={[0, 43.26, 200]}
									rotation-y={-Math.PI}
								>
									<group
										name="pasted__Body"
										position={[0, 0, 47.62]}
										rotation={[-0.35, 0, 0]}
									>
										<mesh
											name="3"
											geometry={nodes["3"].geometry}
											material={materials.BFly_Blue}
											morphTargetDictionary={
												nodes["3"].morphTargetDictionary
											}
											morphTargetInfluences={
												nodes["3"].morphTargetInfluences
											}
										/>
									</group>
									<group
										name="pasted__Wings_Side1_Wings_Side1"
										position={[0, 0, 47.62]}
										rotation={[-0.35, 0, 0]}
									>
										<mesh
											name="4"
											geometry={nodes["4"].geometry}
											material={materials.BFly_Blue}
											morphTargetDictionary={
												nodes["4"].morphTargetDictionary
											}
											morphTargetInfluences={
												nodes["4"].morphTargetInfluences
											}
										/>
									</group>
									<group
										name="pasted__Wings_Top1_Wings_Top1"
										position={[0, 0, 47.62]}
										rotation={[-0.35, 0, 0]}
									>
										<mesh
											name="5"
											geometry={nodes["5"].geometry}
											material={materials.BFly_Blue}
											morphTargetDictionary={
												nodes["5"].morphTargetDictionary
											}
											morphTargetInfluences={
												nodes["5"].morphTargetInfluences
											}
										/>
									</group>
								</group>
							</group>
						</group>
					</group>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload("/models/butterflies-transformed.glb");
