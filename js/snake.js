class Snake {
    constructor() 
    {
        this.x = 0;
        this.y = 100;
        this.xSpeed = scale;
        this.ySpeed = 0;

        this.total = 0;
        this.tail = [];
    }

    draw() 
    {
        ctx.fillStyle = "#000000";

        for(let i = 0; i < this.tail.length; i++) {
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }

        ctx.fillRect(this.x, this.y, scale, scale);
    }

    update() 
    {
        this.drawTail(this.x, this.y);

        // Update the position of the snake
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        //Check if the snake is at the end of the canvas
        if(this.x >= canvas.width) {
            this.x = 0;
        } else if (this.x < 0) {
            this.x = canvas.width;
        }

        if(this.y >= canvas.height) {
            this.y = 0;
        } else if (this.y < 0) {
            this.y = canvas.height;
        }
    }

    drawTail(currentX, currentY) 
    {
        // this.tail[0] = this.tail[1]

        if(this.tail.length) {
            for(let i = 0; i < this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i+1];
            }
        }

        if(this.total > 0) {
            this.tail[this.total - 1] = { x: currentX, y: currentY};
        }
    }

    changeDirection(direction) 
    {
        switch(direction) {
            case "ArrowUp":
                this.xSpeed = 0;
                this.ySpeed = scale * -1;
                break;
            case "ArrowDown":
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
                break;
            case "ArrowLeft":
                this.xSpeed = scale * -1;
                this.ySpeed = 0;
                break;
            case "ArrowRight":
                this.xSpeed = scale * 1;
                this.ySpeed = 0;
                break;
        }
    }

    eat(fruit) 
    {
        if(this.x === fruit.x && this.y === fruit.y) {
            this.total++;
            sessionStorage.setItem("points", this.total);
            document.getElementById("points").innerText = sessionStorage.getItem("points");
            return true;
        }
        return false;
    }

    defeated() 
    {
        for(let i = 0; i < this.tail.length; i++) {
            if(this.x === this.tail[i].x && this.y === this.tail[i].y) {
                return true;
            }
        }

        return false;
    }
}