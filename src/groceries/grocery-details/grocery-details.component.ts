import { Component, computed, Signal } from '@angular/core';
import { GroceriesService } from '../groceries.service';
import { Grocery } from '../interface/groceries.interface';

@Component({
  selector: 'app-grocery-details',
  standalone: false,
  templateUrl: './grocery-details.component.html',
  styleUrl: './grocery-details.component.scss',
})
export class GroceryDetailsComponent {
  constructor(private groceriesService: GroceriesService) {}

  grocery: Signal<Grocery | null> = computed(() =>
    this.groceriesService.selectedGrocery(),
  );
}
