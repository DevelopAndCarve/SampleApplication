import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MaterialsModule } from './modules/material/materials.module';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerDetailComponent } from './components/customers-list/customer-detail/customer-detail.component';

@NgModule({
  imports: [HttpClientModule, BrowserModule, FormsModule, MaterialsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    NavigationBarComponent,
    CustomersListComponent,
    CustomerDetailComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
