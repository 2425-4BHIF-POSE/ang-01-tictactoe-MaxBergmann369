import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-field',
  standalone: true,
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent {
  @Input() field!: Field;
  @Output() onClicked = new EventEmitter<void>();

  handleClick() {
    this.onClicked.emit();
  }
}

export type FieldContent = "X" | "O" | "";

export interface Field {
  position: [number, number];
  content: FieldContent;
}
