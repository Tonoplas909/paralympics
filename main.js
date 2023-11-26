import * as BABYLON from '@babylonjs/core';
import * as LOADERS from "@babylonjs/loaders";

const canvas = document.getElementById('renderCanvas');

const engine = new BABYLON.Engine(canvas);

const createScene = async function () {
	const scene = new BABYLON.Scene(engine);

	scene.createDefaultCameraOrLight(true, false, true);
	// scene.createDefaultLight();
	// const camera = new BABYLON.UniversalCamera('camera', new BABYLON.Vector3(0, 0, -10), scene);

	// const camera = new BABYLON.ArcRotateCamera('camera', 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);
	// camera.attachControl(true);
	// camera.setPosition(new BABYLON.Vector3(0, 0, -20));

	// camera.inputs.addMouseWheel();
	// camera.setTarget(BABYLON.Vector3.Zero());

	// const box = new BABYLON.MeshBuilder.CreateBox('box', {
	// 	size: 0.25,
	// 	faceColors: [
	// 		new BABYLON.Color4(1, 0, 0, 1),
	// 		new BABYLON.Color4(0, 1, 0, 1),
	// 		new BABYLON.Color4(0, 0, 1, 1),
	// 		new BABYLON.Color4(1, 1, 0, 1),
	// 		new BABYLON.Color4(1, 0, 1, 1),
	// 		new BABYLON.Color4(0, 1, 1, 1)
	// 	]
	// });

	// const ground = BABYLON.MeshBuilder.CreateGround('ground', {
	// 	width: 10,
	// 	height: 10,
	// });

	// const groundFromHM = BABYLON.MeshBuilder.CreateGroundFromHeightMap('ground', '/snowdon.png', {
	// 	width: 10,
	// 	height: 10,
	// 	subdivisions: 50
	// });

	// groundFromHM.material = new BABYLON.StandardMaterial();
	// groundFromHM.material.wireframe = true;

	// const fontData = await (await fetch('/Poppins_Regular.json')).json();
	// const text = BABYLON.MeshBuilder.CreateText('text', 'Hello World !', fontData, {
	// 	size: 2,
	// 	depth: 0.2,
	// 	resolution: 16,
	// });

	const wheelchair = await BABYLON.SceneLoader.ImportMeshAsync("", "./meshes/", "wheelchair_json.glb", scene);

	wheelchair.meshes[0].position = new BABYLON.Vector3(0.5, -1, 0);


	return scene;
}

const scene = await createScene();

engine.runRenderLoop(function () {
	scene.render();
});

window.addEventListener('resize', function () {
	engine.resize();
});
