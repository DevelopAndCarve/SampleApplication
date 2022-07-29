import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/Customer';

export const CUSTOMERS_URL_API = '../../assets/data/Customers.json';
@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  public GetCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(CUSTOMERS_URL_API);
  }

  public GetCustomer(id: number, onSuccess: (customer: Customer) => void, onError: (error: string) => void) {
    this.http.get<Customer[]>(CUSTOMERS_URL_API).subscribe((data: Customer[]) => {
      const customer = data.find(customer => customer.Id === id);
      if (customer) {
        onSuccess(customer);
        return;
      }
      onError('Customer Not Found');
    });
  }
}
