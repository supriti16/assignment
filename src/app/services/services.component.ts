import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  selected1 = false;
  selected2=false;
  selected3=false;
  selected4=false;
  selected5=false;
  selected6=false;
  service1=""
  service2=""
  service3=""
  service4=""
  service5=""
  service6=""
  onSelectCard1() {
    this.selected1 = !this.selected1;
  }
  onSelectCard2() {
    this.selected2 = !this.selected2;
  }
  onSelectCard3() {
    this.selected3 = !this.selected3;
  }
  onSelectCard4() {
    this.selected4 = !this.selected4;
  }
  onSelectCard5() {
    this.selected5 = !this.selected5;
  }
  onSelectCard6() {
    this.selected6 = !this.selected6;
  }
  
  constructor(private router:Router) { }
  onSubmit(){
    this.router.navigateByUrl('/carsize')
    if(this.selected1==true){
      this.service1=this.selected1.toString()
      localStorage.setItem('selected1',this.service1)
    }
    if(this.selected2==true){
      this.service2=this.selected2.toString()
      localStorage.setItem('selected2',this.service2)
    }
    if(this.selected3==true){
      this.service3=this.selected3.toString()
      localStorage.setItem('selected3',this.service3)
    }
    if(this.selected4==true){
      this.service4=this.selected4.toString()
      localStorage.setItem('selected4',this.service4)
    }
    if(this.selected5==true){
      this.service5=this.selected5.toString()
      localStorage.setItem('selected5',this.service5)
    }
    if(this.selected6==true){
      this.service6=this.selected6.toString()
      localStorage.setItem('selected6',this.service6)
    }
  }
  ngOnInit(): void {
  }

}
