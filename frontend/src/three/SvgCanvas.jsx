import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';

const SvgCanvas = () => {
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
    
    // SVG Loader
    const loader = new SVGLoader();
    
    // Group for storing all SVG meshes
    const svgGroup = new THREE.Group();
    
    // Use stronger, more vibrant colors for better visibility
    const colors = [
      new THREE.MeshBasicMaterial({
        color: 0x4299e1, // Vibrant blue
        transparent: true,
        opacity: 0.9,
        side: THREE.DoubleSide,
        depthWrite: false
      }),
      new THREE.MeshBasicMaterial({
        color: 0xed8936, // Vibrant orange
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide,
        depthWrite: false
      })
    ];
    
    // Load the SVG file
    loader.load('/logo.svg', 
      // Success callback
      function(data) {
        console.log('SVG loaded successfully', data);
        
        // Parse the SVG paths
        const paths = data.paths;
        
        // Process each path from the SVG
        paths.forEach((path, index) => {
          // Alternate colors for visual interest
          const material = colors[index % colors.length];
          
          const shapes = path.toShapes(true);
          
          shapes.forEach((shape) => {
            // Create geometry from the shape
            const geometry = new THREE.ShapeGeometry(shape);
            
            // Create mesh
            const mesh = new THREE.Mesh(geometry, material);
            
            // Add a subtle random rotation to each shape for 3D effect
            mesh.rotation.x = Math.random() * 0.2 - 0.1;
            mesh.rotation.y = Math.random() * 0.2 - 0.1;
            
            // Add to the group
            svgGroup.add(mesh);
          });
        });
        
        // Center the SVG
        const box = new THREE.Box3().setFromObject(svgGroup);
        const center = box.getCenter(new THREE.Vector3());
        svgGroup.position.sub(center);
        
        // Scale the SVG
        svgGroup.scale.multiplyScalar(0.5); // Even larger scale
        
        // Position it behind other content but still visible
        svgGroup.position.z = -1;
        
        // Add ambient light to improve visibility
        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight);
        
        // Add the SVG group to the scene
        scene.add(svgGroup);
      },
      // Progress callback
      function(xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      // Error callback
      function(error) {
        console.error('An error happened while loading the SVG:', error);
      }
    );
    
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
      
      // Animate SVG if it exists
      if (svgGroup) {
        // Rotate slowly
        svgGroup.rotation.x += 0.001;
        svgGroup.rotation.y += 0.002;
        
        // Apply floating animation
        svgGroup.position.y = Math.sin(Date.now() * 0.001) * 0.5;
        
        // Follow mouse slightly for interactive feel
        svgGroup.rotation.x += mouse.y * 0.0005;
        svgGroup.rotation.y += mouse.x * 0.0005;
      }
      
      // Render the scene
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
      colors.forEach(material => material.dispose());
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
        pointerEvents: 'none',
        zIndex: 3 // Make sure it's between background and content
      }} 
    />
  );
};

export default SvgCanvas; 