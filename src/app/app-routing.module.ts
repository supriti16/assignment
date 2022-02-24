import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './employee/create-account/create-account.component';
import { EmployeeDataComponent } from './employee/employee-data/employee-data.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';

const routes: Routes = [
  { path: '', component: CreateAccountComponent },
  { path: 'allEmployeeList', component: EmployeeDataComponent },
  { path: 'employeeDetails', component: EmployeeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
