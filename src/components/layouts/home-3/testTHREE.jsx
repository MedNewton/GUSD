import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Input } from 'semantic-ui-react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import DiamondModel from "../../../assets/diamond.glb"


const GridWithCones = () => {
  const containerRef = useRef(null);
  const lightRef = useRef(null);
  const conesRef = useRef([]);

  useEffect(() => {
    // Set up Three.js scene
    const scene = new THREE.Scene();

    const loader = new GLTFLoader();

    // Set up camera
    const camera = new THREE.PerspectiveCamera(18, window.innerWidth / (window.innerHeight * 0.5), 0.1, 1000);
    camera.position.set(0, 0, 130); // Update camera position

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight * 0.5);
    containerRef.current.appendChild(renderer.domElement);

    // Set up light
    const light = new THREE.SpotLight(0xffffff, 1, 0, Math.PI / 4, 0.5);
    light.castShadow = true;
    light.shadow.mapSize.width = 1024; // Increase shadow map size
    light.shadow.mapSize.height = 1024;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 200

    light.position.set(0, 0, 15); // Update light position
    lightRef.current = light;

    const aLight = new THREE.AmbientLight(0xffffff, 0.3)

    scene.add(aLight)
    scene.add(light);

    // Create grid of cones
    const rows = 10;
    const coneSize = 2;
    const coneSpacing = 3;
    const cols = window.innerWidth / (coneSize + coneSpacing);



    const totalWidth = (cols - 1) * (coneSize + coneSpacing);
    const totalHeight = (rows - 1) * (coneSize + coneSpacing);
    const cones = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const geometry = new THREE.ConeGeometry(coneSize, coneSize, 4, 1, true); // Pass true as the last parameter to create pointed cones

        let diamond;
        loader.load(DiamondModel, (gltf) => {
          diamond = gltf.scene;
          diamond.scale.set(0.1, 0.1, 0.1);
          scene.add(diamond);
        });
        // Create color attribute for the geometry
        const colors = [
          new THREE.Color().setHSL(0.3, 1, 0.3 + (j / cols) * 0.4), // Front face
          new THREE.Color().setHSL(0.3, 1, 0.3 + (i / rows) * 0.4), // Back face
          new THREE.Color().setHSL(0.3, 1, 0.3 + (1 - j / cols) * 0.4), // Left face
          new THREE.Color().setHSL(0.3, 1, 0.3 + (1 - i / rows) * 0.4), // Right face
        ];

        const colorAttribute = new THREE.Float32BufferAttribute(colors.flatMap(color => color.toArray()), 3);
        geometry.setAttribute('color', colorAttribute);

        const material = new THREE.MeshStandardMaterial({ vertexColors: true });

        const cone = new THREE.Mesh(geometry, material);




        cone.rotation.x = Math.PI;

        const offsetX = -totalWidth / 2 + j * (coneSize + coneSpacing);
        const offsetY = -totalHeight / 2 + i * (coneSize + coneSpacing);

        cone.position.set(offsetX, offsetY, 0); // Update cone position
        scene.add(cone);
        conesRef.current.push(cone);
      }
    }

    // Create ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambientLight);

    const animate = () => {

      // Update light position
      const time = Date.now() * 0.001;
      const radius = 30;
      const posX = (Math.cos(time) * radius);
      const posY = (Math.sin(time) * radius);
      lightRef.current.position.set(posX, posY, 0);

      // Render scene with camera
      renderer.render(scene, camera);

      // Call animate function again on the next frame
      requestAnimationFrame(animate);
    };

    // Start the animation loop
    animate();

    const animateCones = () => {
      const time = Date.now() * 0.001 / 2; // Get current time

      // Loop through all cones in conesRef array
      conesRef.current.forEach(cone => {
        // Calculate distance between cone and point light
        const distance = cone.position.distanceTo(lightRef.current.position);

        // Calculate rotation angle based on distance
        const rotationAngle = distance * 0.02;

        // Update cone rotation based on rotation angle and position of point light
        cone.rotation.x = Math.sin(time + cone.position.x * 0.01) * rotationAngle;
        //cone.rotation.y = Math.cos(time + cone.position.y * 0.01) * rotationAngle;
      });

      // Request next frame for animation
      requestAnimationFrame(animateCones);
    };

    animateCones()


    // Clean up
    return () => {
      //containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section style={{ width: '100%', height: '50vh', position: "relative", zIndex: "20" }}>
      <div className="newsLetter row">
        <div className="col-6 glassBox">
          <h5 className="newsLetterSmallTitle">STAY UP TO DATE</h5>
          <h5 className='newLetterTitle'>Get our newsletter</h5>
          <Input
            icon={{ name: 'search', circular: true, link: true }}
            placeholder='Enter you email'
            className='newsLetterInput'
          />
        </div>
      </div>
      <div ref={containerRef} id="THREEJSANIM" style={{ width: '100%', height: '100%' }} />
    </section>
  );
};

export default GridWithCones;
