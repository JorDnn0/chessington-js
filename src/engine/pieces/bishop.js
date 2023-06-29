import Piece from './piece';
import gameSettings from "../gameSettings";
import Square from "../square";

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    static getAllMoves(pos){
        let moves = []
        let boardSize = gameSettings.BOARD_SIZE

        for(let i = 1; i < boardSize; i++) {
            if(i + pos.row < boardSize && i + pos.col < boardSize) {
                moves.push(new Square(pos.row+i,pos.col+i))
            }
            if(pos.row - i >= 0 && pos.col - i >= 0) {
                moves.push(new Square(pos.row-i,pos.col-i))
            }
            if(i + pos.row < boardSize && pos.col - i >= 0) {
                moves.push(new Square(pos.row+i,pos.col-i))
            }
            if(pos.row - i >= 0 && i + pos.col < boardSize) {
                moves.push(new Square(pos.row-i,pos.col+i))
            }
        }
        return moves
    }

    getAvailableMoves(board) {
        let pos = board.findPiece(this)

        return Bishop.getAllMoves(pos)
    }
}
