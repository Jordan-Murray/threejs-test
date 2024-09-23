import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { randInt } from 'three/src/math/MathUtils.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); //1000 is the far clipping plane aka render distance

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.SphereGeometry( 1, 64, 64 );
const material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

camera.position.z = 5;

const ambientLight = new THREE.AmbientLight( 0x404040, 1 ); // soft white light
const pointLight = new THREE.PointLight( 0xffffff, 200, 100 ); //intensity has to be more than ambient light to create any shadow
scene.add( ambientLight );
scene.add( pointLight );

pointLight.position.set( 0, 10, 10 );

const controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;
controls.autoRotate = true;
controls.autoRotateSpeed = 5;


function animate() {
  controls.update();
	renderer.render( scene, camera );
}

renderer.setAnimationLoop( animate );