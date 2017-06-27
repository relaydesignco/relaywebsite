import BoxObject from './BoxObject.js'


export default class Brick extends BoxObject {
  constructor (x, y, width, height, pixelRatio, color, context, canvas) {
    super(x, y, width, height, pixelRatio, color, context, canvas);
    this.box.pos.y = 0;
    this.finalY = y;
    this.visible = true;
  }

  update () {
    if (this.box.pos.y < this.finalY) {
      const diff = this.finalY - this.box.pos.y;
      this.box.pos.y += Math.max(diff * 0.05, 1);
    }
  }

  draw () {
    this.update();

    if (!this.visible) {
      return;
    }
    super.draw();
  }

  collide () {
    this.visible = false;
  }

}

