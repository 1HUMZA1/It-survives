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
    this.onCameraToggle = null;

    this.setupListeners();
  }

  setupListeners() {
    window.addEventListener('keydown', (e) => this.handleKeyDown(e));
    window.addEventListener('keyup', (e) => this.handleKeyUp(e));

    window.addEventListener('mousedown', (e) => this.handleMouseDown(e));
    window.addEventListener('mouseup', (e) => this.handleMouseUp(e));
    window.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    window.addEventListener('wheel', (e) => this.handleWheel(e), { passive: true });

    if (this.domElement) {
      this.domElement.addEventListener('click', () => {
        if (!this.isPointerLocked) {
          this.requestLock();
        }
      });
    }

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
    const code = e.code;
    const key = (e.key || '').toLowerCase();

    if (code === 'KeyW' || key === 'w' || code === 'ArrowUp') {
      this.keys.forward = true;
    } else if (code === 'KeyS' || key === 's' || code === 'ArrowDown') {
      this.keys.backward = true;
    } else if (code === 'KeyA' || key === 'a' || code === 'ArrowLeft') {
      this.keys.left = true;
    } else if (code === 'KeyD' || key === 'd' || code === 'ArrowRight') {
      this.keys.right = true;
    } else if (code === 'Space' || key === ' ') {
      this.keys.jump = true;
    } else if (code === 'ShiftLeft' || code === 'ShiftRight' || key === 'shift') {
      this.keys.sprint = true;
    } else if (code === 'KeyE' || key === 'e') {
      this.keys.interact = true;
      if (this.onInteractPress) this.onInteractPress();
    } else if (code === 'KeyI' || key === 'i' || code === 'Tab' || key === 'tab') {
      e.preventDefault();
      this.keys.inventory = true;
      if (this.onInventoryToggle) this.onInventoryToggle();
    } else if (code === 'KeyB' || key === 'b') {
      this.keys.build = true;
      if (this.onBuildToggle) this.onBuildToggle();
    } else if (code === 'KeyC' || key === 'c') {
      if (this.onCameraToggle) this.onCameraToggle();
    } else if (code === 'KeyR' || key === 'r') {
      if (this.onRotatePress) this.onRotatePress();
    } else if (code === 'Digit1' || key === '1') {
      if (this.onSlotSelect) this.onSlotSelect(0);
    } else if (code === 'Digit2' || key === '2') {
      if (this.onSlotSelect) this.onSlotSelect(1);
    } else if (code === 'Digit3' || key === '3') {
      if (this.onSlotSelect) this.onSlotSelect(2);
    } else if (code === 'Digit4' || key === '4') {
      if (this.onSlotSelect) this.onSlotSelect(3);
    } else if (code === 'Digit5' || key === '5') {
      if (this.onSlotSelect) this.onSlotSelect(4);
    } else if (code === 'Digit6' || key === '6') {
      if (this.onSlotSelect) this.onSlotSelect(5);
    } else if (code === 'Digit7' || key === '7') {
      if (this.onSlotSelect) this.onSlotSelect(6);
    } else if (code === 'Escape' || key === 'escape') {
      if (this.onPauseToggle) this.onPauseToggle();
    }
  }

  handleKeyUp(e) {
    const code = e.code;
    const key = (e.key || '').toLowerCase();

    if (code === 'KeyW' || key === 'w' || code === 'ArrowUp') {
      this.keys.forward = false;
    } else if (code === 'KeyS' || key === 's' || code === 'ArrowDown') {
      this.keys.backward = false;
    } else if (code === 'KeyA' || key === 'a' || code === 'ArrowLeft') {
      this.keys.left = false;
    } else if (code === 'KeyD' || key === 'd' || code === 'ArrowRight') {
      this.keys.right = false;
    } else if (code === 'Space' || key === ' ') {
      this.keys.jump = false;
    } else if (code === 'ShiftLeft' || code === 'ShiftRight' || key === 'shift') {
      this.keys.sprint = false;
    } else if (code === 'KeyE' || key === 'e') {
      this.keys.interact = false;
    }
  }

  handleMouseDown(e) {
    if (!this.isPointerLocked) {
      this.requestLock();
      return;
    }
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
