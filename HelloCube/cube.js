'use strict';
import * as THREE from './three.module.js';

const main = () => {

    // traemos nuestra etiqueta canvas
    const canvas = document.querySelector('#cube');

    // creamos nuestro render
    const renderer = new THREE.WebGLRenderer({canvas});
    
    // damos un tamaño al background donde estara nuestro cuerpo
    renderer.setSize(window.innerWidth, window.innerHeight);
    // renderer.setSize(400,200);

    // creamos nuestra camara
    const fov = 75;
    const aspect = 2; //lienzo predeterminado
    const near = 0.1;
    const far = 5;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 4;

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
    
    
    // creamos la animacion de movimiento en base al tiempo
    const renderMove = (time) => {
        time *= 0.001;//convertimos en segundos
    
        cube.rotation.x = time;
        cube.rotation.y = time;
    
        renderer.render(scene, camera);
    
        requestAnimationFrame(renderMove);
    }

    // Movimiento del cubo usando el mouse
    const mouseMove = () => {
        canvas.addEventListener('mousemove', (event)=>{
            console.log(event.offsetX / 100);
            console.warn(event.offsetY /100);

            
            camera.position.x = event.offsetX / 700;
            camera.position.y = event.offsetY / 700;

            renderer.render(scene, camera);
        });
    }

    // Acercamos hacia la camara el cubo cuando damos click
    const click = () => {
        canvas.addEventListener('click', ()=>{

            (camera.position.z === 4)
            ? camera.position.z = 2
            : camera.position.z = 4;
            
            renderer.render(scene, camera);
        });
    }
    
    requestAnimationFrame(click);
    requestAnimationFrame(mouseMove);
    requestAnimationFrame(renderMove);
}

main();