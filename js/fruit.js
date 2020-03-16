class Fruit {
    constructor() {
        this.x;
        this.y;
    }

    pickLocation() {
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;

        this.draw();
    }

    draw() {
        ctx.fillStyle = "#ff5b4f";
        ctx.fillRect(this.x, this.y, scale, scale);
    }
}