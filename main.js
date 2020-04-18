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

const width = 4; 
const height = 4; 
const x = 2; 
const y = 2; 

const board = new Simulation(width, height, x, y); 
const result = board.simulate(1, 4, 1, 3, 2, 3, 2, 4, 1, 0);
console.log(`Successful simulation:`, JSON.stringify(result) == JSON.stringify([0, 1]));
