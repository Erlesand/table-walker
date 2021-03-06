class Simulation {
    constructor(width, height, x, y) {
        this.board = new Board(width, height);
        this.piece = new Piece(x, y);
        this.piece.addToBoard(this.board);
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
                    this.piece.rotate(Piece.COUNTERCLOCKWISE);
                    break;
                default:
                    console.log('Oh no, they tried to use an option I do not support...');
            }
        });

        return this.piece.getPosition();
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
        this.outOfBounds = false;
    }

    addToBoard(board) {
        this.board = board;
    }

    move(movement = Piece.FORWARD) {
        let x = this.x + movement * this.facing()[0];
        let y = this.y + movement * this.facing()[1];

        if (!this.isValidMove(x, y)) {
            this.outOfBounds = true;
        }

        this.setPosition(x, y);
    }

    facing() {
        return this.directions[this.direction];
    }

    isValidMove(x, y) {
        const valid = (x >= 0 && x < this.board.width)
            && (y >= 0 && y < this.board.height);

        return valid;
    }

    getPosition() {
        return this.outOfBounds
            ? [-1, -1]
            : [this.x, this.y];
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    rotate(rotation = Piece.CLOCKWISE) {
        const edges = {
            [Piece.CLOCKWISE]: 0,
            [Piece.COUNTERCLOCKWISE]: this.directions.length - 1
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
