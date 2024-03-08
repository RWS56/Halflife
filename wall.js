class Wall {
    constructor(origin, width, height, type) {
        this.type = type;
        this.origin = origin;
        this.width = width;
        this.height = height;
    }

    rect() {
        return new Rect(this.origin[0], this.origin[1], this.width, this.height);
    }


}