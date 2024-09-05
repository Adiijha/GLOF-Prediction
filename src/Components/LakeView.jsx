import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function LakeView() {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ antialias: true });

            renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
            containerRef.current.appendChild(renderer.domElement);

            const lakeGeometry = new THREE.PlaneGeometry(10, 10, 50, 50);
            const lakeMaterial = new THREE.MeshPhongMaterial({ color: 0x0077be, shininess: 100 });
            const lake = new THREE.Mesh(lakeGeometry, lakeMaterial);
            lake.rotation.x = -Math.PI / 2;
            scene.add(lake);

            const mountainGeometry = new THREE.ConeGeometry(2, 4, 32);
            const mountainMaterial = new THREE.MeshPhongMaterial({ color: 0x8b4513 });
            const mountain1 = new THREE.Mesh(mountainGeometry, mountainMaterial);
            mountain1.position.set(-3, 2, -3);
            scene.add(mountain1);

            const mountain2 = new THREE.Mesh(mountainGeometry, mountainMaterial);
            mountain2.position.set(3, 2, -3);
            scene.add(mountain2);

            const light = new THREE.PointLight(0xffffff, 1, 100);
            light.position.set(0, 10, 10);
            scene.add(light);

            camera.position.set(0, 5, 10);
            camera.lookAt(0, 0, 0);

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
            <h2 className="text-2xl font-bold mb-4">3D Glacier Lake View</h2>
            <div ref={containerRef} style={{ width: '100%', height: '600px' }}></div>
        </div>
    );
}

export default LakeView;