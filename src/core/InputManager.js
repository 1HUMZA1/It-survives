// Player Keyboard & Mouse Input Manager
export class InputManager {
  constructor(domElement = document.body) {
    this.domElement = domElement;

    this.keys = {
      forward: false,
      backward: false,
      left: false,
      right: false,
      jump: false,
      sprint: false,
      interact: false,
      inventory: false,
      build: false,
      slot1: false,
      slot2: false,
      slot3: false,
      slot4: false,
      slot5: false,
      slot6: false
    };

    this.mouse = {
      leftDown: false,
      rightDown: false,
      leftClicked: false,
      rightClicked: false,
      dx: 0,
      dy: 0,
      wheel: 0
    };

    this.isPointerLocked = false;
    this.sensitivity = 0.0022;
    this.invertY = false;

    this.onLockChange = null;
    this.onInteractPress = null;
    this.onInventoryToggle = null;
    this.onBuildToggle = null;
    this.onRotatePress = null;
    this.onSlotSelect = null;
    this.onPauseToggle = null;

    this.setupListeners();
  }

  setupListeners() {
    window.addEventListener('keydown', (e) => this.handleKeyDown(e));
    window.addEventListener('keyup', (e) => this.handleKeyUp(e));

    window.addEventListener('mousedown', (e) => this.handleMouseDown(e));
    window.addEventListener('mouseup', (e) => this.handleMouseUp(e));
    window.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    window.addEventListener('wheel', (e) => this.handleWheel(e), { passive: true });

    document.addEventListener('pointerlockchange', () => {
      this.isPointerLocked = document.pointerLockElement === this.domElement;
      if (this.onLockChange) this.onLockChange(this.isPointerLocked);
    });
  }

  requestLock() {
    if (this.domElement && !this.isPointerLocked) {
      try {
        this.domElement.requestPointerLock();
      } catch (err) {
        console.warn('Pointer lock request error:', err);
      }
    }
  }

  exitLock() {
    if (document.pointerLockElement) {
      document.exitPointerLock();
    }
  }

  handleKeyDown(e) {
    if (e.repeat) return;

    switch (e.code) {
      case 'KeyW':
      case 'ArrowUp':
        this.keys.forward = true;
        break;
      case 'KeyS':
      case 'ArrowDown':
        this.keys.backward = true;
        break;
      case 'KeyA':
      case 'ArrowLeft':
        this.keys.left = true;
        break;
      case 'KeyD':
      case 'ArrowRight':
        this.keys.right = true;
        break;
      case 'Space':
        this.keys.jump = true;
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        this.keys.sprint = true;
        break;
      case 'KeyE':
        this.keys.interact = true;
        if (this.onInteractPress) this.onInteractPress();
        break;
      case 'KeyI':
      case 'Tab':
        e.preventDefault();
        this.keys.inventory = true;
        if (this.onInventoryToggle) this.onInventoryToggle();
        break;
      case 'KeyB':
        this.keys.build = true;
        if (this.onBuildToggle) this.onBuildToggle();
        break;
      case 'KeyR':
        if (this.onRotatePress) this.onRotatePress();
        break;
      case 'Digit1':
        if (this.onSlotSelect) this.onSlotSelect(0);
        break;
      case 'Digit2':
        if (this.onSlotSelect) this.onSlotSelect(1);
        break;
      case 'Digit3':
        if (this.onSlotSelect) this.onSlotSelect(2);
        break;
      case 'Digit4':
        if (this.onSlotSelect) this.onSlotSelect(3);
        break;
      case 'Digit5':
        if (this.onSlotSelect) this.onSlotSelect(4);
        break;
      case 'Digit6':
        if (this.onSlotSelect) this.onSlotSelect(5);
        break;
      case 'Digit7':
        if (this.onSlotSelect) this.onSlotSelect(6);
        break;
      case 'Escape':
        if (this.onPauseToggle) this.onPauseToggle();
        break;
    }
  }

  handleKeyUp(e) {
    switch (e.code) {
      case 'KeyW':
      case 'ArrowUp':
        this.keys.forward = false;
        break;
      case 'KeyS':
      case 'ArrowDown':
        this.keys.backward = false;
        break;
      case 'KeyA':
      case 'ArrowLeft':
        this.keys.left = false;
        break;
      case 'KeyD':
      case 'ArrowRight':
        this.keys.right = false;
        break;
      case 'Space':
        this.keys.jump = false;
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        this.keys.sprint = false;
        break;
      case 'KeyE':
        this.keys.interact = false;
        break;
    }
  }

  handleMouseDown(e) {
    if (!this.isPointerLocked) return;
    if (e.button === 0) {
      this.mouse.leftDown = true;
      this.mouse.leftClicked = true;
    } else if (e.button === 2) {
      this.mouse.rightDown = true;
      this.mouse.rightClicked = true;
    }
  }

  handleMouseUp(e) {
    if (e.button === 0) {
      this.mouse.leftDown = false;
    } else if (e.button === 2) {
      this.mouse.rightDown = false;
    }
  }

  handleMouseMove(e) {
    if (!this.isPointerLocked) return;
    this.mouse.dx += e.movementX || 0;
    this.mouse.dy += e.movementY || 0;
  }

  handleWheel(e) {
    if (!this.isPointerLocked) return;
    this.mouse.wheel += Math.sign(e.deltaY);
  }

  // Called at end of frame
  resetDeltas() {
    this.mouse.dx = 0;
    this.mouse.dy = 0;
    this.mouse.wheel = 0;
    this.mouse.leftClicked = false;
    this.mouse.rightClicked = false;
  }
}
