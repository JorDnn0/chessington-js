import Piece from './piece';
import Bishop from "./bishop";
import Rook from "./rook";

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let pos = board.findPiece(this)
        let moves = []
        moves.push(...Rook.getAllMoves(pos))
        moves.push(...Bishop.getAllMoves(pos))
        return moves
    }
}
