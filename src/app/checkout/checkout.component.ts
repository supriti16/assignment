import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  service1=localStorage.getItem("selected1")
  service2=localStorage.getItem("selected2")
  service3=localStorage.getItem("selected3")
  service4=localStorage.getItem("selected4")
  service5=localStorage.getItem("selected5")
  service6=localStorage.getItem("selected6")
  carsize1=localStorage.getItem("carsize1")
  carsize2=localStorage.getItem("carsize2")
  carsize3=localStorage.getItem("carsize3")
  constructor(private router:Router) { }
  onSubmit(){
    this.router.navigateByUrl('/serviceNo')
    localStorage.clear();
  }

  ngOnInit(): void {
  }

}
