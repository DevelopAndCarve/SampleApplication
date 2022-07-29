import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements AfterViewInit {

  public selectedCustomer: Customer = new Customer();

  constructor(private customerService: CustomersService, private route: ActivatedRoute, private routing:Router) { }

  ngAfterViewInit(): void {
    const customerId: number = +this.route.snapshot.params['id'];
    this.customerService.GetCustomer(customerId, (customer) => this.onCustomerLoaded(customer), (error: string) => this.onCustomerFailure(error));
  }

  onCustomerFailure(error: string): void {
    alert(error);
  }

  onCustomerLoaded(customer: Customer): void {
    this.selectedCustomer = customer;
    this.routing.navigate()
  }

}
