import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useMemo } from "react";

export default function Effects() {
	const postprocessing = useMemo(() => {
		return (
			<EffectComposer disableNormalPass multisampling={4}>
				<Bloom mipmapBlur intensity={0.5} luminanceThreshold={1} />
			</EffectComposer>
		);
	}, []);

	return <>{postprocessing}</>;
}
