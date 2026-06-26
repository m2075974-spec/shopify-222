// Premium 3D Scene - Three.js Implementation

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@r128/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@r128/examples/jsm/loaders/GLTFLoader.js';

class PremiumScene {
  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#050505');
    this.camera = null;
    this.renderer = null;
    this.model = null;
    this.particleSystem = null;
    this.scrollProgress = 0;
    
    this.init();
  }

  init() {
    // Camera Setup
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 1.5, 4);

    // Renderer Setup
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1;
    
    const canvas = document.getElementById('canvas');
    if (canvas) {
      canvas.parentNode.replaceChild(this.renderer.domElement, canvas);
    } else {
      document.body.appendChild(this.renderer.domElement);
    }

    // Lighting
    this.setupLighting();

    // Load Model
    this.loadModel();

    // Create Particles
    this.createParticles();

    // Event Listeners
    window.addEventListener('resize', () => this.onWindowResize());
    window.addEventListener('scroll', () => this.onScroll());
    window.addEventListener('mousemove', (e) => this.onMouseMove(e));

    // Start Animation Loop
    this.animate();
  }

  setupLighting() {
    // Directional Light
    const directional = new THREE.DirectionalLight(0xffffff, 3);
    directional.position.set(5, 10, 7.5);
    directional.castShadow = true;
    directional.shadow.mapSize.width = 2048;
    directional.shadow.mapSize.height = 2048;
    this.scene.add(directional);

    // Ambient Light
    const ambient = new THREE.AmbientLight(0xffffff, 1.2);
    this.scene.add(ambient);

    // Point Light (accent)
    const point = new THREE.PointLight(0xff6b9d, 1.5);
    point.position.set(-5, 3, 5);
    this.scene.add(point);
  }

  loadModel() {
    const loader = new GLTFLoader();
    loader.load(
      '/cdn/shop/t/assets/hero.glb',
      (gltf) => {
        this.model = gltf.scene;
        this.model.scale.set(2, 2, 2);
        this.scene.add(this.model);

        // Hide loading screen
        const loadingScreen = document.querySelector('.loading-screen');
        if (loadingScreen) {
          loadingScreen.style.animation = 'fadeOut 0.8s ease-out forwards';
        }
      },
      undefined,
      (error) => {
        console.error('Model loading error:', error);
      }
    );
  }

  createParticles() {
    const particleCount = 500;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      velocities[i * 3] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
      transparent: true,
      opacity: 0.5
    });

    this.particleSystem = new THREE.Points(geometry, material);
    this.scene.add(this.particleSystem);
  }

  onWindowResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  onScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress = scrollTop / docHeight;
  }

  onMouseMove(event) {
    if (!this.model) return;
    
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;

    this.model.rotation.y += (x - this.model.rotation.y) * 0.05;
    this.model.rotation.x += (y - this.model.rotation.x) * 0.05;
  }

  updateParticles() {
    if (!this.particleSystem) return;

    const positions = this.particleSystem.geometry.attributes.position.array;
    const velocities = this.particleSystem.geometry.attributes.velocity.array;

    for (let i = 0; i < positions.length; i += 3) {
      positions[i] += velocities[i];
      positions[i + 1] += velocities[i + 1];
      positions[i + 2] += velocities[i + 2];
    }

    this.particleSystem.geometry.attributes.position.needsUpdate = true;
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    // Auto-rotate model
    if (this.model) {
      this.model.rotation.y += 0.001;
    }

    // Update particles
    this.updateParticles();

    // Apply scroll-based camera zoom
    if (this.camera) {
      this.camera.position.z = 4 - this.scrollProgress * 2;
    }

    this.renderer.render(this.scene, this.camera);
  }
}

// Initialize on DOM Ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new PremiumScene();
  });
} else {
  new PremiumScene();
}
