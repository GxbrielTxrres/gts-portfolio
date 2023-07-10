import vertexPars from "../shaders/parse/vertex_pars.glsl";
import vertexMain from "../shaders/parse/vertex_main.glsl";

import fragmentMain from "../shaders/parse/fragment_main.glsl";
import fragmentPars from "../shaders/parse/fragment_pars.glsl";

export function handleCompile(shader, ref) {
	//create reference for the shader in userData
	ref.current.material.userData.shader = shader;

	//add uniforms here and in useFrame
	shader.uniforms.u_time = { value: 0 };
	shader.uniforms.u_progress = { value: 0 };

	//shader with functions
	const parsVertexString = /*glsl*/ `#include <displacementmap_pars_vertex>`;
	shader.vertexShader = shader.vertexShader.replace(
		parsVertexString,
		parsVertexString + vertexPars,
	);

	//main shader code without the boilerplate
	//(MVP + gl_Position())
	const mainVertexString = /*glsl*/ `#include <displacementmap_vertex>`;
	shader.vertexShader = shader.vertexShader.replace(
		mainVertexString,
		mainVertexString + vertexMain,
	);
}

// const mainFragmentString = /*glsl*/ `#include <normal_fragment_maps>`;
// shader.fragmentShader = shader.fragmentShader.replace(
//     mainFragmentString,
//     mainFragmentString + fragmentMain,
// );

// const parsFragmentString = /*glsl*/ `#include <bumpmap_pars_fragment>`;
// shader.fragmentShader = shader.fragmentShader.replace(
//     parsFragmentString,
//     parsFragmentString + fragmentPars,
// );
