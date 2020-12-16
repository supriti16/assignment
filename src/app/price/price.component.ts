import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  displayCard1=localStorage.getItem("selected1")
  displayCard2=localStorage.getItem("selected2")
  displayCard3=localStorage.getItem("selected3")
  displayCard4=localStorage.getItem("selected4")
  displayCard5=localStorage.getItem("selected5")
  displayCard6=localStorage.getItem("selected6")
  displayCard7=localStorage.getItem("carsize1")
  displayCard8=localStorage.getItem("carsize2")
  displayCard9=localStorage.getItem("carsize3")
  constructor(private router:Router) { }
  onSubmit(){
    this.router.navigateByUrl('/contact')
  }
  ngOnInit(): void {
  }

}
