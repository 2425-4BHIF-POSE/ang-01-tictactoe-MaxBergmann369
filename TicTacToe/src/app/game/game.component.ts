import { Component } from '@angular/core';
import {Field, FieldComponent, FieldContent} from './field/field.component';

@Component({
  selector: 'app-game',
  standalone: true,
  templateUrl: './game.component.html',
  imports: [
    FieldComponent
  ],
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  protected board: Field[][] = [];
  protected currentPlayer: FieldContent = 'X';
  protected statusMessage: string = "Turn of Player: X";
  protected gameOver: boolean = false;

  constructor() {
    this.resetBoard();
  }

  private resetBoard() {
    this.board = Array.from({ length: 3 }, (_, rowIndex) =>
      Array.from({ length: 3 }, (_, colIndex) => ({
        position: [rowIndex, colIndex],
        content: ""
      }))
    );
  }

  protected makeMove(row: number, col: number) {
    const cell = this.board[row][col];
    if (cell.content === "" && !this.gameOver) {
      cell.content = this.currentPlayer;

      if (this.checkWinner()) {
        this.statusMessage = `${this.currentPlayer} Wins!`;
        this.gameOver = true;
      } else if (this.isBoardFull()) {
        this.statusMessage = `It's a Draw!`;
        this.gameOver = true;
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        this.statusMessage = `Turn of Player: ${this.currentPlayer}`;
      }
    }
  }

  private checkWinner(): boolean {
    for (let i = 0; i < 3; i++) {
      if (this.board[i][0].content && this.board[i][0].content === this.board[i][1].content && this.board[i][1].content === this.board[i][2].content) {
        return true;
      }
      if (this.board[0][i].content && this.board[0][i].content === this.board[1][i].content && this.board[1][i].content === this.board[2][i].content) {
        return true;
      }
    }

    if (this.board[0][0].content && this.board[0][0].content === this.board[1][1].content && this.board[1][1].content === this.board[2][2].content) {
      return true;
    }
    if (this.board[0][2].content && this.board[0][2].content === this.board[1][1].content && this.board[1][1].content === this.board[2][0].content) {
      return true;
    }

    return false;
  }

  private isBoardFull(): boolean {
    return this.board.every(row => row.every(cell => cell.content !== ""));
  }
}
