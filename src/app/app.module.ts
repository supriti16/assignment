import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { CreateAccountComponent } from './employee/create-account/create-account.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EmployeeDataComponent } from './employee/employee-data/employee-data.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';

@NgModule({
  imports: [
    MatTableModule,
    MatIconModule,
    FormsModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: CreateAccountComponent },
    ]),
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    CreateAccountComponent,
    EmployeeDataComponent,
    EmployeeDetailsComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
