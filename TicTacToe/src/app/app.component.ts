import { Component } from '@angular/core';
import {GameComponent} from './game/game.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [GameComponent],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TicTacToe';
}
