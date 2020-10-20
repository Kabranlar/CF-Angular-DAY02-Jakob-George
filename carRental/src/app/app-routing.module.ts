import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: "", component: CarsComponent
  },
  {
    path: "contact", component: ContactComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
