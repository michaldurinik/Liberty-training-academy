enum ChessPieces {
    KING,
    QUEEN,
    BISHOP,
    ROOK,
    KNIGHT = 12,
    PAWN
}

export function runDemo() {
    let rook = ChessPieces.ROOK;
    console.log(rook);
    console.log(ChessPieces[rook]);

    let knight = ChessPieces.KNIGHT;
    console.log(knight);
    console.log(ChessPieces[knight]);
}
