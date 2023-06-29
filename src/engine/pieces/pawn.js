import Piece from './piece';
import Square from "../square";
import Player from "../player";

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let pos = board.findPiece(this)
        let moves = []

        if(this.player === Player.WHITE){
            moves.push(new Square(pos.row+1,pos.col))
        }else {
            moves.push(new Square(pos.row - 1, pos.col))
        }
        if(this.first) {
            let twoMove = this.player === Player.WHITE ? new Square(pos.row + 2, pos.col) : new Square(pos.row - 2, pos.col);
            moves.push(twoMove)
        }
        return moves
    }
}
