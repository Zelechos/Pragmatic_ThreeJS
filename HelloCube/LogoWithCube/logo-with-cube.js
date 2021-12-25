'use strict'
import * as THREE from '../three.module.js';

const renderCube = () => {

    // traemos a nuestra estiqueta canvas
    const canvas = document.querySelector('#cube');

    // creamos nuetro renderer
    const renderer = new THREE.WebGLRenderer({canvas});

    // damos un repectivo tamaño a nuestro bg
    renderer.setSize(60,60);

    const fov = 750;
    const aspect = 2;
    const near = 0.3;
    const far = 10;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    camera.position.z = 3;

    // creamos nuestro escenario
    const scene = new THREE.Scene();
    

    // creamos una luz
    const color = 0xFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);

    // agregamos la luz a la escena 
    scene.add(light);

    // creamos la geometria
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    // creamos el material que tendra la geometria
    const material = new THREE.MeshToonMaterial({color:0x2e48ff});

    // creamos el cubo
    const cube = new THREE.Mesh(geometry, material);

    // agregamos el cubo a mi escena
    scene.add(cube);

    // renderizamos la escene y la camara
    renderer.render(scene, camera);

    const renderMove = (time) => {
        time *= 0.001;//convertimos en segundos
    
        cube.rotation.x = time;
        cube.rotation.y = time;
    
        renderer.render(scene, camera);
    
        requestAnimationFrame(renderMove);
    }

    requestAnimationFrame(renderMove);
    
}

renderCube();
