import SAT from 'sat'


/*
 Ball class
 */
export default class Ball {
  constructor (x, y, ballRadius, moveSpeed, pixelRatio, color, context, canvas) {
    this.ctx = context;
    this.cvs = canvas;
    this.pixelRatio = pixelRatio;
    this.color = color;
    this.velocity = new SAT.Vector(0, 0); // negative goes left, positive goes right
    this.ballRadius = ballRadius;
    this.moveSpeed = moveSpeed;
    this.circle = new SAT.Circle(new SAT.Vector(x, y), this.ballRadius);
  }

  update () {
    // move the ball
    this.circle.pos.add(this.velocity);

    // change direction if we're hitting the ceiling
    if (this.circle.pos.y + this.velocity.y <= this.ballRadius) {
      this.velocity.y = -this.velocity.y;
    }

    // change direction if we're hitting a wall
    if (this.circle.pos.x + this.velocity.x > this.cvs.width - this.ballRadius || this.circle.pos.x + this.velocity.x < this.ballRadius) {
      this.velocity.x = -this.velocity.x;
    }
  }

  draw () {
    // draw the ball
    this.ctx.beginPath();
    this.ctx.arc(this.circle.pos.x, this.circle.pos.y, this.ballRadius, 0, Math.PI * 2);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();
  }

}
