import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function WorldMap() {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ antialias: true });

            renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
            containerRef.current.appendChild(renderer.domElement);

            const geometry = new THREE.SphereGeometry(5, 64, 64);
            const texture = new THREE.TextureLoader().load('/placeholder.svg?height=1024&width=2048');
            const material = new THREE.MeshPhongMaterial({ map: texture });
            const globe = new THREE.Mesh(geometry, material);
            scene.add(globe);

            const light = new THREE.PointLight(0xffffff, 1, 100);
            light.position.set(10, 10, 10);
            scene.add(light);

            camera.position.z = 10;

            const controls = new OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.dampingFactor = 0.25;
            controls.enableZoom = true;

            const animate = () => {
                requestAnimationFrame(animate);
                controls.update();
                renderer.render(scene, camera);
            };
            animate();

            return () => {
                renderer.dispose();
                if (containerRef.current) {
                    containerRef.current.removeChild(renderer.domElement);
                }
            };
        }
    }, []);

    return (
        <div className="bg-white text-black rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Interactive World Map</h2>
            <div ref={containerRef} style={{ width: '100%', height: '600px' }}></div>
        </div>
    );
}

export default WorldMap;