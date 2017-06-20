import BoxObject from './BoxObject.js'


export default class Paddle extends BoxObject {
  constructor (x, y, width, height, pixelRatio, color, context, canvas) {
    super(x, y, width, height, pixelRatio, color, context, canvas);
    this.mouseX = 0;
    // listen for mouse move; bind 'this' via arrow function
    document.addEventListener('mousemove', (e) => this.mouseMove(e));
  }

  mouseMove (e) {
    // we can't reliably access mouse coordinates w/o listening for event.
    // this is our hack to remember where the mouse is when it's not moving.
    this.mouseX = e.pageX * this.pixelRatio;
  }

  update () {
    // change velocity depending on which side mouse is on; position center on mouse pointer
    this.velocity.x = this.mouseX - this.box.pos.x - this.box.w / 2;
    super.update();
  }

}
