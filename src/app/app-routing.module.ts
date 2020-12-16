import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsizeComponent } from './carsize/carsize.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PriceComponent } from './price/price.component';
import { ServicenoComponent } from './serviceno/serviceno.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'carsize', component: CarsizeComponent },
  { path: 'price', component: PriceComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'serviceNo', component: ServicenoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
