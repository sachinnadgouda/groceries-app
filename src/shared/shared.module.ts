import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [FilterComponent],
  imports: [CommonModule, MatFormFieldModule, MatSelectModule],
  exports: [FilterComponent],
})
export class SharedModule {}
