'use strict';
import * as THREE from './three.module.js';

function main(){
    // traemos nuestra etiqueta canvas
    const canvas = document.querySelector('#cube');

    // creamos nuestro render
    const renderer = new THREE.WebGLRenderer({canvas});
    renderer.setSize(window.innerWidth, window.innerHeight);

    // creamos nuestra camara
    const fov = 75;
    const aspect = 2; //lienzo predeterminado
    const near = 0.1;
    const far = 5;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 2;

    // creamos nuestra escena
    const scene = new THREE.Scene();

    // creamos una luz
    const color = 0xFFFFFF;
    const intensity =  1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    
    // agregamos mi luz a la escena
    scene.add(light);

    // creamos nuestra geometria (el cuerpo en 3D que queremos mostrar)
    const boxWidth = 1;    
    const boxHeight = 1;    
    const boxDepth = 1;    
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    // creamos el material que tendra nuestra geometria
    // const material = new THREE.MeshBasicMaterial({color: 0x2E48FF})
    const material = new THREE.MeshToonMaterial({color: 0x2E48FF});

    // creamos mi cubo !!!
    const cube = new THREE.Mesh(geometry, material);

    // agregamos mi cubo a la escena
    scene.add(cube);
    
    // rederizamos la escena y la camara
    renderer.render(scene, camera);
    
    
    // creamos la animacion demovimiento en base al tiempo
    function render(time){
        time *= 0.001;//convertimos en segundos
    
        cube.rotation.x = time;
        cube.rotation.y = time;
    
        renderer.render(scene, camera);
    
        requestAnimationFrame(render);
    
    }
    requestAnimationFrame(render);
}

main();
