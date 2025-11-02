import { Component, OnInit, signal } from '@angular/core';
import { GroceriesService } from '../groceries.service';
import { Grocery } from '../interface/groceries.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-grocery-list',
  standalone: false,
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.scss',
})
export class GroceryListComponent implements OnInit {
  // TODO: change to signal
  groceries: Grocery[] = [];
  filterColor = '';
  availableColors = signal<string[]>([]);

  constructor(
    private groceriesService: GroceriesService,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    this.getGroceries('');
  }

  selectGrocery(grocery: Grocery) {
    this.groceriesService.select(grocery);
  }

  onColorChange(color: string) {
    this.getGroceries(color);
  }

  trackById(index: number, grocery: Grocery) {
    return grocery.id;
  }

  private getGroceries(color: string) {
    this.groceriesService.getGroceries(color).subscribe({
      next: (response) => {
        this.groceries = response.data;
        this.availableColors.set(
          Array.from(new Set(this.groceries.map((g) => g.color))).filter(
            Boolean,
          ),
        );
      },
      error: (err) => {
        // TODO: add i18n for localization
        this.snackBar.open('Failed to load groceries', 'Close', {
          duration: 3000,
        });
      },
    });
  }
}
