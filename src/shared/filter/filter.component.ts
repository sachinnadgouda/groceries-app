import { Component, Input, signal, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-filter',
  standalone: false,
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  @Input({ required: true }) colors: string[] = [];
  selectedColor = signal<string>('');
  @Output() colorChange = new EventEmitter<string>();

  onColorChange(color: string) {
    this.selectedColor.set(color);
    this.colorChange.emit(color);
  }
}
