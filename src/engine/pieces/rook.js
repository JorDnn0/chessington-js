import Piece from './piece';
import Board from "../board";
import gameSettings from "../gameSettings";
import Square from "../square";

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let pos = board.findPiece(this)
        let moves = []

        for(let i = 0; i < gameSettings.BOARD_SIZE; i++) {
            //all columns
            if(i !== pos.col) moves.push(new Square(pos.row,i))

            //all rows
            if(i !== pos.row) moves.push(new Square(i,pos.col))
        }

        return moves
    }
}
