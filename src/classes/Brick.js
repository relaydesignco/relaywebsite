import BoxObject from './BoxObject.js'


export default class Brick extends BoxObject {
  constructor (x, y, width, height, pixelRatio, color, context, canvas) {
    super(x, y, width, height, pixelRatio, color, context, canvas);
    this.visible = true;
  }

  draw () {
    if (!this.visible) {
      return;
    }
    super.draw();
  }

  collide () {
    this.visible = false;
  }

}

