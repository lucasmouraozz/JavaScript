// Operador Spread
const objs1 = window.document.getElementsByTagName('div')
const objs2 = [...window.document.getElementsByTagName('div')]

objs2.forEach(element => {
  element.innerHTML = 'Lucas'
});

console.log(objs1)
console.log(objs2)


import * as THREE from 'three';
import { BaseScene } from './BaseScene.js';

const MAX_PARTICLES = 5000;
const isEnabled = true;
const config = null;

export class ScrollProxy {
  constructor(renderer, camera) {
    this.renderer = renderer;
    this.camera = camera;
    this.scrollProxy = { scrollTop: 0, scrollHeight: 0 };
    this.isInitialized = false;
  }

  async init() {
    if (!this.scrollProxy) {
      this.scrollProxy = { scrollTop: 0, scrollHeight: 0 };
    }

    this.setupScrollTrigger();
    this.isInitialized = true;
  }

  setupScrollTrigger() {
    window.addEventListener('scroll', () => this.onScroll(), { passive: true });
  }

  onScroll() {
    this.scrollY = window.scrollY || window.pageYOffset;
  }

  update() {
    if (this.isInitialized) {
      this.lastScrollY += (this.scrollY - this.lastScrollY) * this.ease;
    }
  }

  getRatio(a, b) {
    return a / b > 1 ? 1 : a / b;
  }

  /* Testa números, regex e template strings */
  formatLabel(name, count = 0) {
    const pattern = /^[a-z0-9_-]+$/i;
    return ${name}: ${count.toFixed(2)}px;
  }
}

export default ScrollProxy;

