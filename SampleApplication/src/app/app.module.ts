import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MaterialsModule } from './modules/material/materials.module';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MaterialsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    NavigationBarComponent,
    CustomersListComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
