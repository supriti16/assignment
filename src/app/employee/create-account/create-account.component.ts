import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})

export class CreateAccountComponent  {
  firstFormGroup:FormGroup;
  password: string;
employeeInfo:EmployeeInfo

  show = false;
  constructor(private _formBuilder: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.firstFormGroup=this._formBuilder.group({
      lastName:['', Validators.required],
      firstName:['', Validators.required],
      contactNumber:['', Validators.compose([Validators.required,Validators.pattern(`^\\+[1-9]{2} [0-9]{3,14}$`)])],
      email:['', Validators.compose([Validators.required,Validators.email])],
      password:['', Validators.required]
    })
    this.password = 'password';
  }
  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }
  onSubmitButtonClick(){
    debugger;
    if(this.firstFormGroup.valid){
      this.employeeInfo={
        lastName:this.firstFormGroup.value.lastName,
        firstName:this.firstFormGroup.value.firstName,
        password:this.firstFormGroup.value.password,
        email:this.firstFormGroup.value.email,
        contactNumber:this.firstFormGroup.value.contactNumber,
      }
      localStorage.setItem('employeeInfo',JSON.stringify(this.employeeInfo))
      console.log(this.firstFormGroup.controls);
      this.router.navigate(['allEmployeeList'])
    }
    else{
      alert('Please fill the form with proper validations!')
    }
    
  }

}
export interface EmployeeInfo {
  email?: number;
  firstName?: string;
  lastName?: number;
  contactNumber?: string;
  password?:string;
}