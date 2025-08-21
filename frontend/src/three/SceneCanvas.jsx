import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const SceneCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Create scene
    const scene = new THREE.Scene();
    
    // Get dimensions
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 15;
    
    // Renderer setup with explicit dimensions
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // Transparent background
    
    // Make sure the mountRef exists before appending
    if (mountRef.current) {
      // Clear any existing canvas first
      while (mountRef.current.firstChild) {
        mountRef.current.removeChild(mountRef.current.firstChild);
      }
      mountRef.current.appendChild(renderer.domElement);
    }
    
    // Create a circular texture for particles
    const particleTexture = new THREE.CanvasTexture(
      (() => {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const context = canvas.getContext('2d');
        
        // Draw a white circle
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = canvas.width / 2;
        
        context.beginPath();
        context.arc(centerX, centerY, radius - 2, 0, 2 * Math.PI, false);
        context.fillStyle = 'white';
        context.fill();
        
        return canvas;
      })()
    );
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 3000;
    
    const posArray = new Float32Array(particlesCount * 3);
    
    // Fill positions array with random coordinates
    for (let i = 0; i < particlesCount * 3; i += 3) {
      // X coordinate
      posArray[i] = (Math.random() - 0.5) * 60;
      // Y coordinate
      posArray[i + 1] = (Math.random() - 0.5) * 60;
      // Z coordinate - add variation in depth
      posArray[i + 2] = (Math.random() - 0.5) * 30;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // Create multi-colored particles with updated colors for bluish-black theme
    const colorArray = new Float32Array(particlesCount * 3);
    const colors = [
      new THREE.Color(0x0077ff), // Bright blue
      new THREE.Color(0x3498db), // Medium blue
      new THREE.Color(0x4fc3f7), // Light blue
      new THREE.Color(0xff7e00), // Orange
      new THREE.Color(0xff9e00)  // Light orange
    ];
    
    for (let i = 0; i < particlesCount; i++) {
      // Make blue colors more common than orange (75% blue, 25% orange)
      const colorIndex = Math.random() < 0.75 ? 
        Math.floor(Math.random() * 3) : // Blue variants (indexes 0-2)
        Math.floor(Math.random() * 2) + 3; // Orange variants (indexes 3-4)
      
      const color = colors[colorIndex];
      colorArray[i * 3] = color.r;
      colorArray[i * 3 + 1] = color.g;
      colorArray[i * 3 + 2] = color.b;
    }
    
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
    
    // Create particle material with circular texture
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.2,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      map: particleTexture,
      alphaTest: 0.01 // Helps with rendering transparency correctly
    });
    
    // Create point particles
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Mouse interaction
    const mouse = {
      x: 0,
      y: 0
    };
    
    const onMouseMove = (event) => {
      mouse.x = (event.clientX / width) * 2 - 1;
      mouse.y = -(event.clientY / height) * 2 + 1;
    };
    
    window.addEventListener('mousemove', onMouseMove);
    
    // Handle window resize
    const onWindowResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      
      renderer.setSize(newWidth, newHeight);
    };
    
    window.addEventListener('resize', onWindowResize);
    
    // Animation loop
    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      
      // Rotate particles slowly
      particlesMesh.rotation.x += 0.0003;
      particlesMesh.rotation.y += 0.0003;
      
      // Create slight movement based on mouse position
      particlesMesh.rotation.x += mouse.y * 0.0005;
      particlesMesh.rotation.y += mouse.x * 0.0005;
      
      renderer.render(scene, camera);
      
      return animationId;
    };
    
    const animationId = animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationId);
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose resources
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, []);
  
  return (
    <div 
      ref={mountRef} 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%',
        pointerEvents: 'none' 
      }} 
    />
  );
};

export default SceneCanvas;