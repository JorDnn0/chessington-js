import Piece from './piece';
import gameSettings from "../gameSettings";
import Square from "../square";

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let pos = board.findPiece(this)
        let moves = []
        let boardSize = gameSettings.BOARD_SIZE

        let directions = [
            [1,2],[1,-2],[-1,2],[-1,-2],
            [2,1],[2,-1],[-2,1],[-2,-1]
        ]

        for(let dir in directions) {
            let newPos = new Square(pos.row,pos.col)
            if() {

            }
        }

        return moves
    }
}
