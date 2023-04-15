import React, { useRef, useEffect } from 'react';
import { TweenMax, Power2 } from 'gsap';
import * as THREE from 'three';



const TestDiamonds = () => {

    const containerRef = useRef(null);


    useEffect(() => {
        // Set up Three.js scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xff0000); // Set background color to red
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight * 0.5); // Use container element size
        containerRef.current.appendChild(renderer.domElement);
    
        // Add point light
        const light = new THREE.PointLight(0xffffff, 1);
        light.position.set(0, 0, 100);
        scene.add(light);
    
        // Create grid of balls
        const rows = 6;
        const cols = 10;
        const balls = [];
    
        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            const geometry = new THREE.SphereGeometry(1, 32, 32);
            const material = new THREE.MeshBasicMaterial({ color: 0xffffff }); // Set color to white
            const ball = new THREE.Mesh(geometry, material);
    
            ball.position.set(j * 5 - 22.5, i * 5 - 12.5, 0);
            scene.add(ball);
            balls.push(ball);
          }
        }
    
        // Clean up
        return () => {
          containerRef.current.removeChild(renderer.domElement);
        };
      }, []);


    return (
        
            <div ref={containerRef} id="Animation3DBoxWrapper" style={{ width: '100%', height: '50vh', position: "relative", zIndex: "20" }}/>
        
    )
}

export default TestDiamonds;