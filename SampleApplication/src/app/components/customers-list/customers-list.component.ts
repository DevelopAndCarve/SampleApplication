import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/Customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit, AfterViewInit {

  public customers:Observable<Customer[]>;

  constructor(private customerService:CustomersService) { 
    this.customers = customerService.GetCustomers();
  }

  ngAfterViewInit(): void {
    
  }

  ngOnInit() {

  }

}