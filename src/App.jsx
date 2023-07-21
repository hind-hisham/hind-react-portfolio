import React from 'react'
import { useEffect } from 'react'
import * as THREE from 'three'

import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Projact from './components/projact/Projact'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

// import starsTexture from './assets/textuers/stars.jpg';
import bgImg from './assets/space.jpg'
import sunTexture from './assets/textuers/sun.jpg';
import mercuryTexture from './assets/textuers/mercury.jpg';
import venusTexture from './assets/textuers/venus.jpg';
import earthTexture from './assets/textuers/earth.jpg';
import marsTexture from './assets/textuers/mars.jpg';
import jupiterTexture from './assets/textuers/jupiter.jpg';
import saturnTexture from './assets/textuers/saturn.jpg';
import saturnRingTexture from './assets/textuers/saturn-ring.png';
import uranusTexture from './assets/textuers/uranus.jpg';
import uranusRingTexture from './assets/textuers/uranus-ring.png';
import plutoTexture from './assets/textuers/pluto.jpg';
import neptuneTexture from './assets/textuers/neptune.jpg';
function App() {
  useEffect(() => {

const textureLoader =new THREE.TextureLoader();

const scene = new THREE.Scene();
const canvas = document.querySelector('#bg');
//backgrund img
const spaceImg = new THREE.TextureLoader().load(bgImg);
scene.background = spaceImg;

/**
 * Sizes
 */
 const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha:true
})
 const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 1000)
camera.position.x = 120//190
camera.position.y =-9  //20
camera.position.z = -12 //40
scene.add(camera)
/**
 * Renderer
 */
 
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

//light
const pointLight =new THREE.PointLight(0xffffff,2,300);
const ambtLight =new THREE.AmbientLight(0x333333)
pointLight.position.z=1
pointLight.position.x=2
scene.add(pointLight,ambtLight);

//planet funtion
function createPlanete(size,texture,position,ring){
    const geo=new THREE.SphereGeometry(size,30,30);
    const mat= new THREE.MeshStandardMaterial({
        map: textureLoader.load(texture)
    });
    const mesh= new THREE.Mesh(geo,mat);
    const obj =new THREE.Object3D();
    obj.add(mesh);
    if(ring){
        const ringGeo=new THREE.RingGeometry(
            ring.innerRadius,
            ring.outerRadius,
            32);
        const ringMat =new THREE.MeshBasicMaterial({
            map: textureLoader.load(ring.texture),
            side:THREE.DoubleSide,
            transparent:true
        });
        const ringMesh =new THREE.Mesh(ringGeo,ringMat);
        obj.add(ringMesh);
        ringMesh.position.x=position;
        ringMesh.rotation.x=14.3;
    }
    scene.add(obj);
    mesh.position.x =position;
    return{mesh,obj}
}

//the star
function addStar(){
    const geometry = new THREE.SphereGeometry(0.15, 10, 10);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(geometry, material);

    const[x,y,z]=Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(700));
    star.position.set(x,y,z)
    scene.add(star)

} 
Array(500).fill().forEach(addStar);

//sun
const sun= new THREE.Mesh(
    new THREE.SphereGeometry(16,32,32),
    new THREE.MeshBasicMaterial({
        map:textureLoader.load(sunTexture)
    })
    );
    scene.add(sun);

const mercury=createPlanete(3.2,mercuryTexture,29);
const venus=createPlanete(5.8,venusTexture,44);
const earth=createPlanete(6,earthTexture,62);
const mars=createPlanete(4,marsTexture,78);
const jupiter=createPlanete(12,jupiterTexture,100);
const saturn=createPlanete(10,saturnTexture,138, {
    innerRadius: 10,
    outerRadius:20,
    texture: saturnRingTexture
});
const uranus=createPlanete(7,uranusTexture,176,{
    innerRadius: 7,
    outerRadius:12,
    texture: uranusRingTexture
});
const neptune =createPlanete(7,neptuneTexture,200);
const pluto=createPlanete(2.8,plutoTexture,216);



//camera movement
function moveCamera(){
const t =document.body.getBoundingClientRect().top;

camera.position.z =-12+t * -0.078;
camera.position.y =t * -0.0000;
camera.position.x =t * -0.0000;
}
document.body.onscroll=moveCamera

function animate() {
    sun.rotateY(.004);
    mercury.mesh.rotateY(.004);
    venus.mesh.rotateY(.002);
    earth.mesh.rotateY(.02);
    mars.mesh.rotateY(.018);
    jupiter.mesh.rotateY(.04);
    saturn.mesh.rotateY(.038);
    uranus.mesh.rotateY(.03);
    neptune.mesh.rotateY(.032);
    pluto.mesh.rotateY(.008);

    mercury.obj.rotateY(.03);
    venus.obj.rotateY(.015);
    earth.obj.rotateY(.01);
    mars.obj.rotateY(.008);
    jupiter.obj.rotateY(.002);
    saturn.obj.rotateY(.009);
    uranus.obj.rotateY(.004);
    neptune.obj.rotateY(.001);
    pluto.obj.rotateY(.005);
    
// Render
     renderer.render(scene, camera)
     // Call tick again on the next frame
     window.requestAnimationFrame(animate)
};

animate();

  })
  return (
    <>
     <canvas id="bg"></canvas>
     <main>
       <Navbar/>
       <Hero/>
       <Projact/>
       <Skills/>
       <Contact/>
       <Footer/>
       </main>
    </>
  )
}

export default App