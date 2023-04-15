import React from 'react';
import { useEffect } from 'react';
import { TweenMax } from 'gsap/gsap-core';
import * as THREE from 'three';

var RoundedBoxGeometry = require('three-rounded-box')(THREE);

const radians = (degrees) => {
    return degrees * Math.PI / 180;
}

const distance = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
}

const map = (value, start1, stop1, start2, stop2) => {
    return (value - start1) / (stop1 - start1) * (stop2 - start2) + start2
}

class Box {
    constructor() {
        this.geom = new RoundedBoxGeometry(.5, .5, .5, .02, .2);
        this.rotationX = 0;
        this.rotationY = 0;
        this.rotationZ = 0;
    }
}

class Cone {
    constructor() {
        this.geom = new THREE.ConeGeometry(.3, .5, 32);
        this.rotationX = 0;
        this.rotationY = 0;
        this.rotationZ = radians(-180)
    }
}

class Repulsion{
    
    setup() {
        // handles mouse coordinates mapping from 2D canvas to 3D world
        this.raycaster = new THREE.Raycaster;

        this.gutter = { size: 1 };
        this.meshes = [];
        this.grid = { cols: 14, rows: 6 };
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.mouse3D = new THREE.Vector2();
        this.geometries = [
            new Box(),
            new Cone()
        ];

        document.getElementById('3dBoxWrapper').addEventListener('mousemove', this.onMouseMove.bind(this), { passive: true });

        // we call this to simulate the initial position of the mouse cursor
        this.onMouseMove({ clientX: 0, clientY: 0 });
    }

     onMouseMove({ clientX, clientY }) {
        this.mouse3D.x = (clientX / this.width) * 2 - 1;
        this.mouse3D.y = -(clientY / this.height) * 2 + 1;
    }

     createScene() {
        this.scene = new THREE.Scene();
    
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(document.getElementById('3dBoxWrapper').innerWidth, document.getElementById('3dBoxWrapper').innerHeight);
        this.renderer.setPixelRatio(document.getElementById('3dBoxWrapper').devicePixelRatio);
    
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
        document.getElementById('3dBoxWrapper').appendChild(this.renderer.domElement);
      }

      createCamera() {
        this.camera = new THREE.PerspectiveCamera(20, document.getElementById('3dBoxWrapper').innerWidth / document.getElementById('3dBoxWrapper').innerHeight, 1);
    
        // set the distance our camera will have from the grid
        this.camera.position.set(0, 65, 0);
    
        // we rotate our camera so we can get a view from the top
        this.camera.rotation.x = -1.57;
    
        this.scene.add(this.camera);
      }

      getMesh(geometry, material) {
        const mesh = new THREE.Mesh(geometry, material);
    
        mesh.castShadow = true;
        mesh.receiveShadow = true;
    
        return mesh;
      }
    
}

export default Repulsion;