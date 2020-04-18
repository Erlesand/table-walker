class Simulation {
    constructor(width, height, x, y) {
        this.board = new Board(width, height);
        this.piece = new Piece(x, y);
    }

    simulate(...input) {
        //
    }
}

class Piece {
    constructor(x, y) {
        this.x = x; 
        this.y = y; 
    }
}

class Board {
    constructor(width, height) {
        this.width = width; 
        this.height = height; 
    }
}
