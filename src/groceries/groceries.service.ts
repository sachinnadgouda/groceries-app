import { Injectable, signal } from '@angular/core';
import { Grocery, PaginationResponse } from './interface/groceries.interface';
import { AppConfigService } from '../app/app-config.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GroceriesService {
  constructor(
    private http: HttpClient,
    private appConfig: AppConfigService,
  ) {}

  selectedGrocery = signal<Grocery | null>(null);

  select(grocery: Grocery) {
    this.selectedGrocery.set(grocery);
  }

  getGroceries(color: string): Observable<PaginationResponse> {
    // TODO: add a common http service
    // TODO: add pagination
    return this.http.get<PaginationResponse>(
      `${this.appConfig.apiUrl}/groceries`, { params: { color } }
    );
  }
}
