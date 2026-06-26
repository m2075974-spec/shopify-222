import * as THREE from 'https://cdn.jsdelivr.net/npm/three@r128/build/three.module.js';

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
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 1.5, 4);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    
    const canvas = document.getElementById('canvas');
    if (canvas) {
      canvas.parentNode.replaceChild(this.renderer.domElement, canvas);
    } else {
      document.body.appendChild(this.renderer.domElement);
    }

    this.setupLighting();
    this.createParticles();

    window.addEventListener('resize', () => this.onWindowResize());
    window.addEventListener('scroll', () => this.onScroll());
    window.addEventListener('mousemove', (e) => this.onMouseMove(e));

    this.animate();
  }

  setupLighting() {
    const directional = new THREE.DirectionalLight(0xffffff, 3);
    directional.position.set(5, 10, 7.5);
    this.scene.add(directional);

    const ambient = new THREE.AmbientLight(0xffffff, 1.2);
    this.scene.add(ambient);

    const point = new THREE.PointLight(0xff6b9d, 1.5);
    point.position.set(-5, 3, 5);
    this.scene.add(point);
  }

  createParticles() {
    const particleCount = window.themeSettings?.particleCount || 500;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

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

  animate() {
    requestAnimationFrame(() => this.animate());

    if (this.model) {
      this.model.rotation.y += 0.001;
    }

    if (this.camera) {
      this.camera.position.z = 4 - this.scrollProgress * 2;
    }

    this.renderer.render(this.scene, this.camera);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new PremiumScene();
  });
} else {
  new PremiumScene();
}
