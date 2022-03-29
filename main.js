import './style.css'

import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';





const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.5, 100 );
camera.position.setZ(60)
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg')
});

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(window.innerWidth, window.innerHeight);


renderer.render(scene, camera);


const funTexture = new THREE.TextureLoader().load('moon.jpg')
const geometry = new THREE.SphereGeometry(12, 12, 12 );

const material = new THREE.MeshLambertMaterial({ map: funTexture, side: THREE.DoubleSide });

// or use custom shaders


const ring = new THREE.Mesh(geometry, material);


ring.position.set(18, 2, 1)
scene.add(ring);


const pointLight = new THREE.PointLight('#fff');
pointLight.position.set(30,20,1);
const ambiantLight = new THREE.AmbientLight('#F2EBDC')
// scene.add(pointLight);
scene.add(ambiantLight)

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;
controls.enableDamping =true;

// function addStar(){
//     const geometry = new THREE.SphereGeometry(.2, .2, 20);
//     const material = new THREE.MeshStandardMaterial({color: 'white'})

//     const star = new THREE.Mesh(geometry, material);

//     const [x,y,z] = Array(3).fill().map(() => 
//         THREE.MathUtils.randFloatSpread(50)
    
//     );
//     star.position.set(x,y,z);
//     scene.add(star)
// }

// Array(2000).fill().forEach(addStar);


const spaceTexture = new THREE.TextureLoader().load('star2.jpg');
scene.background = spaceTexture;

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    ring.rotation.x += .00001;
    ring.rotation.y += .0004;
    ring.rotation.z += .00001;
 
    controls.update();
}
animate()
