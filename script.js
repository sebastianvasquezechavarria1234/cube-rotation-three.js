import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js';

console.log("hola")


//scene

const scene = new THREEE.scene();


//camara 
const fev= 70;
const near= 70;
const far= 70;

const camera = new THREE.PerspectiveCamera(fov, aspectRatio, near, far);

//renderer

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);