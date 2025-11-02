import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroceryDetailsComponent } from './grocery-details/grocery-details.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { GroceriesService } from './groceries.service';
import { MatList, MatListItem } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [GroceryListComponent, GroceryDetailsComponent],
  imports: [CommonModule, MatList, MatListItem, MatCardModule, SharedModule],
  exports: [GroceryListComponent, GroceryDetailsComponent],
  providers: [GroceriesService],
})
export class GroceriesModule {}
