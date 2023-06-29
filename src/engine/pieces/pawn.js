import Piece from './piece';
import Square from "../square";

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let pos = board.findPiece(this)
        return [new Square(pos.row+1,pos.col),new Square(pos.row-1,pos.col)];
    }
}
