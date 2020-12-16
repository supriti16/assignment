import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carsize',
  templateUrl: './carsize.component.html',
  styleUrls: ['./carsize.component.css']
})
export class CarsizeComponent implements OnInit {
  selected1=false
  selected2=false
  selected3=false
  carsize1=""
  carsize2=""
  carsize3=""

  onSelectCard1(){
    this.selected1=!this.selected1
  }
  onSelectCard2(){
    this.selected2=!this.selected2
  }
  onSelectCard3(){
    this.selected3=!this.selected3
  }
  
  
  constructor(private router:Router) {}
  onSubmit(){
    this.router.navigateByUrl('/price')
    if(this.selected1==true){
      this.carsize1=this.selected1.toString()
      localStorage.setItem('carsize1',this.carsize1)
    }
    if(this.selected2==true){
      this.carsize2=this.selected2.toString()
      localStorage.setItem('carsize2',this.carsize2)
    }
    if(this.selected3==true){
      this.carsize1=this.selected3.toString()
      localStorage.setItem('carsize3',this.carsize3)
    }
  }

  ngOnInit(): void {
  }

}
