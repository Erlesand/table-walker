class Simulation {
    constructor(width, height, x, y) {
        this.board = new Board(width, height);
        this.piece = new Piece(x, y);
    }

    simulate(...input) {
        input.forEach(option => {
            switch (option) {
                case 0:
                    break;
                case 1:
                    this.piece.move();
                    break;
                case 2:
                    this.piece.move(Piece.BACKWARDS);
                    break;
                case 3:
                    this.piece.rotate();
                    break;
                case 4:
                    // 
                    break;
                default:
                    // 
                    console.log('Oh no, they tried to use an option I do not support...');
            }
        })
    }
}

class Piece {
    static FORWARD = 1;
    static BACKWARDS = -1;
    static CLOCKWISE = 1;
    static COUNTERCLOCKWISE = -1;

    NORTH = 0;
    EAST = 1;
    SOUTH = 2;
    WEST = 3;

    directions = [[0, -1], [1, 0], [0, 1], [-1, 0]];

    constructor(x, y) {
        this.x = x; 
        this.y = y; 
        this.direction = this.NORTH;
    }

    move(movement = Piece.FORWARD) {
        const x = this.x + movement * this.facing()[0];
        const y = this.y + movement * this.facing()[1];

        this.setPosition(x, y);
    }

    facing() {
        return this.directions[this.direction];
    }

    setPosition(x, y) {
        this.x = x; 
        this.y = y;
    }

    rotate(rotation = Piece.CLOCKWISE) {
        const edges = {
            [Piece.CLOCKWISE]: 0,
            [Piece.CCW]: this.directions.length - 1
        };

        const newDirection = this.direction + rotation;

        const passedEdge = newDirection < edges[Piece.CLOCKWISE]
            || newDirection > edges[Piece.COUNTERCLOCKWISE];

        this.direction = passedEdge ? edges[rotation] : newDirection;
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
