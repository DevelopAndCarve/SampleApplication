import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { CustomerDetailComponent } from 'src/app/components/customers-list/customer-detail/customer-detail.component';
import { CustomersListComponent } from '../../components/customers-list/customers-list.component';
import { OrdersListComponent } from '../../components/orders-list/orders-list.component';
import { ProductsListComponent } from '../../components/products-list/products-list.component';

const routes: Routes = [
  { path: 'customers', component: CustomersListComponent },
  { path: 'customer/:id', component: CustomerDetailComponent },
  { path: 'products', component: ProductsListComponent },
  { path: 'orders', component: OrdersListComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
