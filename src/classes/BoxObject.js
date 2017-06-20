import SAT from 'sat'

/*
 Rectanglular Collidable object for Paddle, Bricks
 */
export default class BoxObject {
  constructor (x, y, width, height, pixelRatio, color, context, canvas) {
    this.ctx = context;
    this.cvs = canvas;
    this.pixelRatio = pixelRatio;
    this.color = color;
    this.velocity = new SAT.Vector(0, 0); // negative goes left, positive goes right
    this.box = new SAT.Box(new SAT.Vector(x, y), width, height);
  }

  update () {
    // move the object
    this.box.pos.add(this.velocity);

    // clamp to horizontal bounds
    this.box.pos.x = Math.max(Math.min(this.box.pos.x, this.cvs.width), 0);
  }

  draw () {
    // rect is drawn from upper left corner
    this.ctx.beginPath();
    this.ctx.rect(this.box.pos.x, this.box.pos.y, this.box.w, this.box.h);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();
  }
}
